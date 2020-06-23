/* eslint-disable comma-dangle */
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`, // app starts executing here and webpack starts bundling
  output: {
    filename: 'bundle.js',
    path: DIST_DIR, // output dir relative to html page
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    // allows you to use just export filename instead of .jsx
    extensions: ['*', '.js', '.jsx'],
  },
};
