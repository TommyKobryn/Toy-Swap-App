var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./public/sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'));
});
