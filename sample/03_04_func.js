// 関数
function add(a, b) {
    return a + b;
}
alert(add(1, 2));
// 戻値無しの関数式
function shout(s) {
    alert(s + "--!!");
}
shout('hoge');
// 関数リテラル
// 末尾にセミコロンがなくてもいける
var hoge = function () {
    alert('hoge');
};
hoge();
// 関数リテラル(アロー演算子)
var fuga = function (x) {
    return x + x;
};
alert(fuga('piyo'));
// 関数から複数の値を返す場合はタプル型の戻値を使う
function func() {
    return ['hoge', 'fuga', 100];
}
var tpl = func();
alert(tpl);
