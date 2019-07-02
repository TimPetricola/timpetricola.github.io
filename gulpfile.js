var gulp = require("gulp"),
  myth = require("gulp-myth"),
  cleanCSS = require("gulp-clean-css"),
  rename = require("gulp-rename");

gulp.task("css", function() {
  return gulp
    .src("src/styles.css")
    .pipe(myth())
    .pipe(gulp.dest("dist"))
    .on("end", function() {
      gulp
        .src("dist/styles.css")
        .pipe(cleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("dist"));
    });
});

gulp.task("default", gulp.series("css"));
