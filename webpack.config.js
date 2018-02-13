const path = require('path');

module.exports = {

    entry: './src/entry',

    output: {
        path: path.resolve(__dirname, 'build/static'),
        filename: 'app.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'postcss-loader',
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'src/static'),
        // compress: true,
        port: 9000,
        historyApiFallback: true,
    },

};