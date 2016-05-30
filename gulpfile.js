var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');

 
/**
 * Remove the current build
 */
gulp.task('clean', function() {
    return del.sync(['dist/**']);
});


/**
 * If the component templates are not included using require(), they will be
 * loaded via XHR and thus must be made available
 */
gulp.task('componentAssets', function() {
    var files = [
        'src/*/**/*.html',
        'src/**/*.css'
    ];

    return gulp.src(files)
        .pipe(gulp.dest('dist/'));
});


/**
 * Use webpack to bundle the dependencies and the App
 */
gulp.task('js', ['clean', 'componentAssets'], function() {
    var config = require('./webpack-staging.config.js');

    return gulp.src('src/boot.ts')
        .pipe(webpack(config))
        .pipe(gulp.dest('dist/js/'));
});


/**
 * Modify index.html (not much to modify atm)
 */
gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});

/**
 * Copy other assets like images, fonts, ...
 */
gulp.task('assets', function() {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('dist/assets/'));
});


/**
 * Build the project
 */
gulp.task('build', ['js', 'html', 'assets'], function() {
    // potential cleanup
});
