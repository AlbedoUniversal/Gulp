module.exports = {
  src: {
    html: 'src/*.html',
    images: 'src/images/*.*'
  },
  styles: {
    src: 'src/less/main.less',
    dist: 'dist/css'
  },
  scripts: {
    src: ['src/js/libs/*.js', 'src/js/*.js'],
    dist: 'dist/js'
  },
  images: {
    src: 'src/images',
    dist: 'dist/images'
  },
  pug: {
    pug: 'src/pug/**/*.pug',
    html: 'dist/html'
  },
  clean: 'dist/**/*'
};
