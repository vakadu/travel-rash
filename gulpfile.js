//include gulp packages
var gulp         = require('gulp'),
    watch        = require('gulp-watch'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars      = require('postcss-simple-vars'),
    nestedcss    = require('postcss-nested'),
    importcss    = require('postcss-import'),
    browserSync  = require('browser-sync').create();

//create tasks
gulp.task('default', function () {
    console.log("Horray created default task");
});
//task has two parameters first one is name of task second is what does this task do
//name default task as default

gulp.task('html', function () {
    console.log("HTML");
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([importcss, cssvars, nestedcss, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

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
