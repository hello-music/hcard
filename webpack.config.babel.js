import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;

const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMAND;

const PATHS = {
    app: path.resolve(__dirname, 'app'),
    build: path.resolve(__dirname, 'dist'),
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: PATHS.app + '/index.html',
    filename: 'index.html',
    inject: 'body',
});

const productionPlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production'),
    },
});

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
});
const cleanPlugin = new CleanWebpackPlugin(['dist']);

const base = {
    entry: [
        PATHS.app,
    ],
    output: {
        publicPath: '/',
        path: PATHS.build,
        filename: 'index-bundle-[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-loader',
                        options: {modules: true},
                    },
                ],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                use: [
                    {
                        loader: 'file',
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'app'),
            "node_modules"
        ],
        alias: {
            config: path.resolve(__dirname, 'app/config/'),
        },
        extensions: ['.js', '.jsx'],
    },
};

const developmentConfig = {
    devtool: 'eval',
    devServer: {
        contentBase: PATHS.build,
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()],
};

const productionConfig = {
    devtool: 'source-map',
    plugins: [HTMLWebpackPluginConfig, productionPlugin, uglifyPlugin, cleanPlugin],
};

export default Object.assign(
    {}, base, isProduction === true ? productionConfig : developmentConfig
);
