# laravel-elixir-jshint

## Install

```sh
$ npm install laravel-elixir-jshint --save-dev
$ touch .jshintrc
```

## Usage

### Example Gulpfile

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-jshint');

elixir(function(mix) {
    mix.jshint();
});
```

### Advanced example

```javascript
mix.jshint([
  'public/js/**/*.js',
  '!public/js/vendor/**/*.js'
]);
```
