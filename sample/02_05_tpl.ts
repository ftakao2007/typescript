// タプル
// 関数に戻値を複数返却したい場合などに利用
// 名前: [型1, 型2, ... ] の書式で宣言
// タプルはデータ型の省略ができない
// -> 省略すると配列として扱われる
let tpl: [string, number, boolean] = ['hoge', 999, true];

alert(tpl);
alert(tpl[1]);

// 要素の書き換え
tpl[1] = 100;
alert(tpl);
