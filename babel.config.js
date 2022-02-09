module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: ['packagejson'],
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@icons': './assets/icons',
          '@fonts': './assets/fonts',
          '@images': './assets/images',

          '@navigation': './navigation',
          '@core': './shared/core',
          '@styles': './shared/styles',
          '@services': './services',

          '@store': './store',
          '@modules': './modules',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
