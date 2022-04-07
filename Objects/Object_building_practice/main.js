// setup canvas

const canvas = document.querySelector('canvas');
// ctx は描画していくためのコンテキストを取得し、キャンバスの描画可能領域を直接表現しており、ここに二次元の形状を書き込むことができる。
const ctx = canvas.getContext('2d');

// widthとheightをブラウザのビューポートの幅と高さと等しくする。（window.innerWidth,window.innerHeightを使う。）
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// たくさんのボールを表すのにオブジェクトを用いる。
function Ball(x, y, velX, velY, color, size){
    // x, y 座標はボールが画面のどこからスタトするか表す水平と垂直の座標。
    this.x = x;
    this.y = y;
    // velX, velYは水平と垂直方向の速度。
    this.velX = velX;
    this.velY = velY;
    // ballの色
    this.color = color;
    // ボールの大きさ。ピクセル単位の半径で表す。
    this.size = size;
}

// ボールの描画
Ball.prototype.draw = function(){// Ball Object の prototype に draw() method/functionを追加。
    // 以前定義した 2D キャンバスコンテキスト(ctx)のメンバーを順に呼び出す。
    // ボール自身が画面に自分を描画する方法を教え込みます。
    // コンテキストは紙のようなもので、ペンを使って何か描くように指示したいわけです:

    // beginPath() method を使って紙に形を描きたいと宣言
    ctx.beginPath();
    // fillStyle propertyに、形を何色にしたいかを宣言
    ctx.fillStyle = this.color;
    // arc() method を使い、紙に円弧系をなぞる。引数は x,y で中心座標、size で半径、最後の二つの引数は円弧の開始点から終了点までの角度を円の中心角で指定。ここでは 0度から 2 * PI、これはラジアンで表わした 360度に相当します(ややこしいですがラジアンで指定しなければなりません)。
    // これで一周した円を描けます。もし 1 * PI までしか指定しなければ、半円(180度)になるでしょう。
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    // fill() method では beginPath() から描き始めた線描を終了し、書いた領域をfillStyle で指定した color で塗り潰せと指示。
    ctx.fill();
}


// console
// let testBall = new Ball(50, 100, 4, 4, 'blue', 10);
// testBall > Ball {x: 50, y: 100, velX: 4, velY: 4, color: 'blue', …}
// testBall.x > 50
// testBall.size > 10
// testBall.color > 'blue'
// testBall.draw() > キャンバスのどこかにボールが表示される。



// ボールのデータの更新
    // ボールを表示することはできたが、移動させるには更新するための関数が必要。
// Ball の prototype に update method/function を追加。
Ball.prototype.update = function() {

    // ボールの右端(x座標 - 半径)がキャンバスの右端から飛び出そうとしたら、
    if ((this.x + this.size) >= width) { // x座標(円の中心) + 半径 が width 以上か
        this.velX = -(this.velX);// velX を 逆向きに
    }
    // ボールの左端(x座標 - 半径)がキャンバスの左端から飛び出そうとしたら、
    if ((this.x - this.size) <= 0) { // x座標(円の中心) - 半径 が 0 以下か
        this.velX = -(this.velX); // velX を逆向きに
    }
    // ボールの下端(y座標 + 半径)がキャンバスの下端から飛び出そうとしたら、
    if ((this.y + this.size) >= height) { // y座標(円の中心) + 半径 が高さ以上か
        this.velY = -(this.velY); // velY を逆向きに
    }
    
    if ((this.y - this.size) <= 0) { // y座標(円の中心) - 0 以下か
        this.velY = -(this.velY); // velY を逆向きに
    }
    
    // velX を x座標に, velY を y座標に加算。→呼ばれるごとにボールが移動する。
    this.x += this.velX;
    this.y += this.velY;
}


// 衝突判定の追加
Ball.prototype.collisionDetect = function() {
    // それぞれのボールで、他のボールそれぞれとこのボールが衝突していないか調べなければなりません。そのために、balls[]配列すべてのボールを回すために別の for ループを始めます。
    for (let j = 0; j < balls.length; j++) {
        // if文でループで回しているボールがチェックしているボールと同じか調べています。
        // ボールがそれ自体とぶつかっているかチェックしたくないですから! このため、現在のボール(collisionDetect メソッドが実行されているボールです)がループ中のボール(現在の collisionDetect メソッド内のループのくりかえし中で参照されているボール)と一致しているかチェックします。!を使って等価性チェックを逆にしているので、if 文の中のコードはボールが同じでないときだけ実行されます。
        if (!(this === balls[j])) {
            // 衝突判定
            // このアルゴリズムは、2つの円の中心点を取り、その中心点間の距離が2つの半径を足したものより小さいことを確認することで動作します。
            const dx = this.x - balls[j].x; // 2つの円のx方向の距離(二つの円の中心のx軸方向の距離)
            const dy = this.y - balls[j].y; // 2つの円のy方向の距離(二つの円の中心のy軸方向の距離)
            const distance = Math.sqrt(dx * dx + dy * dy); // 中心点間の距離

            // もし、２つの円の半径を足したものよりも、中心点間の距離が小さければ、
            if (distance < this.size + balls[j].size) {
                // ボールのカラーをランダムな新しい色に設定する。
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
            }
        }
    }
}




// ボールのアニメーション

let balls = [];

// balls 配列の長さが 25 未満の間、繰り返す。
while (balls.length < 25) {
    // size を 10~20 の間でランダムに定義。
    let size = random(10,20);
    // ball インスタンスを作成l
    let ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors

        // x座標
        random(0 + size,width - size),// 10~20のランダムな数値である size から、幅 - size の間でランダムな数値
        // y座標
        random(0 + size,height - size),// 10~20のランダムな数値である size から、高さ - size の間でランダムな数値
        // x方向の速度
        random(-7,7),
        // y方向の速度
        random(-7,7),
        // color
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        // ball size
        size
    );

    // balls 配列 に　ball Object を追加。
    balls.push(ball);
}


function loop() {
    
    // キャンバスの塗り潰し色を半透明の黒にし、
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    
    // その色でキャンバスの幅と高さいっぱいの長方形を fillRect() で描きます(これの 4 つの引数は始点の座標と、描画する長方形の幅と高さになります)。これで次のフレームを描く前に、前のフレームで描いた内容を見えなくします。これをしないと、ボールじゃなくて長い蛇がキャンバスの中を這い回る様を見る事になります! 塗り潰す色は半透明の rgba(0,0,0,0.25) なので、以前の何フレーム分かがかすかに残り、ボールが移動した後の軌跡を表現します。もし 0.25 を 1 に変更すると、軌跡は全く見えなくなります。この値を変えて、どんな効果になるか見てみてください。
    ctx.fillRect(0, 0, width, height);
  
    // balls 配列 の数だけ繰り返し、それぞれで描画と更新を繰り返す。
    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  
    // このloop関数を requestAnimationFrame() メソッドを使って再実行します
    // — このメソッドが繰り返し実行され同じ関数名を与えられると、その関数がスムースなアニメーションを行なうために毎秒設定された回数実行されます。
    // これはたいてい再帰的に行われます — つまり関数は毎回その関数自身を呼び出すので、何度も何度も繰り返し実行されます。
    requestAnimationFrame(loop);
}


loop();