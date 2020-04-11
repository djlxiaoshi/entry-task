module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      [
        "babel-plugin-inline-import",
        {
          "extensions": [".svg"]
        }
      ]
    ],
    presets: [
      'babel-preset-expo'
    ],
  };
};
