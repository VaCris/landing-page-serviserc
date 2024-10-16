module.exports = {
  content: [
      './src/pages/**/*.html',
      './src/js/**/*.js',
  ],
  theme: {
      extend: {
          screens: {
              'xxs': '320px',   
              'xs': '480px',    
              'sm': '640px',    
              'md': '768px',    
              'lg': '1024px',  
              'xl': '1280px',   
              '2xl': '1536px',  
              '3xl': '1600px',  
              '4xl': '1920px',  
              '5xl': '2560px',  
          },
      },
  },
  plugins: [],
};
