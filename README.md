# HTML + CSS コーディングのための開発環境

導入したモジュールは以下

gulp をグローバルにインストールし、プロジェクトの Dev 環境に追加

```
yarn global add gulp
yarn add gulp -D
```

sass のコンパイルを導入

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

JavaScript の圧縮

```
yarn add gulp-uglify -D
```

Browser-sync の導入　画面を更新+スクロール, input の入力も同期

```
yarn add browser-sync -D
```

gulp-plumber の導入　エラー時のハンドリングを行う。

```
yarn add gulp-plumber -D
```

gulp-notify の導入　エラー時にブラウザで表示する。

```
yarn add gulp-notify -D
```

gulp-htmlhint の導入　 HTML の文法をチェックする。

```
yarn add gulp-htmlhint -D
```

clean タスクのために必要な node のライブラリを追加する。

```
yarn add del -D
```

画像を圧縮する。それぞれのプラグインと画像形式の対応は以下となる。
gulp-imagemin: svg gif
imagemin-pngquant: png
imagemin-mozjpeg: jpeg

```
yarn add gulp-imagemin imagemin-pngquant imagemin-mozjpeg -D
```

CSS を圧縮する。

```
yarn add gulp-clean-css -D
```

reset css を import できるようにする。

```
yarn add node-sass-package-importer -D
```

# ここでは、例として html5-reset を使えるようにする

使い方はシンプルで、import すれば良い
TODO: いちいちリセット css を import するのはめんどくさいので、予め import しておくように修正する。

```
yarn add html5-reset -D
```

sass lint ツールを導入

```
yarn add gulp-sass-lint -D
```

TODO: yarn add gulp-sftp -D

TODO: npm install -D webpack webpack-stream terser-webpack-plugin

TODO: babel
TODO: browserify
TODO: glob, postcss

TODO: build コマンドの実装：dev と prod で出力されるファイルをコンパイル後そのままの形式と圧縮形式に分けたい。（出力されたファイルをデバッグしやすいようにすることで利便性が向上するため）
