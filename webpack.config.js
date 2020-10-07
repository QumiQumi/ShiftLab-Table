const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: { main: "./src/index.js" },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader", // compiles Sass to CSS
				],
				exclude: [/node_modules/],
			},
		],
	},
	plugins: [
		// Array of plugins to apply to build chunk
		new HtmlWebpackPlugin({
			template: __dirname + "/src/public/index.html",
			inject: "body",
		}),
	],
	devServer: {
		// configuration for webpack-dev-server
		contentBase: "./src/public", //source of static assets
		port: 7700, // port to run dev-server
	},
};
