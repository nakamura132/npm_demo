const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// モード値を production に設定すると最適化された状態で、
	// development に設定するとソースマップ有効でJSファイルが出力される
	mode: "development",
	// メインとなるJavascriptファイル (エントリーポイント)
	entry: `./src/index.js`,

	// ファイルの出力設定
	output: {
		// 出力ファイルのディレクトリ名
		path: `${__dirname}/dist`,
		// 出力ファイル名
		filename: "main.js"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	target: ["web", "es5"],
	devServer: {
		host: '0.0.0.0',
		port: 8006,
		static: "dist",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					}
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin ({
			title: "React App",
			template: path.resolve(__dirname, "./src/index.html"),
			filename: "index.html",
		}),
	],
};
