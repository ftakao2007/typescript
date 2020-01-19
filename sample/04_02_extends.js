// 継承
// extendsで継承、superで親クラスへアクセス
class Js {
    constructor(name) {
        this.name = name;
    }
    hello() {
        return 'Hello' + this.name;
    }
}
// クラスの継承
class Ts extends Js {
    constructor() {
        super("TypeScript");
    }
    // オーバーライド
    hello() {
        return super.hello() + '!!!';
    }
}
let ts = new Ts();
alert(ts.hello());
