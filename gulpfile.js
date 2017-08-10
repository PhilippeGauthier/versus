
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    htmlreplace = require('gulp-html-replace'),
    sourcemaps = require("gulp-sourcemaps"),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    gulp_concat = require('gulp-concat'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    livereload = require('gulp-livereload'),
    reload_page = livereload.changed

var path = {
    HTML: './src/html',
    HTML_COPY: 'wwwroot/_themes/main/layouts',
    SCSS: './src/scss/**/*.scss',
    SCSS_ENTRY: './src/scss/main.scss',
    BOOTSTRAP: 'bower_components/bootstrap/scss/**/*.scss',
    SCSS_BUILD: 'wwwroot/_themes/main/css/',
    CSS_MINIFIED_OUT: 'main.min.css',
    JS: './src/js/**/*.js',
    JS_ENTRY: './src/js/',
    JS_BUILD: 'build/js/',
    JS_BOOTSTRAP: 'bower_components/jquery/dist/jquery.min.js',
    JS_PUBLIC: 'wwwroot/_themes/main/js',
    JS_MINIFIED_OUT: 'main.min.js',
    THEME: 'wwwroot/_themes/main',
    DEST: 'wwwroot/_themes/'
};

gulp.task('copy', function(){
  gulp.src(path.HTML + '/default.html')
    .pipe(gulp.dest(path.HTML_COPY));
});

gulp.task('copyJS', function(){
  gulp.src(path.HTML + '/default.html')
    .pipe(gulp.dest(path.HTML_COPY));
});

gulp.task('replaceHTML', function(){
  
  gulp.src(path.HTML + '/default.html')
    .pipe(htmlreplace({
      'js': {
        src: null,
        tpl: '<script src="{{ theme:js src="main.min.js" }}"></script>'
      },
      'css': {
        src: null,
        tpl: '<link rel="stylesheet" href="{{ theme:css src="main.min.css" }}" />'
      }
    }))
    .pipe(gulp.dest(path.HTML_COPY));
});

gulp.task('sass', function () {
  gulp.src(path.SCSS_ENTRY)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules/susy/sass']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.SCSS_BUILD));
});

gulp.task('minify-css', function() {
  return gulp.src([path.SCSS_BUILD + '/main.css'])
    .pipe(cleanCss())
    
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.SCSS_BUILD))
});

gulp.task('revision', function() {
  return gulp.src([path.SCSS_BUILD + '/main.min.css'])
    .pipe(rev())
    .pipe(gulp.dest(path.SCSS_BUILD))
    .pipe(rev.manifest())
    .pipe(gulp.dest(path.SCSS_BUILD));
});

gulp.task("revreplace", ["revision"], function(){
  var manifest = gulp.src("./" + path.SCSS_BUILD + "/rev-manifest.json");
  return gulp.src([path.HTML_COPY + '/default.html'])
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(path.HTML_COPY));
});




gulp.task('js', function(){
    return gulp.src([
            path.JS_ENTRY + 'third_party/*.js',
            path.JS_ENTRY + 'components/*.js',
            path.JS_ENTRY + 'custom.js'])
        .pipe(gulp_concat('main.js').on('error', gutil.log))
        .pipe(gulp.dest(path.JS_PUBLIC).on('error', gutil.log))
        .pipe(rename('main.min.js').on('error', gutil.log))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest(path.JS_PUBLIC).on('error', gutil.log));
});

gulp.task('rename-js', function() {
  return gulp.src(path.JS_BUILD + 'main.js')
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest(path.JS_PUBLIC))
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(path.HTML + '/default.html', ['copy']);
  gulp.watch([path.SCSS, path.BOOTSTRAP], ['sass']);
  gulp.watch(path.JS, ['js']);
  gulp.watch([path.THEME + '/**/*.html'], reload_page);
  gulp.watch([path.THEME + '/**/*.js']).on('change', livereload.changed);  
  gulp.watch([path.THEME + '/**/*.css']).on('change', livereload.changed);
});

gulp.task('default', ['copy','watch']);

gulp.task('production', ['replaceHTML','minify-css','revision','revreplace','js']);


