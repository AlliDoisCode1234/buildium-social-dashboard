'use strict';


{
    const { emitWarning } = process;
    process.emitWarning =
        (warning, type, code, ...extraArgs) =>
            code !== 'DEP0097' && emitWarning(warning, type, code, ...extraArgs);
}

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
sass.compiler = require('node-sass');
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(concat('custom.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/custom.css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});