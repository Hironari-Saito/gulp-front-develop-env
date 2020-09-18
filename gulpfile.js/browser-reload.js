'use strict'
const browser = require('browser-sync')
/**
 * reloadに関するタスク
 */
const reload = done => {
  browser.reload({stream: true})
  done()
}

exports.reload = reload