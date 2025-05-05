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
};