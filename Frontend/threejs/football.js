// Canvas select karo
const canvas = document.querySelector("#myfootball");

// 1. Scene
const scene = new THREE.Scene();   
// 2. Camera
const camera = new THREE.PerspectiveCamera(   // ✅ "PerspectiveCamera" ka P aur C bada
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ canvas }); // ✅ 
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(1, 36, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true 
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Camera thoda peeche
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.02; 

  renderer.render(scene, camera);
}

animate();
