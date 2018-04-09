// ======================== GULP FILE ======================================//
// P.S : Check package.json files for the paths and other details

// ======================================
// Declared Variables
// ======================================
var
pkg          = require('./package.json'),           // json file with information about dependencies and paths
paths        = pkg.paths,                           // used inside gulp.js to make some functions
sequence     = require('run-sequence'),             // needed for task execution loop at end of file
gutil        = require('gulp-util'),
gif          = require('gulp-if'),
gulp         = require('gulp'),                     // general gulp
sass         = require('gulp-sass'),                // gulp sass
sourcemaps   = require('gulp-sourcemaps'),          // creat map file to locate scss origin
prefix       = require('gulp-autoprefixer'),        // output browser autoprefix
mmq          = require('gulp-merge-media-queries'), // merge media queries on
cleanCSS     = require('gulp-clean-css'),
iconfontCss  = require('gulp-iconfont-css'),        // iconfont css
iconfont     = require('gulp-iconfont'),            // iconfont
sprites      = require("gulp.spritesmith"),           // sprites
imagemin     = require("gulp-imagemin"),            // minify images (jps,png,gif,svg)
plumber      = require('gulp-plumber'),             // prevent the watch to stop when you have a error
notify       = require("gulp-notify"),              // popup OS ( win and mac) notification
lintscss     = require('gulp-stylelint'),           // lint scss style
browserify   = require('browserify'),               // merge all js files in one
uglify       = require('gulp-uglify'),              // optimize js for production
watchify     = require('watchify'),
merge        = require('merge-stream'),
source       = require('vinyl-source-stream'),
buffer       = require('vinyl-buffer'),
chalk        = require('chalk'),
del          = require('del'),
miminist     = require('minimist'),
flags        = miminist(process.argv.slice(2));


// Environment Flags ( Production / Watching )
production      = flags.production || flags.prod || false,
watching        = flags.watch || false;


// ======================================
// TASK: Clean Destination files SCSS and JS
// ======================================

gulp.task('clean', function () {
  return del([
    'dest/css/**.*', // todo : optmize the paths
    // In case you want a specific exception
    //'!dest/js/*.js'
  ]);
});

// ======================================
// TASK: Icon fonts
// ======================================

gulp.task('iconfont', function() {
  var
  iconfont_config = "iconfont-config.scss", //Config file to generate the .scss file
  iconfont_scss = "_iconfont.scss"; //auto-generated .png sprite

  return gulp
  .src([paths.iconfont.src + '*.svg'], {
    base: paths.iconfont.base //location of the original svg's
  })

  .pipe(iconfontCss({
    fontName: 'iconfont',
    cssClass: 'iconfont', //prefix for the fonts class
    path: paths.iconfont.conf + iconfont_config, // scss config file
    targetPath: paths.iconfont.destScss + iconfont_scss, // Created scss file by the config file
    fontPath: paths.iconfont.destFontRelative // location of created fonts relative to .css
  }))

  .pipe(iconfont({
    fontName: 'iconfont', // required
    //fontName: 'iconfont64',                        // in case of base 64
    prependUnicode: false,
    formats: ['ttf', 'eot', 'woff'],                 // default, 'woff2' and 'svg' are available
    //formats: ['ttf'],                              // in case of base 64 only use the ttf
    normalize: true,
    fontHeight: 1001,
    centerHorizontally: true
  }))

  .pipe(gulp.dest(paths.iconfont.destFont));
});

// ======================================================
// TASK: Sprite sheets for png images and scss creation
// ======================================================

gulp.task('sprites', function() {
  var
  sprites_scss = "_sprites.scss", //auto-generated .scss file
  sprites_png = "sprites.png"; //auto-generated .png sprite
  sprites_png2x = "sprites2x.png"; //auto-generated .png sprite

  var spriteData = gulp.src(paths.sprites.src + '**/*.**')
  .pipe(sprites({
    retinaSrcFilter: [paths.sprites.src_retina + '*.**'],
    retinaImgName: sprites_png2x,
    retinaImgPath: paths.sprites.destRelative + sprites_png2x,
    imgName: sprites_png,
    imgPath: paths.sprites.destRelative + sprites_png,
    cssName: sprites_scss,
    cssVarMap: function(sprite) {
      sprite.name = 'sprite-' + sprite.name
    },
  }));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
  .pipe(gulp.dest(paths.sprites.dest));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
  .pipe(gulp.dest(paths.sprites.dest_css));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});

// ======================================================
// TASK: Optmize Images
// ======================================================

gulp.task('imagemin', function () {
  return gulp
  .src(paths.images.src + '**/**')

  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false},
        {removeComments: true}
      ]
    })
  ]))
  .pipe(gulp.dest(paths.images.dest));
});

// ======================================
// TASK : Merge all JS into 1 file
// ======================================

gulp.task('scripts', function(){
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: paths.js.src + 'index.js',
    debug: true
  });

  function rebundle() {
    return b.bundle()
    .pipe(source('all.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(production ? uglify({
      errorHandler: notify.onError({
        title: 'JS error',
        message: '<%= error.message %>',
      })
    }) : buffer()) // if is production the output is compressed and uglify
    .pipe(sourcemaps.write('./'))
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'Gulp',
        message: '<%= error.message %>',
      })
    }))
    .pipe(gulp.dest(paths.js.dest));
  }
  return rebundle();
});


// ======================================
// TASK : Compress vendor js
// ======================================

gulp.task('compress-vendor-js', function (done) {

  var opts = {
    entries: './' + paths.js.vendorSrc + 'vendor.js', // browserify requires relative path
    debug: false
  };
  if (watching) {
    opts = Object.assign(opts, watchify.args);
  }
  var bundler = browserify(opts);
  if (watching) {
    bundler = watchify(bundler);
  }
  // optionally transform
  // bundler.transform('transformer');
  bundler.on('update', function (ids) {
    gutil.log('File(s) changed: ' + gutil.colors.cyan(ids));
    gutil.log('Rebundling...');
    rebundle();
  });

  bundler.on('log', gutil.log);

  function rebundle() {
    return bundler.bundle()
    .on('error', function (e) {
      gutil.log('Browserify Error', gutil.colors.red(e));
    })
    .pipe(source('vendor.js'))
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(gif(production, uglify()))
    .pipe(gulp.dest(paths.js.dest));
  }
  return rebundle();
});

// ======================================
// TASK : Style Lint
// ======================================

gulp.task('style-lint', function () {
  return gulp
  .src(paths.sass.src + '**/*.scss') // Check only the Scss files

  .pipe(lintscss({
    failAfterError: false,
    reporters: [
      {formatter: 'string', console: true}
    ]
  }));
});

// ======================================
// TASK : Build normal CSS
// ======================================

gulp.task('style', function () {
  return gulp.src(paths.sass.src + '*.scss')
  .pipe(gif(!production, sourcemaps.init()))
  .pipe(sass({
    outputStyle: 'nested'
  }).on('error', sass.logError))
  .pipe(gif(production, mmq({log: true}))) // if ran on dev breaks sourcemaps
  .pipe(prefix({ cascade: true }))
  .pipe(cleanCSS({
    level: {
      1: {all: true},
      2: {all: false}
    }
  }))
  .pipe(gif(!production, sourcemaps.write('./')))
  .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('compress-vendor-css', function () {
  return gulp.src(paths.css.vendorSrc + '*.css')
  .pipe(cleanCSS({ root: './' }))
  .pipe(gulp.dest(paths.css.vendorDest));
});

// ======================================================
// TASK: Build Css / JS / Iconfont / Sprite
// ======================================================

gulp.task('build', ['clean'], function(callback) {
  console.log(chalk.white.bgBlue('Building ' + (flags.production ? 'production' : 'development') + ' version...'));
  sequence('sprites','iconfont','compress-vendor-css', 'style', 'compress-vendor-js', 'scripts' , callback);
  function callback(event) {
    console.log(chalk.white.bgGreen('All great CHUCK NORRIS! Code is ready :) '))
  }
});

// ======================================================
// TASK: Gulp default (using build task with a simple watch )
// ======================================================

gulp.task('enable-watch-mode', function () { watching = true; });

gulp.task('default', ['enable-watch-mode', 'build'], function () {
  gulp.watch(paths.sass.src + '**/*.scss', ['style']).on('change', callback);
  gulp.watch(paths.css.src + 'vendor/*.css', ['compress-vendor-css']).on('change', callback);
  gulp.watch(paths.sprites.src + '**/*.**', ['sprites']).on('change', callback);
  gulp.watch(paths.js.src + 'vendor/*.js', ['compress-vendor-js']).on('change', callback);
  function callback(event) {
    console.log(chalk.green ('File ' + event.path + ' was ' + event.type + '! Still on watching mode...'));
  };
});
