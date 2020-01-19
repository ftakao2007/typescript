// 列挙型
// JavaScriptにはない
// 値を指定しない場合は0スタート
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
alert(Color.RED); // 0
alert(Color.GREEN); // 1
alert(Color.BLUE); // 2
// 初期値を指定するとそこからスタート
var Color2;
(function (Color2) {
    Color2[Color2["RED"] = 13] = "RED";
    Color2[Color2["GREEN"] = 14] = "GREEN";
    Color2[Color2["BLUE"] = 15] = "BLUE";
})(Color2 || (Color2 = {}));
alert(Color2.RED); // 13
alert(Color2.GREEN); // 14
alert(Color2.BLUE); // 15
// 全てに値を設定もできる
var Color3;
(function (Color3) {
    Color3[Color3["RED"] = 23] = "RED";
    Color3[Color3["GREEN"] = 87] = "GREEN";
    Color3[Color3["BLUE"] = 125] = "BLUE";
})(Color3 || (Color3 = {}));
alert(Color3.RED); // 23
alert(Color3.GREEN); // 87
alert(Color3.BLUE); // 125
