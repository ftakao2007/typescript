// 型アサーション
//
// 厳密には異なるがキャストのようなもの
// -> コンパイラにこの変数はこの型として振舞いますと明示するような仕組み
// 山かっこ「<>」を使う構文とasを使う構文の二種類がある

let val1: any = 'abc';
let len1: number = (<string>val1).length;
alert(len1)

let val2: any = 'あいうえお';
let len2: number = (val2 as string).length;
alert(len2)
