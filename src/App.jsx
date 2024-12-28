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

  // Função para adicionar emoji de marcação ao pressionar Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Impede o salto de linha padrão
      const newValue = taskInput + '\n📌 '; // Adiciona emoji no início da nova linha
      setTaskInput(newValue); // Atualiza o conteúdo do campo de entrada
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://img.freepik.com/vetores-gratis/fundo-minimalista-gradiente_23-2150012301.jpg?t=st=1734791342~exp=1734794942~hmac=2996485b15a722aa607e584c272723340159eb6c469116de917713306ce3a6ca&w=740')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex flex-col items-center py-8 px-4"
    >
 
      
 <div className="fixed top-0 left-0 w-full bg-blue-400 p-4 z-50">
  <h1 className="text-4xl font-delius text-center text-white mb-4 font-bold flex items-center justify-center">
    Meu bloquinho de notas...
    <img src="koala.png" alt="" className="mr-4 w-12 h-12" />

  </h1>
  <p className="font-playwrite text-lg text-white text-center">
    Crie, planeje, anote o que quiser...
  </p>
  
</div>


<div className="pt-28 flex flex-col mb-3 w-full max-w-lg"> {/* Adicionando padding-top para o conteúdo não ficar embaixo do header */}
  {/* Campo de entrada (textarea) */}
  <textarea
    value={taskInput}
    onChange={(e) => setTaskInput(e.target.value)}
    onKeyDown={handleKeyDown} // Adicionando evento de tecla pressionada
    placeholder="Digite uma nova tarefa"
    className="w-full p-4 border border-gray-300 rounded-lg shadow-md resize-none h-32"
  />

  {/* Botão abaixo do campo de entrada */}
  <button
    onClick={addTask}
    className="mt-2 bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition duration-300 flex justify-center items-center"
  >
    Adicionar
    <svg className="w-6 h-6 text-white-800 dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" d="M5 11.917 9.724 16.5 19 7.5"/>
    </svg>
  </button>
</div>


      {/* Lista de tarefas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 w-full max-w-6xl">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            onClick={() => handleCardClick(task)}
          >
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4 w-full text-left hover:bg-blue-600 transition duration-300 flex items-center justify-between">
              <span>
                {task.content.length > 30 ? task.content.substring(0, 30) +'\n💬' : task.content}
              </span>
            </button>

            <div className="flex items-center justify-center gap-3 w-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  editTask(task.id);
                }}
                className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-300 transition duration-300"
              >
                Editar
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeTask(task.id); // Chama a função com confirmação
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
              rows={8}
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
