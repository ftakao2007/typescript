// イテレータ, ジェネレータ
// ES2015で実装された

// ジェネレータ関数
function* getYieldValues() {
  for(let v of ['hoge', 'fuga', 'piyo'])
  {
    yield v;
  }
}

let it = getYieldValues();
let values: string = "";

// イテレータの利用
for (let v = it.next(); v.done == false; v = it.next()) {
  values += v.value;
}
alert(values);
