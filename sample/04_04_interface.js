// インタフェース
// interfaceキーワードで宣言
// implementsキーワードで実装
// フィールドやメソッドの末尾に?を付けたものは実装が任意になる
// インタフェースの実相
class Shiro {
    constructor(name) {
        this.name = name;
    }
    hello(msg) {
        return `${msg}、 ${this.name} です`;
    }
}
let shiro = new Shiro('天田');
alert(shiro.hello('こんにちは'));
