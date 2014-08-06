var gulp = require('gulp'),
    compass = require('gulp-compass'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();

var paths = {
  styles: {
    src:  '_/components/scss/*.scss',
    dest: '_/components/scss/scss/build/'
  }
};

gulp.task('compass', function () {
  return gulp.src(paths.styles.src)
    .pipe(compass({
      errLogToConsole: true,
      config_file: 'config.rb',
      css: '_/components/scss/build/',
      sass: '_/components/scss/'
    }))
    .on('error', function(err) {
        // Would like to catch the error here
    })
    .pipe(gulp.dest('_/components/scss/build/'));
});

gulp.task('styles', function() {
  return gulp.src('_/components/scss/build/main.css')
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('statamic/_themes/main/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('statamic/_themes/main/css'))
    .pipe(livereload(server))
});

gulp.task('scripts', function() {
  return gulp.src(['_/components/js/scrollspy.js','_/components/js/imagelightbox.js','_/components/js/baguetteBox.js','_/components/js/waypoints.js','_/components/js/jquery.scrollme.js','_/components/js/waypoints.sticky.js','_/components/js/scripts.js' ])
    // .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('statamic/_themes/main/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('statamic/_themes/main/js'))
    .pipe(livereload(server))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('_/assets/img/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('statamic/_themes/main/img'))
    .pipe(livereload(server))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() {
  return gulp.src(['statamic/_themes/main/css', 'statamic/_themes/main/js', 'statamic/_themes/main/img'], {read: false})
    .pipe(clean());
});

// Watch Files For Changes
gulp.task('watch', function() {
    server.listen(35729, function (err) {
        if (err) {
          return console.log(err)
        };
        gulp.watch(['_/components/scss/*.scss', '_/components/scss/**/*.scss'], ['compass']);
        gulp.watch('_/components/scss/build/*.css', ['styles']);
        gulp.watch('_/components/js/*.js', ['scripts']);
        gulp.watch('_/assets/img/*', ['images']);
    });
});

gulp.task('default', ['watch'], function() {
    gulp.start('compass', 'styles', 'scripts');
});
