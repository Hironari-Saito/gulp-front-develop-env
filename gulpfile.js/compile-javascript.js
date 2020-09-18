'use strict'
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const uglify = require('gulp-uglify')

const { src, dest} = require('gulp');

const {config} = require('./config')

/**
 * jsに関するタスク
 */
const compileJavascript = done => {
  src(config.js.src)
  .pipe(plumber(notify.onError(config.notifyMessage)))
  .pipe(uglify())
  .pipe(dest(config.js.dest))
  done();
}

exports.compileJavascript = compileJavascript