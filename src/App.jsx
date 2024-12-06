import { useState, useEffect } from 'react';

function App() {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  // Carregar tarefas do LocalStorage quando o componente for montado
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []); // Executa apenas uma vez, quando o componente for montado

  // Função para adicionar uma tarefa
  const addTask = () => {
    if (taskInput.trim() === '') return;
    const newTask = { id: Date.now(), content: taskInput };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTaskInput('');
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Salva as tarefas no LocalStorage
  };

  // Função para remover uma tarefa com confirmação
  const removeTask = (id) => {
    const confirmRemove = window.confirm("Tem certeza que deseja remover esta tarefa?");
    if (confirmRemove) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Atualiza no LocalStorage
    }
  };

  // Função para editar uma tarefa
  const editTask = (id) => {
    const newContent = prompt('Edit the task:', tasks.find(task => task.id === id).content);
    if (newContent && newContent.trim() !== '') {
      const updatedTasks = tasks.map(task => 
        task.id === id ? { ...task, content: newContent } : task
      );
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Atualiza no LocalStorage
    }
  };

  // Função para exibir o card de informações
  const handleCardClick = (task) => {
    setSelectedTask(task);
  };

  const closeCardInfo = () => {
    setSelectedTask(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Meu Bloco de Notas </h1>
      

      <div className="flex mb-6 w-full max-w-lg">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Digite uma nova tarefa"
          className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
        />
       <button
  onClick={addTask}
  className="ml-2 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 flex items-center"
>
  Adicionar  
  <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor"  d="M5 11.917 9.724 16.5 19 7.5"/>
</svg>

</button>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 w-full max-w-6xl">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            onClick={() => handleCardClick(task)}
          >
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 w-full text-left hover:bg-blue-600 transition duration-300 flex items-center justify-between">
          <span>
            {task.content.length > 30 ? task.content.substring(0, 30) + '...' : task.content} 
             <svg className="w-4 h-6 ml-1 text-white-800 dark:text-white flex items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
               <path stroke="currentColor"  d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
             </svg>
          </span>        
        </button>

            <div className="flex items-center justify-center gap-3 w-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  editTask(task.id);
                }}
                className="bg-yellow-300 text-white py-1 px-3 rounded-lg hover:bg-yellow-200 transition duration-300"
              >
                Editar
             </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeTask(task.id);  // Chama a função com confirmação
                }}
                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTask && (
        <div className="fixed top-0 left-0 w-full h-full bg-green bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-blue-100 p-6 rounded-xl w-100">
            <h3 className="text-2xl font-semibold mb-4">Detalhes:</h3>
            
            <textarea
              value={selectedTask.content}
              readOnly
              rows={12}
              className="w-full p-2 border border-blue-300 rounded-lg resize-none mb-4"
              
            />
            <button
              onClick={closeCardInfo}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"              
            >              
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
