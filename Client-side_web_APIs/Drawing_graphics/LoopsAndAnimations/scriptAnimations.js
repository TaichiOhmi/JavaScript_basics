const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

ctx.translate(width/2, height/2);

const image = new Image();
image.src = 'walk-right.png';
image.onload = draw;

let sprite = 0;
let posX = 0;

//このシートには 6 つのスプライトが含まれており、それぞれが幅 102 ピクセル、高さ 148 ピクセルで、歩行シーンを構成しています。
//各スプライトをきれいに表示するには、上記の Firefox のロゴのように drawImage() を使ってスプライトシートから一つのスプライト画像を切り出し、その部分のみを表示する必要があります。
//スライスの X 座標は 102 の倍数でなければならず、Y 座標は常に 0 でなければなりません。

function draw(){
  //clear the canvas to prepare for drawing each frame.
  ctx.fillRect(-(width/2), -(height/2), width, height);//前に原点位置をwidth/2、height / 2として指定したため、長方形の左上隅を-（width / 2）、-（height / 2）として指定する必要がある。

  //draw our image using drawImage
  ctx.drawImage(image, (sprite*102), 0, 102, 148, 0+posX, -74, 102, 148);
  // 埋め込む画像にはimageを指定
  // パラメータ２、３は元画像から切り出すスライスの左上隅を指定。x値はspriteに102をかけた値。y値は常に0.
  // パラメータ４、５は切り出すスライスの大きさ(102ピクセル,148ピクセル)
  // パラメータ６、７はcanvas上にスライスを描画するボックスの左上隅を指定。x一は0+posX,posXの変更で描画位置を変更する。
  // パラメータ８、９はcanvas上の画像の大きさを指定。元の大きさを維持したいので、幅と高さは102と148。


  //各描画の後にスプライト値を変更。 draw（）関数の下部に次のブロックを追加します。
  //（requestAnimationFrame()では、可能であれば1秒間に最大60フレームで呼び出します）。フレームレートを意図的に遅くしているのは、扱うスプライトが6つしかないためで、60分の1秒ごとに1つ表示すると、キャラクターの動きが速くなりすぎてしまいます。
  if (posX % 13 === 0) {//13フレームごとにスプライトを更新、およそ1秒間に5フレーム程度
    if (sprite === 5) {
      sprite = 0;
    } else {
      sprite++;
    }
  }

  //各フレームのposX値を変更する
  if(posX > width/2) {//posXの値がwidth/2より大きくなったら、（キャラクターがスクリーンの右端からはみ出したら、）
    //　キャラクターがスクリーンの左側に来るように計算する。
    let newStartPos = -((width/2) + 102);
    posX = Math.ceil(newStartPos);
    console.log(posX);
  } else {
    //　posXを２だけ増加させ、次に描くときに少し右に移動させる。
    posX += 2;
  }

  // make the animation loop by calling requestAnimationFrame()
  window.requestAnimationFrame(draw);
}