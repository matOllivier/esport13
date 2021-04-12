const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const build        = require('gulp-build');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/scss/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
gulp.task('serve', gulp.series('sass', function() {
    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));

// Default Task
gulp.task('default', gulp.series('serve'));

// Tâche "build"
gulp.task('build', gulp.series('sass'));

// Tâche "prod" = Build + minify
gulp.task('prod', gulp.series('build'));