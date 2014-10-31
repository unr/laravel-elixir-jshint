# laravel-elixir-jshint

## Install

```sh
$ npm install laravel-elixir-jshint --save-dev
$ touch .jshintrc
```

## Usage

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-jshint');

elixir(function(mix) {
    mix.jshint();
});
```
