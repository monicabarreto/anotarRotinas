// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./index.html",
//   "./src/**/*.{js,jsx,ts,tsx}", // Aponte para os arquivos JSX ou TSX
// ];
// export const theme = {
  
//   extend: {},
// };
// export const plugins = [];


export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se de incluir arquivos JSX/TSX
];
export const theme = {
  extend: {
    fontFamily: {
      delius: ['"Delius Swash Caps"', 'cursive'], // Fonte Delius Swash Caps
      playwrite: ['"Playwrite CO Guides"', 'serif'], // Fonte Playwrite CO Guides
    },
    boxShadow: {
      'text': '1px 1px 3px rgba(169, 169, 169, 0.6)', // Sombra de texto cinza clara
    },
  },
};
export const plugins = [];
