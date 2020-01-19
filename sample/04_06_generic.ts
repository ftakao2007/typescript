// ジェネリック
//   データ型をパラメータ化するための仕組み
//   山かっこの中にデータ型をカンマ区切りで区切って指定し、クラスやメソッドに定義する


// ジェネリックを使ったクラスの宣言
class Cls<T, U> {
  constructor(private x: T, private y: U) {
  }

  public resultX(): T {
    return this.x;
  }

  public resultY(): U {
    return this.y;
  }
}

let cls = new Cls<string, number>('hoge', 999);
let x: string = cls.resultX();
let y: number = cls.resultY();
alert(x);
alert(y);


// ジェネリックを使った関数定義
function fnc<T>(x: T): T {
  return x;
}

let x2: string = fnc<string>('fuga');
let y2: number = fnc<number>(999);
let z2: boolean = fnc<boolean>(true);
alert(x2);
alert(y2);
alert(z2);


// 型パラメータには「extends」で制約を追加する事ができる
// -> 制約のあるパラメータには指定した型自身かそのサブタイプ以外は指定できなくなる
interface Hoge {
  hoge(): string;
}
class HogeClass implements Hoge {
  public hoge(): string {
    return 'hoge!';
  }
}

interface Fuga {
  fuga(): string;
}
class FugaClass implements Fuga {
  public fuga(): string {
    return 'fuga';
  }
}

// 型パラメータに制約を追加
class Piyo<T extends Hoge> {
}

let piyo1 = new Piyo<HogeClass>();

// 以下のFugaClassはHogeのサブタイプではないのでコンパイルエラーになる
//let piyo2 = new Piyo<FugaClass>();
