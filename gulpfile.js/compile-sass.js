'use strict';

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sassLint = require('gulp-sass-lint');
const packageImporter = require('node-sass-package-importer');

const { src, dest } = require('gulp');

const { config } = require('./config');

/**
 * sassに関するタスク
 */
const compileSass = (done) => {
  src(config.sass.src, { sourcemaps: true })
    .pipe(plumber(notify.onError(config.notifyMessage)))
    .pipe(
      sassLint({
        rules: {
          indentation: 0, // prettierは長文を折り返す際に+2のspaceを自動的に挿入するが、そのルールとsass-lintのルールと合わないため、インデントのルールは無視するように設定
        },
      })
    )
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(
      sass({
        importer: packageImporter({
          extensions: ['.scss', '.css'],
        }),
      })
    )
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(
      dest(config.sass.dest, {
        sourcemaps: './sourcemaps',
      })
    );
  done();
};

exports.compileSass = compileSass;
