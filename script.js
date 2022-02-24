// import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import vertexShader from './shaders/vertex.glsl'
// import fragmentShader from './shaders/fragment.glsl'
// import * as dat from 'lil-gui'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLOADER.js'


//  const loader = new GLTFLoader();
//  loader.load(
//      '/models/3D_House.gltf',
//      function (gltf) {
//          scene.add(gltf.scene)
//      }
//  )
// // let home;
// // const scene = new THREE.Scene();
// // const loader = new GLTFLoader();
// // loader.load('3D_House', (gltf) => {
// //     home = gltf.scene;
// //     scene.add(home);
// //     home.position.x =0;
// //     home.position.x =10;
// //     home.position.x =15;

// // });

// // GUI
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
//  const scene = new THREE.Scene()


// //Display
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(0.25, -22, 1)
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true


// //Render
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// //Animate
// const animate = () =>
// {
//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(animate)
// }

// animate()


import * as THREE from 'three'

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';


const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const loader = new GLTFLoader()
loader.load('/models/House3.gltf',function(gltf)
{
    console.log(gltf)
    const root = gltf.scene;

    root.scale.set(0.03,0.03,0.03)
    scene.add(root);
},function (xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log ('An error occured')
}
)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
scene.add(light)
//const geometry = new THREE.BoxGeometry(1,1,1)
//const material = new THREE.MeshBasicMaterial({
  //  color: 0x00ff00
//})

//const boxMesh = new THREE.Mesh(geometry,material)
//scene.add(boxMesh)

 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera (75, sizes.width/sizes.height, 0.1, 100)

camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})


renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled= true
renderer.gammOuput = true
renderer.render(scene,camera)

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
} 

animate()