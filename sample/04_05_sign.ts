// オブジェクト型リテラル
// 各種オブジェクト(関数、クラス)はそれぞれリテラルで表すことができる
// リテラルには必要なシグネチャを含める事ができる


// プロパティシグネチャ
//   オブジェクトに含めるプロパティの名前とデータ型を指定
//   名前の末尾に?をつけるとプロパティは省略可能
let obj1: {
  a: number;
  b: string;
  c?: boolean;
}
//   シグネチャに合致するオブジェクトリテラル代入
obj1 = {
  a: 999,
  b: 'hoge',
}
alert(obj1.a);
alert(obj1.b);


// メソッドシグネチャ
//   メソッドシグネチャを含めたオブジェクト型の宣言
let obj2: {
  hello(msg: string): string;
}
//   シグネチャに合致するオブジェクトリテラルの代入
obj2 = {
  hello: (x: string): string => {
    return 'hello' + x;
  }
}
alert(obj2.hello('fuga'));


// コールシグネチャ
//   コールシグネチャを含めたオブジェクト型の宣言
let obj3: {
  (x: string): string;
}
//   シグネチャに合致するオブジェクトリテラルの代入
obj3 = function(x: string): string {
  return 'hello' + x;
}
alert(obj3('haga'));


// コンストラクタシグネチャ
//    インスタンス化可能な(new演算子が使用できる)オブジェクトに含める
let obj4: {
  new (x: string): Cls;
}

class Cls {
  constructor(private x: string) {
  }

  public hello(): string {
    return 'hello' + this.x;
  }
}
obj4 = Cls;
let res = new obj4('piyo');
alert(res.hello());


// インデックスシグネチャ
//    オブジェクトが文字列または数値でインデックス付けされる場合のデータ型を指定
let obj5: {
  [x: string]: number;
}
obj5 = {
  hoge: 777,
  fuga: 123
};
alert(obj5['hoge']);
