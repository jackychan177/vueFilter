const path=require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
   entry:'./src/main.js',
   output:{
     path:path.resolve(__dirname,'dist'),
     filename:"bundle.js"
   },
   resolve: {	
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    }
    },
   module:{
     rules:[
       {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
       },
       {
     
        test: /\.styl$/,
        use: ['style-loader', 'css-loader','stylus-loader']
       },
       {
        test: /\.vue$/,
        use: ['vue-loader']
       }
     ]
   },
   plugins: [
    new VueLoaderPlugin()
  ]
}