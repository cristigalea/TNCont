var  gulp = require('gulp'),
     uglify = require('gulp-uglify'),
     sass = require('gulp-sass'),
     plumber = require('gulp-plumber');

// Scripts Task
// Uglifies
gulp.task('scripts', function () {
    gulp.src('scripts/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'));
});

// Styles Task
// Uglifies
gulp.task('styles', function () {
    gulp.src('styles/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('build/styles'))
});

// Watch Task
// Watches JS
gulp.task('watch', function () {
    gulp.watch('scripts/*.js', ['scripts']);
    gulp.watch('styles/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);