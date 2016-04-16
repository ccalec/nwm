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


gulp.task("tpl", function (cb) {
  //tpl
  return gulp.src(["./app/src/**/*.tpl"])
    .pipe(civet.build2JsTpl({
      type: 'cmd'
    }))
    .pipe(rename({extname: '.tpl.js'}))
    .pipe(gulp.dest('./app/views'));
});

// /**
//  * build seajs
//  */
// gulp.task("seajs", function (cb) {
//     return gulp.src(['./index.js'])
//         .pipe(seajs(null, {
//             //base: 'http://g-assets.daily.taobao.net/jusp/'
//         }))
//         .pipe(uglify({
//             mangle: {except: ['require']}
//         }))
//         .pipe(n2a({reverse: false}))
//         .pipe(rename({extname: ".js"}))
//         .pipe(gulp.dest("./build"));
// });

gulp.task('default', function () {
  runSequence('tpl',function () {
    // setTimeout(runSequence('seajs'),200);
  })
});

//实时构建
gulp.task('watch', function () {
  gulp.watch("./app/src/**/*.tpl", ['tpl']);
});
