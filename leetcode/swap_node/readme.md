- 无编译 不代码
    webpack 已经成为工作流程的霸主
    编译过程和 js 的 promise 一样异步

    1. 代码写在 dev  src/
    2. 上线在 build  dist/
    3. 启动web服务器   webpack-dev-server

- webpack html template
    plugin: html-webpack-plugin

- log 不在根目录下, 怎么找到它呢
    多写地址吗 ? ./utils/log.js ???
    有alias 

    resolve 通过extensions找到.js文件 -> 
        module
            rules
                .js babel-loader

babel-core babel-cli babel-preset-env
babel-loader 有兼容性
module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader'
      }
    ]
}
resolve: {
    extensions: ['.js']
}

8080端口由webpack-dev-server启动 html-webpack-plugin
template  ./src/index.html
为什么 js 运行不了
html + js

- webpack 一切皆可打包,打包到 js 里
    css 对 js 来说就是个文本
    img 对 js 打包成 base64
    但是 css 应该独立打包,性能优化的需要
    main.js 显示是最慢的