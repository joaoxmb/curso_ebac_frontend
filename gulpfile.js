const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');

function jsMinify() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function sassCompiler() {
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function imagesCompress() {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function build() {
  gulp.watch('./src/scripts/*.js', {ignoreInitial: true}, gulp.series(jsMinify))
  gulp.watch('./src/styles/*.scss', {ignoreInitial: true}, gulp.series(sassCompiler))
  gulp.watch('./src/images/*', {ignoreInitial: true}, gulp.series(imagesCompress))
}

exports.default = build;