var gulp    = require('gulp'),
    compass = require('gulp-compass');

var config = {
  sassDir:     'sass',
  sassSources: 'sass/*.scss',
  cssDest:     'stylesheets'
};

gulp.task('compass', function() {
  gulp.src(config.sassSources)
    .pipe(compass({
        css:     config.cssDest,
        sass:    config.sassDir,
        style:   'compressed',
        comments: false
    }))
    .pipe(gulp.dest(config.cssDest));
});

gulp.task('watch', function() {
  gulp.watch(config.sassSources, ['compass']);
});

gulp.task('default', ['watch']);
