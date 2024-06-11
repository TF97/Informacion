// // Obtener la imagen
// const image = document.querySelector('.cajas1 img');

// // Agregar un evento de clic
// image.addEventListener('click', () => {
//     image.classList.toggle('enlarge');
// });

// // // Crear un objeto loader para cargar el modelo OBJ
// // var loader = new THREE.OBJLoader();

// // // Cargar el modelo OBJ y añadirlo a la escena
// // loader.load('/objetos/X-WINGModelo.obj', function (object) {
// //     scene.add(object);
// // });
// // // Importar OrbitControls desde Three.js


// // // Crear los controles de órbita para rotar y hacer zoom en la escena
// // var controls = new OrbitControls(camera, renderer.domElement);
// // controls.enableDamping = true; // Habilitar amortiguación para movimientos suaves
// // controls.dampingFactor = 0.25; // Factor de amortiguación para la suavidad del movimiento


// // // Crear un objeto loader para cargar el modelo OBJ
// // var loader = new THREE.OBJLoader();

// // // Cargar el modelo OBJ y añadirlo a la escena
// // loader.load('/objetos/X-WINGModelo.obj', function (object) {
// //     scene.add(object);
// // });

// // Inicializar el motor de Babylon.js
// var canvas = document.getElementById('renderCanvas');
// var engine = new BABYLON.Engine(canvas, true);

// // Crear una escena
// var createScene = function () {
//     var scene = new BABYLON.Scene(engine);

//     // Crear una cámara
//     var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 0, -10), scene);

//     // Crear una luz
//     var light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

//     // Cargar y mostrar el modelo 3D .obj
//     BABYLON.SceneLoader.ImportMesh('', '/objetos/', 'X-WINGModelo.obj', scene, function (meshes) {
//         // Hacer algo con los meshes si es necesario
//     });

//     return scene;
// };

// // Crear la escena
// var scene = createScene();

// // Ejecutar el bucle de renderizado
// engine.runRenderLoop(function () {
//     scene.render();
// });

// // Manejar el redimensionamiento de la ventana
// window.addEventListener('resize', function () {
//     engine.resize();
// });
