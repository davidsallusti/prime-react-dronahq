const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'primereact.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'PrimeReactComponents',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};