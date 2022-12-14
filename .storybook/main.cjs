const ResolveTypescriptPlugin = require("resolve-typescript-plugin");
const path = require("path");

module.exports = {
  features: {
    babelModeV7: true,
  },
  framework: "@storybook/html",
  stories: ["../src/**/*.stories.ts"],
  core: {
    disableTelemetry: true,
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new ResolveTypescriptPlugin({
        includeNodeModules: true,
      }),
    ];
    config.module.rules = [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        sideEffects: true,
        options: {
          configFile: path.resolve("./tsconfig.json"),
          transpileOnly: true,
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ];

    return config;
  },
};
