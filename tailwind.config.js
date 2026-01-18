const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend :{
      colors : {
        "background": "#f6f6f6",
        "base": "#FCFAEE",
        "Orange":"#DA8359",
        "Green": "#A5B68D",
        "Crime": "#ECDFCC",
      }  
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};


export default config;