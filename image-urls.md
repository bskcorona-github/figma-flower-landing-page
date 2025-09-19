# サンプル画像URL

開発・テスト用に使用できる無料の画像URLです。本番環境では適切なライセンスの画像を使用してください。

## Unsplash（高品質な無料写真）

### ヒーローセクション
```
https://images.unsplash.com/photo-1563473213013-de2a0133c100?w=400&h=400&fit=crop
```

### 商品画像
```
https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=200&fit=crop
https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=200&h=200&fit=crop
https://images.unsplash.com/photo-1574860518311-ca2ac1db8e94?w=200&h=200&fit=crop
```

### ディール商品
```
https://images.unsplash.com/photo-1520763185298-1b434c919102?w=150&h=150&fit=crop
https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=150&h=150&fit=crop
https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=150&h=150&fit=crop
```

### 中央の花の画像
```
https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=400&fit=crop
```

### コレクションギャラリー
```
https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=200&h=200&fit=crop
https://images.unsplash.com/photo-1563210263-8b32df2cd5f3?w=200&h=200&fit=crop
https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=200&h=200&fit=crop
https://images.unsplash.com/photo-1487070183336-b863922373d4?w=200&h=200&fit=crop
https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop
https://images.unsplash.com/photo-1570721786942-78b8c1c38cbe?w=200&h=200&fit=crop
```

## Picsum（ランダム画像サービス）

### 基本的な使用方法
```
https://picsum.photos/幅/高さ
例: https://picsum.photos/400/400
```

### 特定のIDを指定
```
https://picsum.photos/id/画像ID/幅/高さ
例: https://picsum.photos/id/1015/200/200
```

## プレースホルダーサービス

### PlaceKitten（猫の画像）
```
https://placekitten.com/200/200
```

### Lorem Picsum
```
https://picsum.photos/seed/flower1/200/200
https://picsum.photos/seed/flower2/200/200
```

## 使用方法

1. HTMLファイルの画像のsrc属性を上記のURLに置き換える
2. または `images/` フォルダにダウンロードして保存する

## 自動置換スクリプト（オプション）

以下のJavaScriptコードをscript.jsに追加すると、画像が見つからない場合に自動的にプレースホルダーURLに置き換えます：

```javascript
// 画像の自動フォールバック
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    const fallbackUrls = {
        'hero-flower.png': 'https://images.unsplash.com/photo-1563473213013-de2a0133c100?w=400&h=400&fit=crop',
        'product-1.png': 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200&h=200&fit=crop',
        'product-2.png': 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=200&h=200&fit=crop',
        'product-3.png': 'https://images.unsplash.com/photo-1574860518311-ca2ac1db8e94?w=200&h=200&fit=crop',
        'center-flower.png': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=400&fit=crop'
    };
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            const fileName = img.src.split('/').pop();
            if (fallbackUrls[fileName]) {
                img.src = fallbackUrls[fileName];
            }
        });
    });
});
```

## 注意事項

- Unsplashの画像は個人・商用利用可能ですが、クレジット表記が推奨されます
- 本番環境では画像をローカルに保存することを推奨します
- 外部URLを使用する場合、サービスが停止するリスクがあります
- 大量のアクセスがある場合、外部サービスに負荷をかける可能性があります
