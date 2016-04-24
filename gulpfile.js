/**
 * @overview 建站平台h5构建脚本
 *
 * @author: yiri
 * @data: 2015-10-19 20:34:14
 *
 */

var gulp = require('gulp-param')(require('gulp'), process.argv);
var path = require('path');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var civet = require('@ali/gulp-civet')['clam'];
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var n2a = require('gulp-native2ascii');
var seajs = require("gulp-seajs-combine");
var runSequence = require('run-sequence');
var flexCombo = require("flex-combo");
var essi = require('essi');


gulp.task("tpl", function (cb) {
  return gulp.src(["./src/**/*.tpl"])
    .pipe(civet.build2JsTpl({
      type: 'cmd'
    }))
    .pipe(rename({extname: '.tpl.js'}))
    .pipe(gulp.dest('./app'));
});

gulp.task("html", function () {
  return gulp.src(["./src/**/*.html"])
    .pipe(essi.gulp({
      strictPage: false
    }, '.clam'))
    .pipe(gulp.dest("./app"));
});

gulp.task("seajs", function (cb) {
  return gulp.src(['./src/**/*.js'])
    .pipe(seajs(null, {
    }))
    .pipe(uglify({
        mangle: {except: ['require']}
    }))
    .pipe(n2a({reverse: false}))
    .pipe(rename({extname: ".js"}))
    .pipe(gulp.dest("./app"));
});

gulp.task('default', ['tpl','html','seajs']);

//实时构建
gulp.task('watch', function () {
  gulp.watch("./app/src/**/*.tpl", ['tpl']);
  gulp.watch("./app/src/**/*.html", ['html']);
  gulp.watch("./app/src/**/*.js", ['seajs']);
});
