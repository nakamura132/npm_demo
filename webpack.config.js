const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// モード値を production に設定すると最適化された状態で、
	// development に設定するとソースマップ有効でJSファイルが出力される
	mode: "development",
	// メインとなるJavascriptファイル (エントリーポイント)
	entry: `./src/js/index.js`,

	// ファイルの出力設定
	output: {
		// 出力ファイルのディレクトリ名
		path: `${__dirname}/dist`,
		// 出力ファイル名
		filename: "main.js"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
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
			title: "Try webpack",
			template: path.resolve(__dirname, "./src/index.html"),
			filename: "index.html",
		}),
	],
};
