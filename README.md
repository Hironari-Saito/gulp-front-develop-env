# HTML + CSS コーディングのための開発環境

導入したモジュールは以下

gulpをグローバルにインストールし、プロジェクトのDev環境に追加
```
yarn global add gulp
yarn add gulp -D
```
sassのコンパイルを導入
```
yarn add gulp-sass -D
```

オートプリフィクサーの導入（ベンダープレフィックスを自動的に追加してくれる）
```
yarn add gulp-autoprefixer -D
```

スタイルガイドジェネレーターの導入
```
yarn add @frctl/fractal -D
```

JavaScriptの圧縮
```
yarn add gulp-uglify -D
```

Browser-syncの導入　画面を更新+スクロール, inputの入力も同期
```
yarn add browser-sync -D
```


gulp-plumberの導入　エラー時のハンドリングを行う。
```
yarn add gulp-plumber -D
```

gulp-notifyの導入　エラー時にブラウザで表示する。
```
yarn add gulp-notify -D
```

gulp-htmlhintの導入　HTMLの文法をチェックする。
```
yarn add gulp-htmlhint -D
```

TODO: yarn add gulp-sftp -D
TODO: gulp-group-css-media-queries
TODO: gulp-mode
TODO: npm install -D webpack webpack-stream terser-webpack-plugin
TODO: gulp-imageoptim
TODO: gulp-changed
TODO: gulp-clean-css (css圧縮)  
TODO: gulp-imagemin imagemin-pngquant imagemin-mozjpeg
TODO: babel
TODO: browserify

cleanタスクのために必要なnodeのライブラリを追加する。
```
yarn add del -D
```