// 関数のオーバーロード
//
// 同名の関数を複数宣言した上で実装は一つの関数で行う
// 引数や戻り値のデータ型を関数宣言と矛盾しないようにする

// オーバーロードする関数の宣言
function func(x: string): string;
function func(x: number, y: number): number;
function func(x: boolean): void;

// オーバーロードされた関数の実装
function func(x: any, y?: number): any {
  if(typeof x === 'string') {
    return `${x}!`
  } else if(typeof x === 'number') {
    return x + (y === undefined ? 1 : y);
  } else {
    if(x) alert('fuga');
  }
}

alert(func('hoge'));
//alert(func(100,null));
alert(func(1,2));
//alert(func(true));
func(true);


