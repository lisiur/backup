module.exports = function(api) {
  // console.log(api)
  return {
    presets: ['@babel/preset-typescript'],
    plugins: ['@babel/plugin-proposal-object-rest-spread']
  }
}
