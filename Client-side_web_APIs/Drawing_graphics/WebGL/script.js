const scene = new THREE.Scene(); // https://threejs.org/docs/index.html#api/en/scenes/Scene

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera
/*
The PerspectiveCamera() constructor takes four arguments:
- The field of view: 視野のこと。カメラの遠方で画面上に見える範囲の広さを度数で表す。
- The aspect ratio: アスペクト比。シーンの幅をシーンの高さで割った比率。他の値を使用するとシーンが歪む。
- The near plane: ニアプレーン。オブジェクトの画面へのレンダリングを停止する前に、カメラにどれだけ近づくことができるかを指定。指先を目と目の間に近つけていくと見えなくなることを思い浮かべるとイメージしやすい。
- The far plane: ファープレーン。レンダリングされなくなるまでの、カメラからの距離。
*/

//カメラの位置をZ軸から5距離単位に設定
camera.position.z = 5;


//レンダラー。特定のカメラを通して見たときに、特定のシーンをレンダリングするオブジェクト
const renderer = new THREE.WebGLRenderer();//新しいレンダラーを作成
renderer.setSize(window.innerWidth, window.innerHeight);//レンダラーがカメラビューを描画するサイズを設定
document.body.appendChild(renderer.domElement);//bodyにレンダラーが作ったcanvas要素を追加。



//create the cube we'll display on the canvas

// グローバル変数:cubeを作成
let cube;

// 新しいTextureLoaderオブジェクトを作成
const loader = new THREE.TextureLoader();

// TextureLoaderオブジェクトを作成し, load()を呼び出す。
loader
// texture プロパティ を使用して立方体の全ての側面を囲む 2×2 の画像の繰り返しを指定。
.load('metal003.png', texture => {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);

  //新しい BoxGeometry オブジェクト
  const geometry = new THREE.BoxGeometry(2.4,2.4,2.4);
  //新しい MeshLambertMaterial オブジェクト
  const material = new THREE.MeshLambertMaterial( { map: texture } );

  //上の２つのオブジェクトをMeshでまとめて立方体を作成。オブジェクトは通常、ジオメトリ（どのような形状か）とマテリアル（表面がどのように見えるか）を必要とします。
  cube = new THREE.Mesh(geometry, material);
  // 立方体をシーンに追加
  scene.add(cube);

  // draw()を呼び出してアニメーション開始
  draw();
});

//AmbientLightオブジェクトは、外にいるときの太陽のように、シーン全体を少し明るくする一種のソフトライトです。
const light = new THREE.AmbientLight('rgb(255,255,255)'); // soft white light
scene.add(light);

//一方、SpotLightオブジェクトは、懐中電灯/トーチ（または実際にはスポットライト）のような指向性の光線です。
const spotLight = new THREE.SpotLight('rgb(255,255,255)');
spotLight.position.set( 100, 1000, 1000 );
spotLight.castShadow = true;
scene.add(spotLight);

//各フレームで、立方体をX軸とY軸を中心にわずかに回転させ、カメラから見たシーンをレンダリングし、最後にrequestAnimationFrame（）を呼び出して、次のフレームの描画をスケジュールします。
function draw() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);

    requestAnimationFrame(draw);
}


// Three.js Video Cube: https://mdn.github.io/learning-area/javascript/apis/drawing-graphics/threejs-video-cube/