
describe('足し算をする', function() {
  it('1から10まで足したら55', function() {
    expect(sumall(1,2,3,4,5,6,7,8,9,10)).toBe(55);
  });
  it('足す要素数を変えても計算できる', function () {
    expect(sumall(1,2,3,4,5)).toBe(15);
  });
});

//
// 自動販売機の釣り銭計算プログラム
//

// 釣り銭用のお金がどれくらいあるか指定してオブジェクトを作るコンストラクタ
let Wallet = function (coins) {
  this.coins = coins;
};
// 引数のcoin(幾らの硬貨・紙幣か)と枚数を設定する
Wallet.prototype.set_coins = function(coin, count) {
  this.coins[coin] = count;
};
// 引数のcoinが何枚あるか取得する
Wallet.prototype.get_num_coin = function(coin) {
  return this.coins[coin] || 0; // データが無ければゼロを返す場合のイディオム
};
// 合計金額が幾らになるか計算する。
Wallet.prototype.total = function() {
  let total = 0;
  for (const coin of Object.keys(this.coins)) {
    total += coin * this.get_num_coin(coin);
  }
  return total;
};

// 以降はテストコード

describe('釣り銭の残りが管理出来る', function() {
  let wallet = new Wallet({
    10000: 10, // 1万円が10枚
     5000: 10, // 5,000円が10枚
     1000: 10,
      500: 10,
      100: 10,
       50: 10,
       10: 10,
        5: 10,
        1: 10
  });

  it('お金は入っているか？', function() {
    expect(wallet.get_num_coin(5)).toBe(10);
    wallet.set_coins(5, 3); // 5円を3枚に設定
    expect(wallet.get_num_coin(5)).toBe(3);
  });
  // TODO: 合計金額(total())が正しく計算できるか確認して見よう
});

// ここに釣り銭計算用のテストコードと実装を書いてみよう。

describe('釣り銭を計算できる', function() {
  let wallet = new Wallet({
    10000: 10, // 1万円が10枚
     5000: 10, // 5,000円が10枚
     1000: 10,
      500: 10,
      100: 10,
       50: 10,
       10: 10,
        5: 10,
        1: 10
  });
  it('1,635円の時の釣り銭を計算できる', function () {
    let result = wallet.calc_change(1635);
    // TODO: ここに各種のアサーションを書く
  });
});

Wallet.prototype.calc_change = function (total) {
  // TODO: ここにおつりを計算するコードを書く
};
