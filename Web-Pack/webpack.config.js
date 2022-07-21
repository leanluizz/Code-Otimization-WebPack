const modoDev = process.env.NODE_ENV !== "production"
const webpack = require("webpack");
const MiniCSS = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const Optimize = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode:"development",
    entry: "./src/main.js", //Catch the file for use
    output: {      //"Output" where the "entry" will use
          filename:"main.js",
          path:__dirname + "/public"
    },
   
   plugins:[
      new MiniCSS({
        filename:"style.css"
      }),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
            ecma: 6,
        },
    }),
   ],
    module: { //For use CSS in Webpack 
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCSS.loader,
                //"style-loader", //Add CSS in DOM injecting the tag <style>
                "css-loader",
                "sass-loader" // @import, url()
            ]
        }]
    }
}