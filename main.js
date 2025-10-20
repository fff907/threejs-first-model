// 必要な3要素：シーン,カメラ,テレビ＝レンダラー

// シーン
const scene = new THREE.Scene();
// シーンを用意するための特融のTHREE関数

// カメラ
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
// カメラは'4'つ引数を取る
// new THREE.PerspectiveCamera(視野角, アスペクト比, near, far)
// 視野角 (fov): カメラの視野角を度数で指定。標準は45度。
// アスペクト比: カメラの横幅と縦幅の比率を指定。通常はcanvasの幅と高さを基に計算する。
// near: カメラからの最小描画距離。これより近いオブジェクトは描画されない。
// far: カメラからの最大描画距離。これより遠いオブジェクトは描画されない。
// おおよそは上記例の引数をデフォルトと認識しておく。

// レンダラー
const renderer = new THREE.WebGLRenderer();
// WebGLRenderer：3Dオブジェクトを表現するためのもの
renderer.setSize(window.innerWidth, window.innerHeight);
// 画面サイズを横幅と高さに合わせる
document.body.appendChild(renderer.DOMElement);
// body要素に対して、どこに描画するか？の設定

// ボックスのサイズ決定、メッシュ
const geometry = new THREE.BOXGeometry(2, 2, 2);
// ()内は幅,高さ,奥行き

// マテリアル(材質)
const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
