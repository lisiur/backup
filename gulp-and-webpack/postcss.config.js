module.exports = {
  plugins: [
    require("postcss-import")(),
    require("postcss-cssnext")(),
    require("postcss-simple-vars")(),
    require("postcss-extend")(),
    require("postcss-nested")(),
    require("postcss-mixins")()
  ]
}