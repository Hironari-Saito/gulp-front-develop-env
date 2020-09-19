'use strict'
const { watch } = require('gulp');
const browser = require('browser-sync')

const {config} = require('./config')
const {lintHtml} = require('./lint-html.js')
const {compileSass} = require('./compile-sass.js')
const {compileJavascript}= require('./compile-javascript.js')
const {compressImage} = require('./compress-image.js')

const monitor = done => {
  watch(config.js.src,{ ignoreInitial: false }, compileJavascript).on('change', browser.reload)
  watch(config.sass.src,{ ignoreInitial: false }, compileSass).on('change', browser.reload)
  watch(config.html.src,{ ignoreInitial: false }, lintHtml).on('change', browser.reload)
  watch(config.image.src, { ignoreInitial: false }, compressImage).on('change', browser.reload)
  
  done()
}

exports.monitor = monitor