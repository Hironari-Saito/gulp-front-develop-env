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
    dest: './dist/js/',
  },
  sass: {
    src: './src/sass/**/*.scss',
    dest:'./dist/css',
  },
  cleanPath: 'dist/**',
}

exports.config = config