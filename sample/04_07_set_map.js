// セット/マップ
// ES2015で実装されたコレクション
// セット : 保持する値が重複しないコレクション
// マップ : キーと値の組み合わせを保持するコレクション
// セット
let set = new Set(['hoge', 'fuga']);
set.add('piyo');
set.add('hoge');
let values = "";
set.forEach((value) => values += value);
alert(values);
// マップ
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");
let values2 = "";
map.forEach((value, key) => values2 += (key + '=' + value + ''));
alert(values2);
