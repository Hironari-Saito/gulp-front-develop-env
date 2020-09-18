'use strict'

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

const {src, dest} = require('gulp')

const {config} = require('./config')

/**
 * sassに関するタスク
 */
const compileSass = done => {
  src(config.sass.src)
  .pipe(plumber(notify.onError(config.notifyMessage)))
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(dest(config.sass.dest))
  done()
}

exports.compileSass = compileSass