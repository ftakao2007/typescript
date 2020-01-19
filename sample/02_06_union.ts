// ユニオン(共用体)
// 指定したいずれかの型としてふるまう
// 名前: [型1, 型2, ... ] の書式で宣言
// 例) ユーザーIDは文字列でも数字でも可としたい

let userId: number | string;
userId = 100;
alert(userId);
userId = 'hoge';
alert(userId);

// typeof関数で型を調べる
if(typeof(userId) == 'string') {
  alert('string');
} else if(typeof(userId) == 'number') {
  alert('number');
  } else {
  alert('other');
}

  

