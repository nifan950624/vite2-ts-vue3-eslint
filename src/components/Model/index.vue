<template>
  <div
    ref="model"
    class="3DModel"
  />
</template>

<script setup>
import {onMounted, ref} from 'vue';
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js'

const model = ref(null)
onMounted(() => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf65144);
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight);
  model.value.appendChild(renderer.domElement)

  // FBXLoader.load('../../assets/BMW/m4gts.FBX', (fbx) => {
  //   sence.add(fbx.scene)
  // })


  const planeGeometry = new THREE.PlaneGeometry(100, 100)
  const planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.receiveShadow = true
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.y = 0;
  plane.position.z = 0;

  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 100, 100, 100 );

  spotLight.castShadow = true;

  scene.add(spotLight)


  const boxGeometry = new THREE.BoxGeometry(10, 10, 10)
  const boxMaterial = new THREE.MeshBasicMaterial({color: '0xcccccc'})
  const box = new THREE.Mesh(boxGeometry, boxMaterial)
  box.position.y = 5
  scene.add(box)


  camera.position.x = 10;
  camera.position.y = 50;
  camera.position.z = 130;
  camera.lookAt(scene.position)

  scene.add(plane)
  const axes = new THREE.AxesHelper(20)
  scene.add(axes)
  const controls = new OrbitControls(camera, renderer.domElement)

  renderer.render(scene, camera)
})
</script>

<style lang="scss" scoped>
</style>
