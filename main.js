// 必要な3要素：シーン,カメラ,レンダラー(＋キューブ ※今回 使用する図形)
let scene, camera, renderer, cube;

// initで初期化(three.js使用時に必須の設定)
// シーン,カメラ,レンダラー,キューブをinit関数に入れる
// ※letで宣言済の4要素はconstを書かない！
function init() {
    // シーン
    scene = new THREE.Scene();
    // シーンを用意するための特融のTHREE関数

    // カメラ
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    // カメラは'4'つ引数を取る
    // new THREE.PerspectiveCamera(視野角, アスペクト比, near, far)
    // 視野角 (fov): カメラの視野角を度数で指定。標準は45度。数字を上げると画角が引く。
    // アスペクト比: カメラの横幅と縦幅の比率を指定。通常はcanvasの幅と高さを基に計算する。
    // near: カメラからの最小描画距離。これより近いオブジェクトは描画されない。
    // far: カメラからの最大描画距離。これより遠いオブジェクトは描画されない。
    // おおよそは上記例の引数をデフォルトと認識しておく。

    // レンダラー
    renderer = new THREE.WebGLRenderer({ antialias: true });
    // WebGLRenderer：3Dオブジェクトを表現するためのもの
    // antialias(アンチエイリアス)：画像の角のギザギザをなくす。
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 画面サイズを横幅と高さに合わせる
    document.body.appendChild(renderer.domElement);
    // body要素に対して、どこに描画するか？の設定

    // ジオメトリ(ボックスのサイズ決定)
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    // ()内は幅,高さ,奥行き

    // マテリアル(材質)
    // 設定例：const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
    const texture = new THREE.TextureLoader().load("./img/wall.png");
    const material = new THREE.MeshBasicMaterial({map: texture});
    // 画像を読み込んでオブジェクトに使いたい場合の設定

    // メッシュ(ジオメトリ＋マテリアル)
    cube = new THREE.Mesh(geometry, material);
    // キューブを追加

    scene.add(cube);
    // シーンへキューブを表示

    // カメラの位置
    camera.position.z = 5;
    // デフォルトだと近すぎて見えない,設定するとカメラが引く
}

// アニメーション制御
function animate() {
    requestAnimationFrame(animate);
    // 何度も'animate'をコールバックして3Dを描画する

    cube.rotation.x += 0.01;
    // X軸を基に0.01ずつキューブ縦回転
    cube.rotation.y += 0.01;
    // y軸を追加すると縦＋横＝斜めに回転

    renderer.render(scene, camera);
}

// ウィンドウサイズを変更時、3Dオブジェクトと背景のサイズを維持
function onWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
// 上記 関数をウィンドウサイズ変更時に呼ぶ処理
window.addEventListener("resize", onWindowResize);

init();
// ここで初期化
animate();