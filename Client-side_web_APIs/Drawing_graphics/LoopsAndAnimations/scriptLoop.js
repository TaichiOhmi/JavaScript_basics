const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

ctx.translate(width/2,height/2);

function degToRad(degrees) {
    return degrees * Math.PI / 180;
  }
  
function rand(min, max) {
return Math.floor(Math.random() * (max-min+1)) + (min);
}

let length = rand(100,300);// 三角形の辺の長さ
let moveOffset = rand(0,1);// 三角形を描画するたびに移動する距離。

for (let i = 0; i < length; i++) {
    //　fillStyleを少し透明な紫のに設定。長さの値に基づいて毎回変化する。
    ctx.fillStyle = `rgba(${255-length},0,${255-length},0.9)`;
    //　Begin the path
    ctx.beginPath();
    //　ペンを(moveOffset,moveOffset)の座標に動かす。
    ctx.moveTo(moveOffset,moveOffset);
    //　(moveOffset+length,moveOffset)の座標に線を引く。これでX軸に並行な長さの線が描かれる。
    ctx.lineTo(moveOffset+length,moveOffset);
    // 三角形の高さを計算して求める。
    const triHeight = length/2 * Math.tan(degToRad(60));
    // 三角形の下向きの角に線を引く。
    ctx.lineTo(moveOffset+(length/2),moveOffset+triHeight);
    // 三角形の視点に線を引き戻す。
    ctx.lineTo(moveOffset,moveOffset);
    // 三角形を塗りつぶす。
    ctx.fill();

    //長さを減らして三角形が毎回小さくなるようにする。
    length--;
    //連続する三角形が少しずつ遠くなるようにmoveOffsetを増やす。
    moveOffset += 0.7;
    //rotate()でcanvas全体を回転。この場合は5度回転させている。
    ctx.rotate(degToRad(30));
    ctx.rotate(degToRad(45));
    ctx.rotate(degToRad(50));
    // ctx.rotate(degToRad(60));
    // ctx.rotate(degToRad(75));
    // ctx.rotate(degToRad(90));
    // ctx.rotate(degToRad(100));
    ctx.rotate(degToRad(rand(0,180)));
}