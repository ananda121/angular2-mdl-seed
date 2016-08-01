var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config')();

gulp.task('sass', function () {
    return gulp.src(config.styles + 'main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.styles));
});

gulp.task('watch-sass', function () {
    gulp.watch(config.app + '**/*.scss', ['sass']);
});
