'use strict'

const htmlhint = require('gulp-htmlhint')
const { src } = require('gulp');

const { config } = require('./config')

const lintHtml = done => {
  src(config.html.src)
  .pipe(htmlhint())
  .pipe(htmlhint.reporter())
  done()
}

exports.lintHtml = lintHtml