module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@config': './app/config',
          '@components': './app/components',
          '@libs': './app/libs/',
          '@logic': './app/logic',
          '@model': './app/model',
          '@navigations': './app/navigations',
          '@public': './app/public',
          '@private': './app/__private/',
          '@screens': './app/screens',
        },
      },
    ],
  ],
};
