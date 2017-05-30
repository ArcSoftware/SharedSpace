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

gulp.task('default', ['css', 'js']);

// gulp.task('html', function() {
//   return gulp.src('index.html')
//              .pipe(gulp.dest(OUTPUT_DIRECTORY)); 
// });

gulp.task('css', function() {
  return gulp.src('frontend/style/style.scss')
             .pipe(sass())
             .pipe(gulp.dest('src/main/resources/static/style'));
});

gulp.task('js', function() {
  return gulp.src('frontend/js/app.js')
             .pipe(browser.browserify())
             .pipe(gulp.dest('src/main/resources/static/js'));
});

gulp.task('watch', ['css', 'js', 'js'], function() {
  // gulp.watch('index.html', ['html']);
  gulp.watch('frontend/style/*.scss', ['css']);
  gulp.watch('frontend/js/*.js', ['js']);
  gulp.watch('frontend/js/*/*.js', ['js']);
});