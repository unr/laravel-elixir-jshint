var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    elixir = require('laravel-elixir');

elixir.extend("jshint", function (baseDir) {
  baseDir = baseDir || 'public/js';

  var src = baseDir + '/**/*.js';

  var onError = function (err) {
    notify.onError({
      title: "Laravel Elixir",
      subtitle: "JSHint failed.",
      message: "Error: <%= error.message %>",
      icon: __dirname + '/../laravel-elixir/icons/fail.png'
    })(err);

    this.emit('end');
  };

  gulp.task("jshint", function () {
    return gulp.src(src)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'))
      .on('error', onError)
      .pipe(notify({
        title: 'Laravel Elixir',
        subtitle: 'JSHint passed.',
        message: ' ',
        icon: __dirname + '/../laravel-elixir/icons/pass.png'
      }));
  });

  this.registerWatcher("jshint", src);

  return this.queueTask("jshint");
});
