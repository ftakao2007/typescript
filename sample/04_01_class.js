// クラス
class Cls {
    // コンストラクタ
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // ゲッタ, セッタ
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    // メソッド
    calc() {
        alert(this._x + this._y);
    }
}
// 利用
let cls = new Cls(1, 1);
cls.calc();
cls.x = 10;
cls.y = 11;
cls.calc();
