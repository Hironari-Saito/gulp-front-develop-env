'use strict'

const config = {
  baseDir: './dist',
  indexFile: './html/index.html',
  poot: 3000,
  notifyMessage: 'Error: <%= error.message %>',
  html: {
    src: './src/html/**/*.html',
    dest: './dist/html'
  },
  js: {
    src: ['./src/js/**/*.js','!./src/js/min/**/*.js'],
    dest: './dist/js/min'
  },
  sass: {
    src: './src/sass/**/*.scss',
    dest:'./dist/css'
  }
}

exports.config = config