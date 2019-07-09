// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    mode: 'development',
    entry: {
        css: './src/pages/css/main.js',
        vue: './src/pages/vue/main.js'
    },
    resolve: {
        alias: {
            '@': resolve('../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
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