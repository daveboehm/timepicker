var gulp = require('gulp');
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var webserver = require('gulp-webserver');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var path = require('path');
var concat = require('gulp-concat');
var mincss = require('gulp-clean-css');
var watch = require('gulp-watch');

gulp.task('app-scripts', function () {
    return gulp.src(['timepicker.js', 'controller.js'])
        .pipe(uglify({
            mangle: false
        })).on('error', gutil.log)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./'));
});
gulp.task('less', function () {
    gulp.src('timepicker.less')
        .pipe(changed('**/*.less'))
        .pipe(less())
        .pipe(mincss())
        .pipe(gulp.dest('./'))
        .on('error', gutil.log);
});
gulp.task('webserver', function () {
    gulp.src('./').pipe(webserver({
        livereload: true,
        host: 'db.local',
        port: '8888',
        path: '/',
        open: false
    }));
});
gulp.task('watch', function () {
    gulp.watch(['**/*.js'], ['app-scripts']);
    gulp.watch(['**/*.less'], ['less']);
});
gulp.task('default', ['webserver', 'watch', 'less', 'app-scripts']);