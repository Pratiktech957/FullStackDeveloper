const scene = new THREE.Scene();


const canvas = document.querySelector("#shadow")

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.set(0,3,6);


const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;



const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2; // flat horizontal
plane.receiveShadow = true; // ✅ shadow receive karega
scene.add(plane);


// Sphere (ball)
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.y = 1; // ground ke upar
sphere.castShadow = true; // ✅ shadow banayega
scene.add(sphere);


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
light.castShadow = true; // ✅ shadow throw karega
scene.add(light);


// Helper (light dikhega)
const helper = new THREE.DirectionalLightHelper(light, 2);
scene.add(helper);

// Animate
function animate() {
  requestAnimationFrame(animate);

  // sphere ghoomta rahe
  sphere.rotation.y += 0.02;

  renderer.render(scene, camera);
}

animate();