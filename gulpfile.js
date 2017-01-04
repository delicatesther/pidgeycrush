//load dependecies
var
gulp            = require('gulp'),
sass         		= require('gulp-sass'),
autoprefixer    = require('autoprefixer'),
path            = require('path'),
plumber         = require('gulp-plumber'),
gutil           = require('gulp-util'),
size            = require('gulp-size'),
imagemin        = require('gulp-imagemin'),
mqpacker				= require('css-mqpacker'),
spritesmith 		= require("gulp.spritesmith"),
pkg 						= require('./package.json'),
paths 					= pkg.paths,
sourcemaps 			= require('gulp-sourcemaps'),
postcss      		= require('gulp-postcss'),
gls							= require('gulp-live-server');


//optimizing images
gulp.task('images', function() {
	return gulp.src('components/sprites/**/*.+(png|jpg|jpeg|gif|svg)')
	.pipe(imagemin({
		interlaced: true,
		progressive: true
	}))
	.pipe(gulp.dest('images'));
});

gulp.task('css', function () {
	var processors = [
		autoprefixer({browsers: ['last 3 versions', 'safari 5', 'ie >= 10', 'opera 12.1', 'ios >= 6', 'android 4']}),
		require('postcss-flexbugs-fixes')
	];
	return gulp.src(paths.sass.src + 'style.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'expanded',
	}).on('error', sass.logError))
	.pipe(postcss(processors))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.sass.dest));
});

// sprite sheets and scss creation
gulp.task('sprites', function () {
	var spriteData = gulp.src(paths.sprites.src + '**/*.**')
	.pipe(spritesmith({
		retinaSrcFilter: [paths.sprites.src + 'sprite2x/*.**'],
		retinaImgName: 'sprite@2x.png',
		imgName: 'sprite.png',
		cssName: '_sprites.scss',
		imgPath: '../images/sprite.png',
		retinaImgPath: '../images/sprite@2x.png',
	}));

	// Pipe image stream through image optimizer and onto disk
	var imgStream = spriteData.img
	.pipe(gulp.dest(paths.sprites.dest));

	// Pipe CSS stream through CSS optimizer and onto disk
	var cssStream = spriteData.css
	.pipe(gulp.dest(paths.sass.src));

	// Return a merged stream to handle both `end` events
	return mqpacker(imgStream, cssStream);
});

var bases = {
	app: 'app/',
	dist: 'dist/',
	tmp: 'tmp/'
};


// live reload
gulp.task('serve', function(file) {
var server = gls.static(bases.app);
	server.start();
	// gulp.watch(['app/**/*', 'app/index.html'])
	server.notify.apply(server, [file]);
});

//watch
gulp.task('default', ['serve'], function() {
	//watch .scss files
	gulp.watch('components/sass/**/*.scss', ['css'])
	gulp.watch(['app/**/*', 'app/index.html'])
});

//build
gulp.task('build', ['css', 'sprites'], function() {
	console.log('build-completed');
	gulp.src('app/**/*, !app/components')
	.pipe(gulp.dest('dist'));

		gulp.src('*.html', {cwd: bases.app}).pipe(gulp.dest(bases.dist));
		gulp.src('*.css', {cwd: bases.app}).pipe(gulp.dest(bases.dist));
		gulp.src('images/*.**', {cwd: bases.app}).pipe(gulp.dest(bases.dist + 'images'));
});
