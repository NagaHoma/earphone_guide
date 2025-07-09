# earphone_guide

## URL
※作成済みのもののみ

### 5月納品済み
| 番号 | ページ名 | URL |
| ---- | ---- | ---- |
| ④ | バリアフリー | /barrierfree/ |

### 6/2納品分
| 番号 | ページ名 | URL |
| ---- | ---- | ---- |
| ① | TOP | / |
| ⑦ | 新着ニュース（一覧） | /news/ |
| ⑦-1 | 新着ニュース（詳細） | /news/detail.html |
| ⑨ | プレスリリース（一覧） | /press/ |
| ⑨-1 | プレスリリース（詳細） | /press/detail.html |

### 6/9納品分
| 番号 | ページ名 | URL |
| ---- | ---- | ---- |
| ④-1 | 解説付きで伝統芸能を観る（カレンダー詳細） | /explain/detail.html |
| ⑤-1 | 視覚・聴覚補助付きで舞台を観る（カレンダー詳細） | /support/detail.html |
| ⑥-1 | 外国語対応があるイベントに行く（カレンダー詳細） | /language/detail.html |
| ⑧ | 会社概要 | /company/ |
| ⑧-2 | 会社沿革 | /company/company_history/ |
| ⑧-3 | イヤホンガイドの歴史 | /company/guide_history/ |
| ⑧-4 | 採用情報 | /company/recruit/ |
| ⑧-5 | 採用情報（詳細） | /company/recruit/detail.html |

### 6/16納品分（6/23納品分も含む）
| 番号 | ページ名 | URL |
| ---- | ---- | ---- |
| ②-1 | 主催者様・事業者様（公演サポート） | /organizer/ |
| ②-2 | 主催者様・事業者様（インバウンド対応／バリアフリー対応） | /organizer/special_support/ |
| ②-3 | 主催者様・事業者様（ご提供可能な機材） | /organizer/device/ |
| ②-4 | 主催者様・事業者様（公演以外でのサービス） | /organizer/other/ |
| ④ | 解説付きで伝統芸能を観る | /explain/ |
| ⑤ | 視覚・聴覚補助付きで舞台を観る | /support/ |
| ⑥ | 外国語対応があるイベントに行く | /language/ |
| ⑨ | お問い合わせ | /contact/ |

### 7/14納品分
| 番号 | ページ名 | URL |
| ---- | ---- | ---- |
| ④-2 | イヤホンガイド解説者紹介 | /explain/specialist/ |
<br><br>

## 解説者紹介ページ構成

### ディレクトリ構成
```
/json/specialists.json       //解説者データ
/js/specialist.js            //タブ切替 & 動的表示ロジック
/image/explain/specialist/   //解説者の画像ファイル
```

### JSON構成（/json/specialists.json）

```js
{
  "A": [                                   //あ行 *1
    {
      "name": "青木 戸枝",                  //名前
      "ruby": "あおき ふさえ",               //ルビ
      "image": "aoki.jpg",                 //画像ファイル名
      "intro": [...],                      //自己紹介 *2
      "message": [...],                    //メッセージ *2
      "audio": "https://vimeo.com/xxxxx"   //音声サンプルURL *3
    }
  ],
  ...
}
```

- *1　キー：A（あ行）〜WA（わ行）＋Adviser（解説アドバイザー）
- *2　`intro`、`message`：配列の中で改行ごとに`,`で区切る
- *3　`audio`：vimeoのURL（空欄の場合はボタン非表示）
