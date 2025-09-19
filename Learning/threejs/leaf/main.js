import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ✅ Step 1: Create leaf outline with Bezier curves
const leafShape = new THREE.Shape();
leafShape.moveTo(0, 0);
// leafShape.bezierCurveTo(2, 4, 4, 6, 0, 10);
// leafShape.bezierCurveTo(-4, 6, -2, 4, 0, 0);
leafShape.bezierCurveTo(1, 4, 2, 6, 0, 6);   // right side curve
// leafShape.bezierCurveTo(-2, 4, -1, 2, 0, 0); // left side curve

const extrudeSettings = {
  depth: 0.2,       // how "thick" to extrude
  bevelEnabled: false, // no rounded edges (keep it flat like paper)
  curveSegments: 32, // how many slices along depth
  steps: 1 // smoothness of the curve outline
};

// ✅ Step 2: Convert shape into BufferGeometry
// const geometry = new THREE.ShapeGeometry(leafShape, 400);
const geometry = new THREE.ExtrudeGeometry(leafShape, extrudeSettings);

// ✅ Step 3: Bend it (edit position attribute)
const positionAttr = geometry.attributes.position;
for (let i = 0; i < positionAttr.count; i++) {
  const x = positionAttr.getX(i);
  const y = positionAttr.getY(i);
  const z = Math.sin(y * 0.5) * 0.3; // bend along Y axis
  positionAttr.setXYZ(i, x, y, z);
}

// ✅ Step 4: Material
const material = new THREE.MeshPhongMaterial({
  color: 0x228B22, // forest green
  side: THREE.DoubleSide,
  flatShading: true,
});

const leaf = new THREE.Mesh(geometry, material);
scene.add(leaf);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// Camera position
camera.position.z = 10;

// Animate
function animate() {
  requestAnimationFrame(animate);
//   leaf.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

function makeDot(x, y, color = 0xff0000) {
  const geometry = new THREE.CircleGeometry(0.3, 16); // tiny circle
  const material = new THREE.MeshBasicMaterial({ color });
  const dot = new THREE.Mesh(geometry, material);
  dot.position.set(x, y, 0);
    camera.position.z = 15;
  scene.add(dot);
}

// makeDot(0, 0, 0x00ff00);  // start point = green
// makeDot(1, 4, 0x0000ff);  // cp1 = blue
// makeDot(2, 6, 0x0000ff);  // cp2 = blue
// makeDot(0, 6, 0xffff00); // end point = yellow