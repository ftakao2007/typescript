// 列挙型
// JavaScriptにはない

// 値を指定しない場合は0スタート
enum Color{
  RED,
  GREEN,
  BLUE
}

alert(Color.RED);   // 0
alert(Color.GREEN); // 1
alert(Color.BLUE);  // 2

// 初期値を指定するとそこからスタート
enum Color2{
  RED = 13,
  GREEN,
  BLUE
}

alert(Color2.RED);   // 13
alert(Color2.GREEN); // 14
alert(Color2.BLUE);  // 15

// 全てに値を設定もできる
enum Color3{
  RED = 23,
  GREEN = 87,
  BLUE = 125
}

alert(Color3.RED);   // 23
alert(Color3.GREEN); // 87
alert(Color3.BLUE);  // 125
