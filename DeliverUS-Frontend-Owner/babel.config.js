module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    sourceMaps: true,
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        safe: true,
        allowUndefined: false
      }]
    ]
  }
}
