var gulp         = require('gulp'),
    watch        = require('gulp-watch'),
    browserSync  = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function () {
        // gulp.start('html');
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function () {
        // gulp.start('styles');
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(browserSync.stream());
    //styles is dependent task, lecture 14 browsersync
});
