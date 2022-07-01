const path = require("path");

module.exports = [
    {
        entry: "./src/index.ts",
        output: {
            filename: "./dist/moji.js",
            library: "moji",
            libraryTarget: "umd",
            path: path.resolve(__dirname),
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: "ts-loader",
                },
            ],
        },
        resolve: {
            extensions: [".ts"],
        },
    },
    {
        entry: "./src/index.ts",
        output: {
            filename: "./docs/moji.js",
            library: "moji",
            libraryTarget: "umd",
            path: path.resolve(__dirname),
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: "ts-loader",
                },
            ],
        },
        resolve: {
            extensions: [".ts"],
        },
    },
    /*
    {
        entry: ["./test/moji.core.spec.ts", "./test/moji.str.spec.ts"],
        output: {
            filename: "./docs/moji.spec.js",
            path: path.resolve(__dirname),
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: "ts-loader",
                },
            ],
        },
        resolve: {
            extensions: [".ts"],
        },
    },
    */
];
