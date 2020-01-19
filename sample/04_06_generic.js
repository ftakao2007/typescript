// ジェネリック
//   データ型をパラメータ化するための仕組み
//   山かっこの中にデータ型をカンマ区切りで区切って指定し、クラスやメソッドに定義する
// ジェネリックを使ったクラスの宣言
class Cls {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    resultX() {
        return this.x;
    }
    resultY() {
        return this.y;
    }
}
let cls = new Cls('hoge', 999);
let x = cls.resultX();
let y = cls.resultY();
alert(x);
alert(y);
// ジェネリックを使った関数定義
function fnc(x) {
    return x;
}
let x2 = fnc('fuga');
let y2 = fnc(999);
let z2 = fnc(true);
alert(x2);
alert(y2);
alert(z2);
class HogeClass {
    hoge() {
        return 'hoge!';
    }
}
class FugaClass {
    fuga() {
        return 'fuga';
    }
}
// 型パラメータに制約を追加
class Piyo {
}
let piyo1 = new Piyo();
// 以下のFugaClassはHogeのサブタイプではないのでコンパイルエラーになる
let piyo2 = new Piyo();
