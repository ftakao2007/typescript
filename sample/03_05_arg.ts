// 引数
//
// 通常引数
//   名前: データ型
// デフォルト値付き引数
//   名前: データ型 = デフォルト値
// オプション引数
//   名前?: データ型 = デフォルト値
// 可変長引数
//   ...名前: データ型[]
//   先頭に「...」をつけることでデータ型を配列にする

// デフォルト値付き引数
function func1(x: number = 2): number {

  return x + 5;
}
alert(func1());
alert(func1(5));

// オプション引数
function func2(x?: number): number {
  return 2 * (x === undefined ? 1 : x);
} 
alert(func2());
alert(func2(5));

// 可変長引数
function func3(...x: number[]): number{
  let res: number = 0;
  x.forEach((i: number): void => {
    res += i;
  });
  return res;
}
alert(func3());
alert(func3(1,3,5));

