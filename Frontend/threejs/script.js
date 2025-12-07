// 1. Scene
const scene = new THREE.Scene();
const canvas = document.getElementById("myCanvas");


// 2. Camera
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 3. Renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);


// 4. Cube banao
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff000 }); // red cube
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Camera ko thoda peeche le jao
camera.position.z = 6;

// 5. Animate function
function animate() {
  requestAnimationFrame(animate);

  // cube ghoomta rahe
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
