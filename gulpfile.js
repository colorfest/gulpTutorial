/* required methods */
var gulp 			= require('gulp');
var concat 			= require('gulp-concat');
var rename 			= require('gulp-rename');
var uglify 			= require('gulp-uglify');

/* tasks */
gulp.task('default', function ()
{
	return gulp.src(['bower_components/modernizr/modernizr.js',
		'bower_components/jquery/dist/jquery.js',
		'bower_components/bootstrap/dist/js/bootstrap.js'])
		.pipe(concat('gulptutorial.js'))
		.pipe(gulp.dest('src'))
		.pipe(rename('gulptutorial.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('bin'));
});