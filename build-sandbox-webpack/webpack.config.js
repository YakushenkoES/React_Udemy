const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development", //"production" "development"

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"

            },

            // Loading images
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name]-[sha1:hash:7].[ext]'
                    }
                }]
            },

            // Loading fonts
            {
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        name: '[name].[ext]'
                    }
                }]
            },

            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.s[ca]ss$/,
                use: ["style-loader", "css-loader",
                    {
                        loader: "sass-loader",
                        options: {}
                    }

                ]
            }


        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:'./public/index.html'
        })
    ]
};