const gulp = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function sassCompiler() {
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function imagesCompress() {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function jsCompress() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = () => {
  gulp.watch('./src/images', {ignoreInitial: true}, gulp.series(imagesCompress))
  gulp.watch('./src/scripts', {ignoreInitial: true}, gulp.series(jsCompress))
  gulp.watch('./src/styles', {ignoreInitial: true}, gulp.series(sassCompiler))
};