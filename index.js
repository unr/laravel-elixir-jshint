'use strict';

var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var elixir = require('laravel-elixir');
var path   = require('path');

elixir.extend('jshint', function(src, options) {
  src = src || [
    'public/js/**/*.js',
    '!public/js/vendor/**/*.js'
  ];

  options = options || {};

  var onError = function(err) {
    notify.onError({
      title: 'Laravel Elixir',
      subtitle: 'JSHint failed.',
      message: '<%= error.message %>',
      icon: path.join(__dirname, '../laravel-elixir/icons/fail.png')
    })(err);

    this.emit('end');
  };

  gulp.task('jshint', function() {
    return gulp.src(src)
      .pipe(jshint(options))
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'))
      .on('error', onError)
      .pipe(notify({
        title: 'Laravel Elixir',
        subtitle: 'JSHint passed.',
        message: 'JSHint passed',
        icon: path.join(__dirname, '../laravel-elixir/icons/pass.png'),
        onLast: true
      }));
  });

  this.registerWatcher('jshint', src);

  return this.queueTask('jshint');
});
