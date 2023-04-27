module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    modules:{
      loaders:[
        {test: /\.html$/, loader: 'html-loader'}
      ]
    }
  }


  // {
  //   modules: {
  //     loaders: [
  //       { test: /\.html$/, loader: 'html-loader' }
  //     ]
  //   }
  // }