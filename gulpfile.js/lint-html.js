'use strict'

const htmlhint = require('gulp-htmlhint')
const { src, dest } = require('gulp');

const { config } = require('./config')

const lintHtml = done => {
  src(config.html.src)
  .pipe(htmlhint())
  .pipe(htmlhint.reporter())
  .pipe(dest(config.html.dest))
  done()
}

exports.lintHtml = lintHtml