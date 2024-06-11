import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Crear la escena
const scene = new THREE.Scene();

// Configurar la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5); // Ajustar la posición de la cámara
camera.lookAt(0, 0, 0); // Apuntar la cámara al centro de la escena

// Configurar el renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Añadir luces
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5).normalize();
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040); // Luz ambiental
scene.add(ambientLight);

// Cargar el modelo GLB
const loader = new GLTFLoader();
loader.load('/objetos/BB81997.glb', function (gltf) {
  console.log('Model loaded:', gltf);
  const model = gltf.scene;
  model.scale.set(1, 1, 1); // Ajustar la escala si es necesario
  model.position.set(0, 0, 0); // Asegúrate de que el modelo esté en el centro
  scene.add(model);
  renderer.render(scene, camera);
}, undefined, function (error) {
  console.error('Error loading model:', error);
});

// Añadir un cubo básico para depuración
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animar la escena
const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();

// Asegurarse de que la ventana se redimensiona correctamente
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

