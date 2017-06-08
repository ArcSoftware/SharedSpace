/**
 *  run 'gulp watch' to run default tasks and watch files
 * 
 * - convert sass to css
 * - bundle js modules (browserify)
 * - strip js comments
 */

let gulp = require('gulp');
let sass = require('gulp-sass');
let browser = require('gulp-browser');

// let OUTPUT_DIRECTORY = 'public';

gulp.task('default', ['css', 'js', 'templates', 'index']);

// gulp.task('html', function() {
//   return gulp.src('index.html')
//              .pipe(gulp.dest(OUTPUT_DIRECTORY)); 
// });

gulp.task('css', function() {
  return gulp.src('frontend/style/style.scss')
             .pipe(sass())
             .pipe(gulp.dest('src/main/resources/static/style'))
             .pipe(gulp.dest('frontend/public/style'));
});

gulp.task('js', function() {
  return gulp.src('frontend/js/app.js')
             .pipe(browser.browserify())
             .pipe(gulp.dest('src/main/resources/static/js'))
             .pipe(gulp.dest('frontend/public/js'));
});

gulp.task('templates', function () {
  return gulp.src('frontend/templates/*.html')
    .pipe(gulp.dest('src/main/resources/static/controllers'))
    .pipe(gulp.dest('frontend/public/controllers'));
});

gulp.task('index', function () {
  return gulp.src('frontend/index.html')
    .pipe(gulp.dest('frontend/public'))
    .pipe(gulp.dest('src/main/resources/templates'));
});

gulp.task('watch', ['css', 'js', 'templates', 'index'], function() {
  gulp.watch('frontend/style/*.scss', ['css']);
  gulp.watch('frontend/js/*.js', ['js']);
  gulp.watch('frontend/js/*/*.js', ['js']);

  gulp.watch('frontend/templates/*.html', ['templates']);
  gulp.watch('frontend/index.html', ['index']);
});