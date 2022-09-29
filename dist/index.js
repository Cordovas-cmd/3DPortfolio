import './style.css';
// import * as THREE from '../node_modules/three';
import * as THREE from './libs/three126/three.module.js'
import { TorusGeometry } from './libs/three126';
import { OrbitControls } from './libs/three126/OrbitControls';
class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );
// scene == container
const scene = new THREE.Scene();

//in order to look inside the scene we need camera
// Last arguements are for view frustrom to control which objects are visibale relative to camera
// perspectivecamera(field of view, aspect ratio, view frustrum)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Renderer makes magic happen
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight );
camera.position.setZ(30);

// render == DRAW

renderer.render(scene, camera);

//ADD OBJECT
/* Need a geometry the {x,y,z} points that makeup shape
torus */
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );

//MATERIAL the wrapping paper for an object

// const material = new THREE.MeshBasicMaterial({ color: 0xff6347, wireframe: true });
const material = new THREE.MeshStandardMaterial({ color: 0xff6347});
//MESH geometry + material
const torus = new THREE.Mesh (geometry, material);
scene.add(torus);

//LIGHTS
const pointLight = new THREE.PointLight(0xffffff);
// The higher the number the farther the light moves away
pointLight.position.set(20,20,20);

//Lights everything equally
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//Helpers
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

//Listen to dom events on the mouse and update camera position accordingly
const controls = new OrbitControls(camera, renderer.domElement);

//simulate space with a bunch of random stars
function addStar() {
const geometry = new THREE.SphereGeometry(0.25, 24, 24);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const star = new THREE.Mesh(geometry, material);

//randomly generate an x y z position value for each star
//map each value to the three.js random float spread function randomly generates a # between - + 100
const [x, y, z] = Array(3)
.fill()
.map(() => THREE.MathUtils.randFloatSpread(100));

star.position.set(x, y, z);
scene.add(star);
}

//HOw many stars? create array of 200 values and for  each value call add star
Array(200).fill().forEach(addStar);

//add the background using the image
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
//set image as background by updating scene property
scene.background = spaceTexture;

//Avatar
const loveTexure = new THREE.TextureLoader().load('love.jpg')

const love = new THREE.Mesh(
  new THREE.BoxGeometry(5,5,5),
  new THREE.MeshBasicMaterial ({map: loveTexure})
);
scene.add(love);


//Moon

const moonTexture = new THREE.TextureLoader().load('marik.jpg')
const normalTexture = new THREE.TextureLoader().load('normal.jpg')
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({ 
    map: moonTexture,
    normalMap: normalTexture
  })
 
);
scene.add(moon)

//reposition moon to be further down z axis bc that's the direction we will be scrolling in
//you can either use = sign or set to assiogn 
moon.position.z = 30;
moon.position.setX(-10);

love.position.z = -5;
love.position.x = 2;



//function to move the camera
function moveCamera() {

  //calculate where the user is currently scrolled to
  // getBoundingCLientRect will get dimensions of the viewport to show us how far from the top we are in the page
  const t = document.body.getBoundingClientRect().top;

  //Rotate the objects
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  love.rotation.y += 0.01;
  love.rotation.z += 0.01;

  //MOST IMPORTANT is change position of camera
  //top value will always eb negative so multiply it by negative number
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}
//event listener for scroll
document.body.onscroll = moveCamera;
document.body.onclick = moveCamera;
moveCamera();
//don't want to have to call render over and over so create a recursive function that gives infinite loop that auto renders
function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

// if I want the moon to auto rotate
  moon.rotation.x += 0.01;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.01;
  //make sure mouse events on the dom are reflected
  controls.update();

  renderer.render( scene, camera );
}
animate()
  }}
  export { App };
