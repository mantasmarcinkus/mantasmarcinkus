'use strict';
const css_destination = 'themes/anatole/source/css';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src(`${css_destination}/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(css_destination));
});

gulp.task('default', ['sass'], function() {
    gulp.watch(`${css_destination}/*.scss`, ['sass']);
})