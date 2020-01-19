// クラス

class Cls {
  // コンストラクタ
  constructor(private _x: number, private _y: number){
  }

  // ゲッタ, セッタ
  get x(): number {
    return this._x;
  }
  set x(x: number) {
    this._x = x;
  }
  get y(): number {
    return this._y;
  }
  set y(y: number) {
    this._y = y;
  }

  // メソッド
  calc(): void {
    alert(this._x + this._y);
  }
}

// 利用
let cls = new Cls(1,1)
cls.calc();
cls.x = 10;
cls.y = 11;
cls.calc();
