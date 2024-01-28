# Conduitとは
Conduitは Medium.com のクローンの記事投稿サイトです。
その似た機能のサイトをRailsとNext.jsで実装します。

# 使用技術
- バックエンド
  - Ruby 3.2.2
  - Rails 7.1.2
- フロントエンド
  - React 18.2.0
  - Next.js 14.1.0
- DB
  - sqlite
# 実行方法
Rails側で
`rails server -p 3001`で
APPサーバーをlocalhost:3001
で立てる。
[Railsは別リポジトリ参照](https://github.com/Taku1103/API_Realworld_Quest)


next.js側で
`npm run dev`
でを実行しWebサーバーをlocalhost:3000で立てる。


# 実装したもの
* articles(投稿記事)
  * 作成/一覧表示/詳細表示/更新/削除 のCRUD処理
  * usersとのリレーション(対一)
* users
  * 登録 処理
  * secureなパスワード
  * articlesとのリレーション(対多)
* 認証
  * セッションストレージを用いいたuserのログイン/ログアウト処理
* その他
  * ヘッダーの ログイン時で表示切替
  * セッションストレージを用いたログインユーザー情報の描画
  * articlesとusersテーブル結合して記事投稿者のusernameを表示
