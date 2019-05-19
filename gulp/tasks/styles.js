const {src, dest}  = require('gulp'),
      plumber      = require('gulp-plumber'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS     = require('gulp-clean-css'),
      rename       = require('gulp-rename'),
      less         = require('gulp-less'),
      {styles}     = require('../config');

module.exports = {
  styles: function() {
    return src(styles.src)
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({
          browsers: ['last 10 versions']
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS())
        .pipe(dest(styles.dist));
  }
}

