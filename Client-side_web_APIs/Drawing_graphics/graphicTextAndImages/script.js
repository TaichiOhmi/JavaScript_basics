const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);



/*  drawing text
text is drawn using two methods:
    fillText() - draws filled text
    strokeText() - draws outline (stroke) text.

両方とも、基本的な使用法で3つのプロパティを取ります。
描画するテキスト文字列と、テキストの描画を開始するポイントのX座標とY座標です。
これは、テキストボックスの左下隅として機能します
*/

ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
ctx.font = '36px arial';
ctx.strokeText('Canvas text', 50, 50);// text, x, y

ctx.fillStyle = 'red';
ctx.font = '48px georgia';
ctx.fillText('Canvas text', 50, 130);




/* drawing images

Images are drawn onto canvas using the drawImage() method.
the simplest version takes three parameters - a reference to the image you want to render, and the X and Y coordinates of the image's top left corner.

*/

// create a new HTMLImageElement using the Image() constructor.
const image = new Image();
image.src = 'Mt_Fuji.png';

image.addEventListener('load', () => ctx.drawImage(image, 0, 0, 1548, 1548, 50, 180, 200, 200));

/*
The first parameter is the image reference, as before.
Parameteres 2 and 3 define the coodinates of the top left corner of the area you want to cut out of the loaded image, relative to the top-left corner of the image itself. Nothing to the left of the first parameter or above the second will be drawn.
Parameters 4 and 5 define the width and height of the area we want to cut out from the original image we loaded.
Parameters 6 and 7 define the coordinates at which you want to draw the top-left corner of the cut-out portion of the image, relative to the top-left corner of the canvas.
Parameters 8 and 9 define the width and height to draw the cut-out area of the image. In this case, we have specified the same dimensions as the original slice, but you could resize it by specifying different values.

最初のパラメータは、前と同じくイメージの参照先。
パラメータ2と3は、写真の左上隅を基準にどこから表示したいかの座標
パラメータ4と5は、写真の左上隅を基準にどこまで表示したいか高さと幅。
パラメータ6と7は、canvasの左上隅を基準にどこに描画するか
パラメータ8と9は、パラメータ2,3,4,5で切り出した画像を描画するための高さと幅

*/


const image2 = new Image();
image2.src = 'Mt_Fuji.png';

image2.addEventListener('load', () => ctx.drawImage(image2, 0, 0, 1548, 1548, 320, 25, 350, 350));