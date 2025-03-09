const path = require('path');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (env) => {
    const basePlugins = [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/template.html'
        })
    ];
    const isDevelopment = process.env.NODE_ENV === 'development';
    const plugins = isDevelopment
        ? basePlugins
        : [...basePlugins, new BundleAnalyzerPlugin()];
    return {
        mode: isDevelopment ? 'development' : 'production',
        entry: {
            app: path.resolve('src/index.js')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true,
            assetModuleFilename: '[base]'
        },
        devtool: isDevelopment ? 'source-map' : false,
        module: {
            rules: [
                {
                    test: /\.s[ac]ss|css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        debug: true,
                                        useBuiltIns: 'entry', //use 'entry' must manually import, use 'usage' will automatically import
                                        corejs: '3.41.0'
                                    }
                                ]
                            ]
                        }
                    }
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
                    type: 'asset/resource'
                }
            ]
        },
        plugins,
        devServer: {
            static: {
                directory: 'dist' // Đường dẫn tương đối đến với thư mục chứa index.html
            },
            port: 3001, // Port thay cho port mặc định (8080)
            open: true, // Mở trang webpack khi chạy terminal
            hot: true, // Bật tính năng reload nhanh Hot Module Replacement
            compress: true, // Bật Gzip cho các tài nguyên
            historyApiFallback: true // Set true nếu bạn dùng cho các SPA và sử dụng History API của HTML5
        }
    };
};
