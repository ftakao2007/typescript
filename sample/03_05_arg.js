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
function func1(x) {
    if (x === void 0) { x = 2; }
    return x + 5;
}
alert(func1());
alert(func1(5));
// オプション引数
function func2(x) {
    return 2 * (x === undefined ? 1 : x);
}
alert(func2());
alert(func2(5));
// 可変長引数
function func3() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var res = 0;
    x.forEach(function (i) {
        res += i;
    });
    return res;
}
alert(func3());
alert(func3(1, 3, 5));
