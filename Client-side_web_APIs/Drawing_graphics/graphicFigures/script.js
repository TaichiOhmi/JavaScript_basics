const canvas = document.querySelector('.myCanvas');
// 複数の等号を使用して割り当てを連鎖できる。
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 最後にキャンバスに描画するには、コンテキストと呼ばれる描画領域への特別な参照を取得する必要があり、HTMLCanvasElement.getContext()を使い、取得するコンテキストのタイプを表すパラメーターとして単一の文字列を取る
const ctx = canvas.getContext('2d');

// 背景を黒にする
ctx.fillStyle = 'rgb(0, 0, 0)'; // rgbで黒を指定
ctx.fillRect(0, 0, width, height);// fillRectを使ってキャンバスの全領域をカバーするrectangleを描写。引数は最初の0,0が左隅、width,heightで右下隅

ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(50, 50, 100, 150);

// semi-transparent graphics
ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
ctx.fillRect(25, 100, 175, 50);

ctx.fillStyle = 'rgba(100, 200, 230, 0.5)';
ctx.fillRect(100, 100, 100, 100);

ctx.fillStyle = 'rgba(200, 100, 230, 0.5)';
ctx.fillRect(100, 100, 300, 480);

ctx.fillStyle = 'rgba(30, 100, 0, 0.5)';
ctx.fillRect(300, 200, 500, 500);


ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);



//Drawing paths

ctx.fillStyle = 'rgba(25, 61, 221, 0.5)';

// ペンが現在キャンバス上にあるポイントからパスの描画を開始します。新しいキャンバスでは、ペンは（0、0）から始まります。
ctx.beginPath();

// 線を記録したりトレースしたりせずに、ペンをキャンバス上の別のポイントに移動します。ペンは新しい位置に「ジャンプ」します。
ctx.moveTo(0, 300);  // Begin first sub-path
ctx.lineTo(200, 50);
ctx.moveTo(50, 90);   // Begin second sub-path
ctx.lineTo(280, 120);

// これまでに描いたパスに沿ってストロークを描いて、輪郭の形を描きます。
ctx.stroke();

// draw your path
ctx.rect(500, 0, 150, 100);

//これまでにトレースしたパスを塗りつぶして、塗りつぶされた形状を描画します。
ctx.fill();


//度の値をラジアンに変換する関数。
function degToRad(degrees){
    return degrees*Math.PI/180;
}


//Drawing lines
ctx.fillStyle = 'rgba(255, 155, ,100, 0.2)'; // set a color
ctx.beginPath(); // start drawing a path
ctx.moveTo(250, 250);// move the pen

ctx.lineTo(150, 250);// draw a line : パスはx軸に沿って右に100ピクセル移動する。

// 正三角形の高さを計算
const triHeight = 50 * Math.tan(degToRad(60));// 隣接する長さに角度の接線を掛けたものが反対に等しいことを示している。Math.tan（）はラジアン単位の入力値を想定しているため、degToRad（）関数を使用して60度をラジアンに変換。

ctx.lineTo(200, 250 + triHeight);// xはシンプルで前に設定した 2 つの X 値の中間の値です。一方 Y の値は、三角形の頂点がキャンバスの頂点から 50 ピクセルであることが分かっているため、50 に三角形の高さを足した値でなければなりません。

ctx.lineTo(250, 250);//三角形の始点に線を引き戻す
ctx.fill(); // パスを終了し、図形を塗りつぶす。

// Hypotenuse is the longest side: 斜辺 
// The height of the triangle is the side opposite the 60 degree angle. : 60度の角度に対向する辺を対辺といい、計算したい三角形の高さになります




//Drawing circles
ctx.fillStyle = 'rgb(0, 170, 255)';
ctx.beginPath();
// arc() は 6つの引数を取る。最初の二つは xとy座標をそれぞれとり、3つ目は円の半径、４つ目と５つ目は円を描く開始角度と終了角度(つまり、0度と360度を指定すれば完全な円になる)、6つ目は円の描画を反時計回りか時計回りのどちらにするかを定義(falseが時計周り)。
ctx.arc(300, 300, 50, degToRad(0), degToRad(360), false);
ctx.fill();


ctx.fillStyle = 'yellow';
ctx.beginPath();
// the arc is specified as starting at -45 degrees and ending at 45 degrees
ctx.arc(350, 300, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(350, 300);
ctx.fill();
