const gulp      = require('gulp');
const {styles}  = require('./gulp/tasks/styles'),
      {scripts} = require('./gulp/tasks/scripts'),
      {watch}   = require('./gulp/tasks/watch');


gulp.task(styles);

gulp.task(scripts);

gulp.task(watch);