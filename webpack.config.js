module.exports = {
    // devtool 配置参数
    // ***
    // source-map
    // 在一个单独的文件中产生一个完整且功能完全的文件。
    // 这个文件具有最好的source map，但是它会减慢打包速度；
    // cheap-module-source-map
    // 在一个单独的文件中生成一个不带列映射的map
    // eval-source-map
    // 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。
    // 这个选项可以在不影响构建速度的前提下生成完整的sourcemap
    // 生产阶段有安全隐患
    // cheap-module-eval-source-map
    // 这是在打包文件时最快的生成source map的方法，
    // 生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，
    // 和eval-source-map选项具有相似的缺点；
    // ***
    // 比较
    // eval-source-map是一个很好的选项，再次强调你只应该开发阶段使用它 
    // cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用。
    devtool: 'eval-source-map', 
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js" //打包后输出文件名
    },    
    devServer: {
        // 默认webpack-dev-server会为根文件夹提供本地服务器，
        // 如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
        contentBase: "./public",
        // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，
        // 所有的跳转将指向index.html
        historyApiFallback: true,
        // 设置默认监听端口，如果省略，默认为”8080“
        port: 3000,
        // 设置为true，当源文件改变时会自动刷新页面
        inline: true
    },
    // Loaders规范
    // test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
    // loader：loader的名称（必须）
    // include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
    // query：为loaders提供额外的设置选项（可选）
    // module:{
    //     rules: [
    //         {
    //             test: /(\.jsx|\.js)$/,
    //             use:{
    //                 loader: "babel-loader",
    //                 options: { // 这儿的配置???教程没说明
    //                     presets: [
    //                         "env", "react"
    //                     ]
    //                 }
    //             },
    //             exclude: /node_modules/
    //         },
    //         {
    //             test: /\.css$/,
    //             use: [
    //                 {
    //                     loader: "style-loader"
    //                 },{
    //                     loader: "css-loader",
    //                     options: {
    //                         modules: true, // css模块化 给hash
    //                         localIdentName: '[name]__[local]--[hash:base4:5]'// 制定模块格式
    //                     }
    //                 }
    //             ]
    //         }
    //     ]
    // },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }
        ]
    }    
};
// 注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。