// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      webpackConfig.resolve.fallback = {
        assert: require.resolve('assert/'),
        fs: false,
        path: require.resolve('path-browserify')
      };

      return webpackConfig;
    },
  },
};