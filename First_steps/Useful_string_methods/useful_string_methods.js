// オブジェクトとしての文字列

// JavaScriptではほとんどがオブジェクト
let string = 'This is my string'; // これもオブジェクト
// この変数は文字列オブジェクトのインスタンスになっていて、大量のプロパティとメソッドが使用可能。
// String オブジェクトのページに行って、横にある一覧を眺めてみてください！ 
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String


// 文字列の長さを調べる。lengthプロパティ
let browserType = 'mozilla';
browserType.length;

// 特定の文字列を扱う
browserType[0]; // m

browserType[browserType.length-1]; // a (最後の文字。0から始まるから−１が必要。)


//部分文字列を探して抽出する
browserType.indexOf('zilla'); // 2, 文字列中のどこに引数の文字列が含まれているかを返す。見つからなかった場合は、-1 の値を返す。

if(browserType.indexOf('mozilla') === -1) {
    // もし部分文字列 'mozilla' が含まれていない場合は、
    // 文字列で何かをします。
  }
  
if(browserType.indexOf('mozilla') !== -1) {
    // もし部分文字列 'mozilla' が含まれている場合は、
    // 文字列で何かをします。
  }

// 部分文字列がその文字列のどこから始まるかが分かっており、どこで終わっているかがわかれば、その部分文字列を slice() メソッドで抽出できる。
browserType.slice(0,3); //このコードは "moz" という文字列を返す。
// 最初の引数は抽出を始める最初の位置で、2番目の引数が抽出する最後の文字の直後の位置。
// つまり、この場合先頭から 4番目の手前までの文字列が切り出されたということです。言い換えると、この場合は 2番目の引数と同じ 3文字が切り出されました。

// ある文字以降の文字列の残りの文字をすべて抽出したいとわかっている場合は、2番目のパラメータを含める必要はありません！
// その代わり、文字列内の残りの文字を抽出したい文字の位置を含める必要があるだけです。次のようにしてみてください。
browserType.slice(2); // 'zilla' mozilla の 2以上(3文字目から最後まで)


// 大文字・小文字の切り替え
let radData = 'My NaMe Is MuD';
radData.toLowerCase(); // 'my name is mud'
radData.toUpperCase(); // 'My NaMe Is MuD'

// 文字列の一部分を書き換える
browserType.replace('moz','van'); // 'vanilla'
// コンソールで"vanilla"を返しますが、browserType の値は、"mozilla"のままです。
// プログラムで変数 browserType の値を実際に更新するには、演算の結果を変数に設定し直す必要があります。
// つまりそれ変数に設定されている部分文字列を自動的には更新してくれないのです。
// 従って実際に変数の内容を更新するためには browserType = browserType.replace('moz','van'); のように書きます。


const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  if (greetings[i].indexOf('Christmas') !== -1) {
    let listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
  }
}


const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  input = input.toLowerCase();
  f = input[0];
  input = f.toUpperCase()+input.slice(1);
  let result = input;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}


const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  let input = stations[i];

  f3 = input.slice(0,3);
  semIndex = input.indexOf(';');
  stationName = input.slice(semIndex+1);
  input = `${f3}: ${stationName}`;
  let result = input;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
