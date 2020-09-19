'use strict'
const { src, dest} = require('gulp')
const imagemin = require('gulp-imagemin')
const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant')

const {config} = require('./config')


const compressImage = done => {
  src(config.image.src)
  .pipe(imagemin(
    [
      pngquant({ quality: [.65, .85], speed: 1 }),
      mozjpeg({ quality: 80 }),
      imagemin.svgo(),
      imagemin.gifsicle(),
    ]
  ))
  .pipe(dest(config.image.dest));
  done();
};

exports.compressImage = compressImage