'use strict'

const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css');

const {src, dest} = require('gulp')

const {config} = require('./config')

/**
 * sassに関するタスク
 */
const compileSass = done => {
  src(config.sass.src,{ sourcemaps:true})
  .pipe(plumber(notify.onError(config.notifyMessage)))
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(cleanCSS())
  .pipe(dest(config.sass.dest, { sourcemaps: './sourcemaps'}))
  done()
}

exports.compileSass = compileSass