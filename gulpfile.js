var  gulp = require('gulp'),
     uglify = require('gulp-uglify'),
     sass = require('gulp-sass'),
     plumber = require('gulp-plumber'),
     uglifycss = require('gulp-uglifycss');

// Scripts Task
// Uglifies JS
gulp.task('scripts', function () {
    gulp.src('scripts/**/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'));
});

// CSS Styles Task
// Uglifies CSS

gulp.task('processCSS', function () {
    gulp.src('styles/**/*.css')
        .pipe(plumber())
        .pipe(uglifycss())
        .pipe(gulp.dest('build/styles'));
});

// SASS Styles Task
// Uglifies SASS
gulp.task('processSASS', function () {
    gulp.src('styles/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('build/styles'));
});

// Global Styles Task
// Triggers the uglify of CSS and SASS. Can add further support for LESS etc.
gulp.task('styles', ['processCSS', 'processSASS']);

// Watch Task
// Watches JS & CSS/SASS
gulp.task('watch', function () {
    gulp.watch('scripts/**/*.js', ['scripts']);
    gulp.watch(['styles/**/*.css', 'styles/**/*.scss'], ['styles']);
});

// Main task
gulp.task('default', ['scripts', 'styles', 'watch']);