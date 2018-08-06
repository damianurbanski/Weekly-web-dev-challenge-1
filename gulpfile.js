var gulp = require('gulp'),
cleanCSS = require("gulp-clean-css"),
uglify = require("gulp-uglify"),
concat = require("gulp-concat");

gulp.task('css', () => {
	return gulp.src(['./css/**/*.css', '!./css/**/*.min.css'])
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(concat('global.min.css'))
	.pipe(gulp.dest('./css'))
});

gulp.task('js', () => {
	return gulp.src(['js/**/*.js', '!js/**/*.min.js'])
	.pipe(uglify())
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest('./js'))
});

gulp.task('watch', function() {
  gulp.watch(['./css/**/*.css', '!./css/**/*.min.css'], ['css']);
  gulp.watch(['js/**/*.js', '!js/**/*.min.js'], ['js']);
});


gulp.task('default', ['css','js','watch']);