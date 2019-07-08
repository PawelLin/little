// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        css: './src/pages/css/main.js',
        vue: './src/pages/vue/main.js'
    },
    module: {
        rules: [
            // ... 其它规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        openPage: 'vue.html',
        hot: true,
        port: '3000',
        // host: '0.0.0.0'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'css.html',
            template: 'public/index.html',
            title: 'miu-css',
            chunks: ['css']
        }),
        new HtmlWebpackPlugin({
            filename: 'vue.html',
            template: 'public/index.html',
            title: 'miu-vue',
            chunks: ['vue']
        }),
        new VueLoaderPlugin()
    ]
}