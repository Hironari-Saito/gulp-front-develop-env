'use strict'
const gulp = require('gulp')
const { series} = require('gulp');
/**
 * スタイルガイド fractalのタスク
 */
const {fractalstart, fractalbuild} = require('./fractal.js')
exports["fractal:start"] = fractalstart
exports["fractal:build"] = fractalbuild

/**
 * Html lintに関連したタスク
 */
const {lintHtml} = require('./lint-html.js')
exports['html-lint'] = series(lintHtml)

/**
 * リロードタスク
 */
const {reload} = require('./browser-reload')

/**
 * Sassのタスク
 */
const {compileSass}  = require('./compile-sass.js')
exports.sass = series(compileSass, reload)

/**
 * JavaScriptのタスク
 */
const {compileJavascript} = require('./compile-javascript.js')
exports.js = series(compileJavascript, reload)

/**
 * defaultのタスク
 * watch browser-syncを同時に起動している。
 */
const {synchronize} = require('./browser-sync.js')
const {monitor} = require('./monitor.js')
const defaultTask = gulp.parallel(monitor, synchronize)
exports.default = defaultTask