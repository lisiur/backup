const gulp = require('gulp')
const webpack = require('webpack')
const minify = require('gulp-minify')
const postcss = require('gulp-postcss')

const webpackCfg = require('./webpack.config.js')

// gulp.task('webpack', callback => {
//   webpack(webpackCfg, (err, stats) => {

//   })
// })
gulp.task("default", () => {
  return gulp.src("src/styles/all.css")
    .pipe(postcss())
    .pipe(gulp.dest('build/styles/vvue.css'))
    .pipe(minify())
    .pipe(gulp.dest('build/styles/vvue.min.css'))
})