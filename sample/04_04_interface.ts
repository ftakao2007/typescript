// インタフェース
// interfaceキーワードで宣言
// implementsキーワードで実装
// フィールドやメソッドの末尾に?を付けたものは実装が任意になる

// インタフェース
interface Human {
  name: string;
  age?: number;
  hello(msg: string): string;
}

// インタフェースの実相
class Shiro implements Human {
  constructor(public name: string) {
  }

  public hello(msg: string): string{
    return `${msg}、 ${this.name} です`
  }
}

let shiro = new Shiro('天田');
alert(shiro.hello('こんにちは'));
