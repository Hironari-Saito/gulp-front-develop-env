'use strict'

const config = {
  baseDir: './src',
  indexFile: './html/index.html',
  poot: 3000,
  notifyMessage: 'Error: <%= error.message %>',
  html: {
    src: './src/html/**/*.html',
    dest: './dist/'
  },
  js: {
    src: ['./src/js/**/*.js','!./src/js/min/**/*.js'],
    dest: './src/js/min'
  },
  sass: {
    src: './src/sass/**/*.scss',
    dest:'./src/css'
  }
}

exports.config = config