## JavaScript 練習問題

### ループの練習 ─ 配列とオブジェクト

<br>

#### ループのパターン

1. while(条件式){処理...}
2. do{処理...}while(条件式)
3. for(初期値の指定 ; 条件式 ; 反復ごとの操作 ){処理...}
4. for(let 配列の添字 in 配列){処理...}
5. for(let 配列の要素 of 配列){処理...}

以下で使用する日付表示用の関数

```js
/**
 * 日付を表示する関数
 * @param {Date} d 日付オブジェクト
 */
function printDate(d){
    let s = d.getFullYear() + '年';
    s += d.getMonth() + 1 + '月';
    s += d.getDate() + '日';
    let yobi = ['日', '月', '火', '水', '木', '金', '土'];
    s += yobi[d.getDay()];
    console.log(s);
}
```

##### 1. の例題

次の日曜日の日付を得る（注意：もっと効率的な手順もあります）

```js
let d = new Date(); // 現在の日付・時刻
// let d = new Date(2022, 4, 15); // 日付を指定
while(d.getDay() !== 0){
    d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
}
printDate(d);
```

##### 2. の例題

次の日曜日の日付を得る（again）

```js
let d = new Date(); // 現在の日付・時刻
// let d = new Date(2022, 4, 15); // 日付を指定
do{
    d = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
}while(d.getDay() !== 0);
printDate(d);
```

#### ここでクエスチョン

本日が日曜日だった場合，上記はどのような結果になるだろうか。
コメントアウトしてある行を有効にし，１つ前の行をコメントアウトして，試してみよう。

##### 3. の例題

変数のインクリメント・デクリメントの復習

基本的には書くのを楽にしたい。

```js
let i = 10;
// そもそも上記は，以下を簡略化した書き方
// let i; // 変数定義
// i = 10; // 値の設定

i = i + 10;
i += 10;
console.log(i);

i = i * 10;
i *= 10;
console.log(i);

i = i - 10;
i -= 10;
console.log(i);

i = i / 10;
i /= 10;
console.log(i);
```

特に１つずつ増加・減少は頻出なので，もっと楽にしたい。

```js
let j = 10;
j = j + 1;
j += 1;
j++;
console.log(j);

j = j - 1;
j -= 1;
j--;
console.log(j);
```

前につけることもできる

```js
let k = 10;
++k;
console.log(k);
```

しかし動作には注意が必要

```js
l = 10;
while(l++ < 20){
    console.log(l);
}

l = 10;
while(++l < 20){
    console.log(l);
}
```

あるいは，もっと端的に

```js
let m = 10;
let n = m++;
m = 10;
let o = ++m;
console.log(n, o);
```

やっと例題
２桁の自然数のうち，3の倍数でも5の倍数でもない数を全て得る

```js
let ar = [];
for(let i = 10; i < 100; i++){
    if(i % 3 !== 0 && i % 5 !== 0){
    //if(!(i % 3 === 0 || i % 5 === 0)){
            ar.push(i);
    }
}
console.log(ar);
```

補足

&& が「かつ」(and)，|| が「または」(or)を表す。

- ド・モルガンの法則

  ```text
  (not A) かつ (not B) ⇔ not (A または B)
  (not A) または (not B) ⇔ not (A かつ B)
  ```

##### 4. と 5. の例題

配列の各要素を順に処理するもの

```js
let ar = ['a', 'b', 'c', 'd', 'e'];
for(let i in ar){
    console.log(i, ar[i]);
}

for(let v of ar){
    console.log(v);
}
```

配列の添字（インデックス）を使う必要がない場合は，for ~ of を用いるのがシンプルである。

<br>

#### Q01 各ループを使ってみる

```js
let ar = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta'];
```

上記の配列の各要素を `console.log` で順に出力する処理を，1.〜5.の５通りで書け。

#### Q02 どれを使うか？

自然数で 3 の倍数でも，5 の倍数でもないものを，小さいものから順に 20 個求めよ。

- さすがに，4. や 5. ではないのは明白だろう

```js
let ar = [2, 3, 5, 7, 11, 13, 17, 19];
```

#### Q03 「パスカルの三角形」を10行目まで出力せよ

パスカルの三角形は，右端と左端は常に 1 で，他は前行の隣り合う数を足したもの。

```txt
      1
    1   1
   1  2  1
  1  3 3  1
 1 4  6  4 1
1 5 10 10 5 1
```

例えば4行目は，以下のようになっている。

- 左端は自動的に 1
- ２番目は，前行の 1 と 2 を足して 3
- ３番目は，前行の 2 と 1 を足して 3
- ４番目は，右端なので 1

※ちなみのこの数は，`(x + y)^n` を展開した際の係数となる。

出力の際は，位置を調整するのは大変なので，以下のような表示で良い。

```txt
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
```

ヒント

- 出力の際は，配列の `join` メソッドを使用する

```js
let ar = [1, 3, 3, 1];
console.log(ar.join(' '));
// もちろん，以下のようにしても良い
// let s = ar.join(' ');
// console.log(s);
```

<br>

#### オブジェクトの場合にどう処理するか？

```js
let o = {
    id: '004206',
    name: 'John',
    age: 43,
    country: 'UK',
    occupation: 'lawyer'
}
```

#### Q04 for(let ~ in ~){...}を用いて，オブジェクトのkeyとvalueを列挙せよ

ヒント

- `for(let i in o){...}` で `i` は，オブジェクト `o` の各キーである（すなわち，id, name, age...)

<br>

#### 配列・オブジェクトを「参照」する変数の振る舞い

```js
let a = [1, 2, 3];
let b = a;
b[0] = 4;
console.log(a, b);
```

関数の引数として渡すとどうなるか？

```js
function f(ar){
    if(Array.isArray(ar) && ar.length > 0){
        ar[0] = 'がちょーん';
    }
    return ar;
}

let a = [1, 2, 3];
let b = f(a);
console.log(a, b);
a[0] = '100';
console.log(a, b);
b[0] = '999';
console.log(a, b);
```

<br>

#### 【参考】Arrayオブジェクトのループ的なメソッド

every, filter, find/findIndex, fotEach, map, reduce, など
