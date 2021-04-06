const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' },
                ],
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'img/[name].[hash:6][ext]'
            //     }
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024,
                    }
                }
            },
        ]
    }
}