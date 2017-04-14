var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('test', function() {
  console.log('Hello Gulp is Working proeprly for you Tom :)');
});

gulp.task('sass', function(){
  return gulp.src('./sass/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'));
});
