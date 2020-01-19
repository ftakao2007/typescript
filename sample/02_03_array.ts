// string配列
let arr1: string[] = ['hoge', 'fuga', 'piyo'];

// number配列
let arr2: Array<number> = [1,2,3];
let arr3 = [4,5,6];

// any配列
let arr4 =[];

alert(arr1[0]);
alert(arr1);
alert(arr2);
alert(arr3);
alert(arr4);

//pushメソッド
arr1.push('boo');
alert(arr1);

//unshiftメソッド
arr1.unshift('xxx');
alert(arr1);

//reverseメソッド
alert(arr1.reverse());
