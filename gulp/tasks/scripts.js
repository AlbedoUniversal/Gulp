const {src, dest} = require('gulp'),
      plumber     = require('gulp-plumber'),
      rename      = require('gulp-rename'),
      uglify      = require('gulp-uglify'),
      concat      = require('gulp-concat'),
      {scripts}   = require('../config');

module.exports = {
  scripts: function() {
    return src(scripts.src)
          .pipe(plumber())
          .pipe(concat('main.js'))
          .pipe(rename({ suffix: '.min' }))
          .pipe(uglify())
          .pipe(dest(scripts.dist))
  }
}