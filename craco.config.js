const path = require('path');

module.exports = {
  rules: [
    {
      test: /\.tsx?$/,
      use: ['postcss-loader']
    }
  ],
  webpack: {
    alias: {
      // Another example for using a wildcard character
      '~': path.resolve(__dirname, 'src/')

      // Other examples of aliases for all the top-level folders in the `src/` folder.
      // assets: path.resolve(__dirname, 'src/assets/'),
      // interfaces: path.resolve(__dirname, 'src/interfaces/'),
      // modules: path.resolve(__dirname, 'src/modules/'),
      // components: path.resolve(__dirname, 'src/components/'),
      // routes: path.resolve(__dirname, 'src/routes/'),
      // utils: path.resolve(__dirname, 'src/utils/'),
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        // Examples for using a wildcard character
        '^~(.*)$': '<rootDir>/src$1'

        // Jest module mapper which will detect our absolute imports.
        // '^assets(.*)$': '<rootDir>/src/assets$1',
        // '^interfaces(.*)$': '<rootDir>/src/interfaces$1',
        // '^modules(.*)$': '<rootDir>/src/modules$1',
        // '^utils(.*)$': '<rootDir>/src/utils$1',
        // '^components(.*)$': '<rootDir>/src/components$1',
      }
    }
  }
};
