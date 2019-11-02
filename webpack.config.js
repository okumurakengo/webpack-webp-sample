const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ["babel-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext].webp",
                            context: "src"
                        },
                    },
                    "webp-loader?{quality: 15}",
                ],
            }
        ]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" })
    ],
};
