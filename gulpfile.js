var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    coffee  = require('gulp-coffee'),
    sass    = require('gulp-sass'),
    minify  = require('gulp-minify-css'),
    prefix  = require('gulp-autoprefixer');

var paths = {
  scripts: ['public/js/*.coffee'],
  stylesheets: ['public/css/*.scss']
};

gulp.task('scripts', function () {
  gulp.src(paths.scripts)
      .pipe(coffee({ bare: true }).on('error', gutil.log))
      .pipe(uglify())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./public/js'));
});

gulp.task('stylesheets', function () {
  gulp.src(paths.stylesheets)
      .pipe(sass())
      .pipe(prefix("last 1 version"))
      .pipe(minify())
      .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.stylesheets, ['stylesheets']);
});

gulp.task('default', ['scripts', 'stylesheets', 'watch']);
