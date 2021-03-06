System.config({
  baseURL: '/',
  defaultJSExtensions: true,

  // babelトランスパイラを使います。ブラウザでbabel-core/5.8.34/browser.min.jsをロードしておくこと。
  // babel6ではなく5を使うことに注意してください。
  transpiler: 'babel',
  map: {
    app: "app", // System.import('app')と書いたらappフォルダを参照するという意味。

    // 下記数行はpackagesの記述とセットで書くことでangular2,rxjsのモジュールを動的にロードできます。
    //'angular2': 'node_modules/angular2',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'symbol-observable': 'node_modules/symbol-observable',
    // 'zone.js': 'node_modules/zone.js',
  },

  // mapでファイルではなくフォルダを指定した場合、packagesの設定も合わせて必要になります。
  packages: {
    // System.import('app')と書いたときにロードされるファイルをmainで指定しています。
    app: {
      main: 'main' // transpilerがbabelなので拡張子は自動的にjsだと見なされます。
    },

    // mapでフォルダを指定した場合はこれをセットで書かないとangular2,rxjsのモジュールを動的にロードできません。
    //angular2: {},
    '@angular/core': {
      main: 'index' // import '@angular/core';と書いたら node_modules/@angular/core/index.js を参照するという意味。
    },
    '@angular/common': {
      main: 'index'
    },
    '@angular/compiler': {
      main: 'index'
    },
    '@angular/platform-browser': {
      main: 'index'
    },
    '@angular/platform-browser-dynamic': {
      main: 'index'
    },
    rxjs: {},
    'symbol-observable':  {
      main: 'index'
    },
    // 'zone.js': {}
  }
});