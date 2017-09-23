var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars      = require('postcss-simple-vars'),
    nestedcss    = require('postcss-nested'),
    importcss    = require('postcss-import'),
    mixins       = require('postcss-mixins');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([importcss, mixins, cssvars, nestedcss, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});

//task has two parameters first one is name of task second is what does this task do
//name default task as default
