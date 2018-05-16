import path from 'path';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash].js'
  },
  devServer: {
    contentBase: "./dist"
  },  
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }      
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      components: './js'
    },
    extensions: ['.js']
  }  
}