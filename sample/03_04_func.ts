// 関数
function add(a: number, b: number): number{
  return a + b;
}
alert(add(1,2));

// 戻値無しの関数式
function shout(s: string): void {
  alert(`${s}--!!`);
}
shout('hoge')

// 関数リテラル
// 末尾にセミコロンがなくてもいける
let hoge = function(): void {
  alert('hoge')
};
hoge();

// 関数リテラル(アロー演算子)
let fuga = (x: string): string => {
  return x + x;
}
alert(fuga('piyo'));

// 関数から複数の値を返す場合はタプル型の戻値を使う
function func(): [string, string, number] {
  return ['hoge', 'fuga', 100];
}
let tpl = func();
alert(tpl)
