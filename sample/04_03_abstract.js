// 抽象クラス
class Human {
}
class Man extends Human {
    hello(msg) {
        return msg + 'だぜ!!';
    }
}
let man = new Man();
alert(man.hello('こんにちは'));
