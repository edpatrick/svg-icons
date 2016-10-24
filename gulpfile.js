var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var svgSprite = require('gulp-svg-sprite');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

var configSvgSprite                  = {
    mode                : {
        symbol          : true
    }
};

gulp.task('uglify', function () {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/min'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/min'));
});

gulp.task('sprites', function () {
    return gulp.src('images/originals/*.svg')
    .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(gulp.dest('images/min'))
    .pipe(svgSprite(configSvgSprite))
    .pipe(gulp.dest('images/sprite'));
});

gulp.task('watch', function(){
  gulp.watch('images/originals/*.svg', ['default']); 

})

gulp.task('build', ['uglify', 'minify-css'], function (){
  console.log('Building files');
})

gulp.task('default', ['sprites']);