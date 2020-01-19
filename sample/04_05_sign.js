// オブジェクト型リテラル
// 各種オブジェクト(関数、クラス)はそれぞれリテラルで表すことができる
// リテラルには必要なシグネチャを含める事ができる
// プロパティシグネチャ
//   オブジェクトに含めるプロパティの名前とデータ型を指定
//   名前の末尾に?をつけるとプロパティは省略可能
let obj1;
//   シグネチャに合致するオブジェクトリテラル代入
obj1 = {
    a: 999,
    b: 'hoge',
};
alert(obj1.a);
alert(obj1.b);
// メソッドシグネチャ
//   メソッドシグネチャを含めたオブジェクト型の宣言
let obj2;
//   シグネチャに合致するオブジェクトリテラルの代入
obj2 = {
    hello: (x) => {
        return 'hello' + x;
    }
};
alert(obj2.hello('fuga'));
// コールシグネチャ
//   コールシグネチャを含めたオブジェクト型の宣言
let obj3;
//   シグネチャに合致するオブジェクトリテラルの代入
obj3 = function (x) {
    return 'hello' + x;
};
alert(obj3('haga'));
// コンストラクタシグネチャ
//    インスタンス化可能な(new演算子が使用できる)オブジェクトに含める
let obj4;
class Cls {
    constructor(x) {
        this.x = x;
    }
    hello() {
        return 'hello' + this.x;
    }
}
obj4 = Cls;
let res = new obj4('piyo');
alert(res.hello());
// インデックスシグネチャ
//    オブジェクトが文字列または数値でインデックス付けされる場合のデータ型を指定
let obj5;
obj5 = {
    hoge: 777,
    fuga: 123
};
alert(obj5['hoge']);
