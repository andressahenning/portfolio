const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');


gulp.task('default', (done) => {
    console.log('Gulp is working!');
    done();
  });

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass( {
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}

exports.sass = compilaSass
exports.watch = function() {
    gulp.watch('./src/styles/**/*.scss', gulp.series(compilaSass))
}

