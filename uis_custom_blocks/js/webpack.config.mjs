import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const wpConfig = require('@wordpress/scripts/config/webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export default {
  ...wpConfig,
  entry: {
    ...wpConfig.entry,
    blocks: './src/index.js',
    frontend: './src/frontend.js', 
    editor: './src/editor.js',
  },
  externals: {
    ...wpConfig.externals,
    drupal: 'Drupal',
  },
  output: {
    ...wpConfig.output,
    path: `${process.cwd()}/build`,
    filename: '[name].js',
  },
  plugins: [
    ...wpConfig.plugins,
    new MiniCssExtractPlugin({
      filename: 'style-[name].css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        ckeditor: {
          test: /[\\/]node_modules[\\/]@ckeditor/,
          name: 'ckeditor',
          chunks: 'all',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  performance: {
    hints: false, // Disable size warnings temporarily
    maxEntrypointSize: 1024000, // Increase size limit
    maxAssetSize: 1024000,
  },
};