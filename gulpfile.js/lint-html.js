'use strict'

const htmlhint = require('gulp-htmlhint')
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const { config } = require('./config')

const lintHtml = done => {
  src(config.html.src)
  .pipe(plumber(notify.onError(config.notifyMessage)))  
  .pipe(htmlhint())
  .pipe(htmlhint.reporter())
  .pipe(dest(config.html.dest))
  done()
}

exports.lintHtml = lintHtml