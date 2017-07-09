var gulp = require("gulp")
var gutil = require("gulp-util")
var del = require("del")
var uglify = require("gulp-uglify")
var rename = require("gulp-rename")
var postcss = require("gulp-postcss")
var webpack = require("webpack")
var webpackDevServer = require('webpack-dev-server')
var webpackConfig = require('./webpack.config')

var devConfig = Object.assign({}, webpackConfig, {
  // devtool: "sourcemap",
})

function handleError(err) {
  if (err.message) {
    console.log(err.message)
  } else {
    console.log(err)
  }
  this.emit('end')
}

gulp.task("clean:style", function(callback) {
  del("./dist/style", callback)
})

gulp.task("clean:js", function(callback) {
  del.sync("./dist/js")
  callback()
})

gulp.task("style", [ "clean:style" ], function() {
  return gulp.src("./src/style/**/index.css")
    .pipe(postcss())
    .on('error', handleError)
    .pipe(gulp.dest("./dist/style"))
})

gulp.task("webpack", function(callback) {
  webpack(devConfig, function(err, stats) {
    if (err) throw new gutil.PluginError("webpack", err)
    gutil.log("[webpack]", stats.toString())
    callback()
  })
})

gulp.task("js", [ "clean:js",  "webpack" ], function() {
  return gulp.src("./dist/js/bundle.js")
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(uglify())
    .on('error', handleError)
    .pipe(gulp.dest("./dist/js"))
})