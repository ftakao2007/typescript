// 型アサーション
//
// 厳密には異なるがキャストのようなもの
// -> コンパイラにこの変数はこの型として振舞いますと明示するような仕組み
// 山かっこ「<>」を使う構文とasを使う構文の二種類がある
var val1 = 'abc';
var len1 = val1.length;
alert(len1);
var val2 = 'あいうえお';
var len2 = val2.length;
alert(len2);
