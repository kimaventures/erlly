var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var gp_concat = require('gulp-concat');
var fs = require("fs")

gulp.task('sass', function(){
	return gulp.src('stylesheets/main.sass')
		.pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['> 0%'],
			cascade: false
		}))
		.pipe(gulp.dest('public/css'));
});

gulp.task('default', [
	'sass',
	], function () {
});