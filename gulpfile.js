// ======================== GULP FILE ======================================//
// P.S : Check package.json files for the paths and other details

// ======================================
// Declared Variables
// ======================================
var
    pkg          = require('./package.json'),           // json file with information about dependencies and paths
    paths        = pkg.paths,                           // used inside gulp.js to make some functions
    sequence     = require('run-sequence'),             // needed for task execution loop at end of file
    gulp         = require('gulp'),                     // general gulp
    sass         = require('gulp-sass'),                // gulp sass
    sourcemaps   = require('gulp-sourcemaps'),          // creat map file to locate scss origin
    autoprefixer = require('gulp-autoprefixer'),        // output browser autoprefix
    mmq          = require('gulp-merge-media-queries'), // merge media queries on css
    cssfont64    = require('gulp-cssfont64'),           // iconfont base 64
    iconfontCss  = require('gulp-iconfont-css'),        // iconfont css
    iconfont     = require('gulp-iconfont'),            // iconfont
    sprites      = require("gulp.spritesmith"),           // sprites
    imagemin     = require("gulp-imagemin"),            // minify images (jps,png,gif,svg)
    plumber      = require('gulp-plumber'),             // prevent the watch to stop when you have a error
    notify       = require("gulp-notify"),              // popup OS ( win and mac) notification
    lintscss     = require('gulp-stylelint'),           // lint scss style
    browserify   = require('browserify'),               // merge all js files in one
    uglify       = require('gulp-uglify'),              // optimize js for production
    merge        = require('merge-stream'),
    source       = require('vinyl-source-stream'),
    buffer       = require('vinyl-buffer'),
    chalk        = require('chalk'),
    del          = require('del');


    // Environment Flags ( Production / Watching )
    flags           = require('minimist')(process.argv.slice(2)),
    isProduction    = flags.production || flags.prod || false,
    watching        = flags.watch || false


// ======================================
// TASK: Clean Destination files SCSS and JS
// ======================================

gulp.task('clean', function () {
  return del([
    'dest/css/*.css', // todo : optmize the paths
    'dest/js/*.js',  // todo : optmize the paths
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

// converting the font created in "iconfont" above to base 64
// when using this please use above fontName: 'iconfont64' and only formats: ['ttf']
// also wipe all fonts from the dest folder before you start
// iconfont-config.scss needs to be changed to use base64 (see comments there)

// ======================================
// TASK: Base64 Font
// ======================================
gulp.task('base64', function() {
    return gulp
    .src(paths.base64css.src + '*.ttf')
    .pipe(cssfont64())
    .pipe(gulp.dest(paths.base64css.destcss));
});


// ======================================================
// TASK: Sprite sheets for png images and scss creation
// ======================================================
gulp.task('sprites', function() {
    var
        sprites_scss = "_sprites.scss", //auto-generated .scss file
        sprites_png = "sprites.png"; //auto-generated .png sprite

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
        .pipe(isProduction ? uglify({
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
})


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

gulp.task('style', function() {

    return gulp
    .src(paths.sass.src + '*.scss')

    .pipe(plumber({
        errorHandler: function(err) {
            notify.onError({
                title: "Gulp Error",
                message: "Error: <%= error.message %>"
            })(err);
            this.emit('end');
        }
    }))

    .pipe(sourcemaps.init()) // In case you want the sass maps

    .pipe(sass({
        outputStyle: isProduction ? 'compressed' : 'nested',
        sourceComments: true,
        sourceMap: '/' + paths.sass.src
    }))

    .pipe(autoprefixer({
        browsers: [
            'last 2 versions' // Depends on the project, more info : ( https://confluence.emakina.nl/display/TBD/Definition+of+Done)
        ]
    }))

    .pipe(sourcemaps.write('./'))

    .pipe(mmq()) // Todo : if the this pipe is commented the production flag works well
    .pipe(gulp.dest(paths.sass.dest));
});

// ======================================================
// TASK: Build Css / JS / Iconfont / Sprite
// ======================================================

gulp.task('build', function(callback) {
  sequence('sprites','iconfont','style', 'scripts' , callback);
});

// ======================================================
// TASK: Gulp default (using build task with a simple watch )
// ======================================================
gulp.task('watch', function() {
    gulp.watch(paths.sass.src + '**/*.scss', ['style']).on('change', callback);
    gulp.watch(paths.js.src + '**/*.js', ['scripts']).on('change', callback);

      function callback(event) {
        console.log(chalk.green ('File ' + event.path + ' was ' + event.type + '! Still on watching mode...'));
      };
});


gulp.task('default', function() {

    console.log(chalk.white.bgBlue('Building ' + (flags.production ? 'production' : 'development') + ' version...'));

    if (flags.watch) {
        sequence(
            'clean', // Always clean the destination folder before compile the code
            [
                // Up to the developer to decide the tasks in this list
                'build',
                'style-lint',
            ],
            'watch',
            function() {
                console.log(chalk.white.bgBlue('I am in watch mode...'))
            }
        )
    }
     else {
        sequence(
            'clean', // Always clean the destination folder before compile the code
            [
                // Up to the developer to decide the tasks in this list
                'sprites',
                'iconfont',
                'style',
                'scripts',
            ],
            function() {
                console.log(chalk.white.bgGreen('All great CHUCK NORRIS! Code is ready :) '))
            }
        )
    }
});
