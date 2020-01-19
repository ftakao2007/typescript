// 継承
// extendsで継承、superで親クラスへアクセス

class Js {
  constructor(private name: string){
  }

  public hello(): string {
  return 'Hello' + this.name;
  }
}

// クラスの継承
class Ts extends Js {
  constructor() {
    super("TypeScript");
  }

  // オーバーライド
  public hello(): string {
    return super.hello() + '!!!';
  }
}

let ts = new Ts();
alert(ts.hello());

