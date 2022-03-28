function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'ボタンが押されました!';
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll('button');
  
  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }


/*
function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'ボタンが押されました！';
  document.body.appendChild(para);
  }
<button onclick="createParagraph()">押してください</button>

上記のような書き方もできるが、HTMLを汚すし、適用したいボタン全てに書かないといけないから非効率。
*/


/*
 Javascript で DOM を操作するとき、何かをしようとするHTMLの前にJavascriptが読み込まれてしまうと、うまく動かない。
 そのため、いくつかの方法でそれを回避することができる。


 ~~HTML内部に書くときの例~~

 document.addEventListener("DOMContentLoaded", function() {
  ...
 });

 例えば、 "DOMContentLoaded" は イベントをリッスンする(イベントが起きた時に動く)イベントリスナーの種類（引数)の一つで、HTML body が完全に読み込まれてから動く。このブロック内の JavaScript はそのイベントが発生するまで実行されないため、エラーを回避できる。


~~外部に書くときの例~~

defer 属性を使用して, <script> 要素に達した後も HTML コンテンツのダウンロードを続行するようブラウザーに指示することで解決する。


*/

/*
async と defer

async 属性を使うと、ページのレンダリングをブロックせずにスクリプトをダウンロードし、スクリプトのダウンロードが終了すると直ちに実行する。
複数のスクリプトが特定の順序で実行されるという保証はありませんが、ページの残りの部分の表示を停止することはありません。
ページ内のスクリプトが互いに独立して実行され、ページ上の他のスクリプトに依存しない場合は、async を使用することをお勧めします。

つまり、

<script async src="js/vendor/jquery.js"></script>
<script async src="js/script2.js"></script>
<script async src="js/script3.js"></script>

と並んでいる時、スクリプトが読み込まれる順序に依存することはできないので、jquery.js は script2.js と script3.js に前後して読み込まれる。
この場合、jquery に依存する2,3のスクリプトの関数は、スクリプトの実行時に jquery が定義されないため、エラーを生成します。

もし、読み込むバックグラウンドスクリプトがいくつもあって、それらをできるだけ早く実行したい場合には async を使用するべきです。
例えば、ゲームを実際に開始するときに必要になるいくつかのロードすべきゲームデータファイルがあるとして、今のところは、スクリプトのロードによってブロックされずに、ゲームのイントロ、タイトル、ロビーを表示したいだけ、という場合です。


defer 属性つきのスクリプトは、ページに現れた順序でスクリプトを実行し、スクリプトとコンテンツがダウンロードされるとすぐにスクリプトを実行します。

<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>

defer 属性を持つすべてのスクリプトは、ページに現れた順序で読み込まれるため、
2番目の例では、jquery.js が script2.js と script3.js の前に読み込まれ、さらに、script2.js, script3.js の順で読み込まれる。
ページコンテンツがすべて読み込まれるまでは、実行しないので、スクリプトが DOM配置に依存している場合に便利です(例: ページの要素を変更する場合)


まとめ
async と defer の両方とも、ページのその他の部分 (DOM など) がダウンロード中な時でも、ブラウザーにスクリプトを別々のスレッドでダウンロードするよう指示するので、ページ読み込みはスクリプトでブロックされません。

依存関係なしでスクリプトを単独ですぐに実行できる場合は、async 
スクリプトが他のスクリプトや DOM配置に依存している場合は、defer

を使用してスクリプトを読み込み、対応する <script> 要素をブラウザーで実行して欲しい順序で配置します。
*/

