import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
camera.position.set(0,0,100);
camera.lookAt(0, 0, 0);

const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 8); // radiusTop, radiusBottom, height, radialSegments
const stemMaterial = new THREE.MeshBasicMaterial({ color: 0x008000 }); // Green
const stem = new THREE.Mesh(stemGeometry, stemMaterial);
scene.add(stem);

camera.position.z = 5;

const petalGeometry = new THREE.BoxGeometry(0.5, 0.8, 0.1); // width, height, depth
const petalMaterial = new THREE.MeshBasicMaterial({ color: 0xFFC0CB }); // Pink

for (let i = 0; i < 6; i++) { // Create 6 petals
    const petal = new THREE.Mesh(petalGeometry, petalMaterial);
    petal.position.y = 1.5; // Position above the stem
    petal.rotation.z = (Math.PI / 3) * i; // Rotate around the center
    scene.add(petal);
}

const centerGeometry = new THREE.SphereGeometry(0.2, 16, 16); // radius, widthSegments, heightSegments
const centerMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 }); // Yellow
const center = new THREE.Mesh(centerGeometry, centerMaterial);
center.position.y = 1.5; // Position at the center of the petals
scene.add(center);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();