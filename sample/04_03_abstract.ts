// 抽象クラス
// 抽象クラスを直接インスタンス化することはできない

abstract class Human{
  abstract hello(msg: string): string;
}

class Man extends Human{
  public hello(msg: string): string{
    return msg + 'だぜ!!';
  }
}

let man = new Man();
alert(man.hello('こんにちは'));
