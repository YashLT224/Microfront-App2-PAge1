const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const CopyPlugin = require("copy-webpack-plugin");
module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "medium",
    projectName: "page1",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // entry: { "@medium/page2": "http://localhost:9004/remoteEntry.js" },
    plugins: [
      // new HtmlWebpackPlugin({
      //   template: "./public/index.html",
      // }),

      new ModuleFederationPlugin({
        name: "page1",
        filename: "remoteEntry.js",
        library: {
          type: "system",
          name: "page1",
        },
        remotes: {
          nav: "page2@http://localhost:9004/remoteEntry.js",
          // Test: "@medium/page2"
        },
        exposes: {},
        shared: ["react", "react-dom"],
      }),
    ],
  });
};
