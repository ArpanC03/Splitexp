const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Customize Webpack configuration here:
  config.resolve.alias['react-native$'] = 'react-native-web';

  module.exports = {
    entry: './web/index.js', // Ensure this points to your index.js file
    
  };
  
  // Add custom rules or plugins if needed:
  // Example: Adding support for custom fonts or images
  config.module.rules.push({
    test: /\.(png|jpe?g|gif|svg|ttf|woff2?)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/',
      },
    },
  });

  return config;
};
