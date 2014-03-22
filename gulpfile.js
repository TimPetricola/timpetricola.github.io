var gulp    = require('gulp'),
    sass    = require('gulp-ruby-sass');
    rename  = require('gulp-rename');

var config = {
  sassSrc: 'sass/**.scss',
  cssDest: 'stylesheets',
};

gulp.task('sass', function() {
  gulp.src(config.sassSrc)
    .pipe(sass({
      compass: true,
      style: 'compressed'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.cssDest));

  gulp.src(config.sassSrc)
    .pipe(sass({
      compass: true,
      style: 'nested'
    }))
    .pipe(gulp.dest(config.cssDest));
});

gulp.task('watch', function() {
  gulp.watch(config.sassSrc, ['sass']);
});

gulp.task('default', ['watch']);
