'use strict'
const browser = require('browser-sync')

const {config} = require('./config')

const synchronize = (done) => {
  browser({
    /** 動的サイトの設定 */
    // 動的サイト
    // files: ['./**/*.php'],
    // proxy: 'http://localhost',
    /** 静的サイトの設定 */
    server: {
      baseDir: config.baseDir,
      index: config.indexFile,
    },
    port: config.poot,
    notify: true, //browser-sync connectedの有無
  })
  done();
}

exports.synchronize = synchronize