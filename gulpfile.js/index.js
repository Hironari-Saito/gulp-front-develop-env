'use strict'
const { series, parallel} = require('gulp');
/**
 * スタイルガイド fractalのタスク
 */
const {fractalstart, fractalbuild} = require('./fractal.js')
exports["fractal:start"] = fractalstart
exports["fractal:build"] = fractalbuild

/**
 * Htmlに関連したタスク
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
 * cleanのタスク
 * distフォルダ配下のファイルを全て削除する。
 */
const {clean} = require('./clean.js')
exports.clean = clean

/**
 * defaultのタスク
 * watch browser-syncを同時に起動している。
 */
const {synchronize} = require('./browser-sync.js')
const {monitor} = require('./monitor.js')
const defaultTask = parallel(monitor, synchronize)
exports.default = defaultTask