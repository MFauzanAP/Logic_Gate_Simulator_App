const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "features": {
    "interactionsDebugger": true
  },
  "stories": [
    "../renderer/**/*.stories.mdx",
    "../renderer/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "previewHead": (head) => (`
    ${head}
      <style>
        html {
          font-size: 62.5%;
        }
      </style>
  `),
  "webpackFinal": async (config) => {
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;  

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
}