var gulp = require("gulp"),
  myth = require("gulp-myth"),
  minifyCSS = require("gulp-minify-css"),
  rename = require("gulp-rename");

gulp.task("css", function() {
  return gulp
    .src("src/styles.css")
    .pipe(myth())
    .pipe(gulp.dest("dist"))
    .on("end", function() {
      gulp
        .src("dist/styles.css")
        .pipe(minifyCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("dist"));
    });
});

gulp.task("default", gulp.series("css"));
