//include gulp packages
var gulp         = require('gulp'),
    watch        = require('gulp-watch'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars      = require('postcss-simple-vars'),
    nestedcss    = require('postcss-nested'),
    importcss    = require('postcss-import');

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
    watch('./app/index.html', function () {
       gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    });
});
