<template>
  <div ref="container"></div>
  <div class="controls">
    <label for="color">Car Color:</label>
    <input type="color" id="color" v-model="carColor" @input="changeCarColor" />
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
  name: 'CarsView',
  data() {
    return {
      carColor: '#ff0000', // 默认车辆颜色为红色
      carModel: null,
    };
  },
  mounted() {
    this.loadModel();
  },
  methods: {
    loadModel() {
      const container = this.$refs.container;

      // 创建场景
      const scene = new THREE.Scene();

      // 创建渲染器
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
      renderer.setClearColor('rgb(135,206,250)', 1.0);
      renderer.setClearColor(0xffffff, 1.0);
      renderer.setClearColor('#428bca', 1.0);
      renderer.setClearColor('rgba(135,206,250,0.5)', 1.0);
      // 创建相机
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      );
      camera.position.z = 5;

      // 创建光源
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 1).normalize();
      scene.add(light);

      // 使用GLTFLoader加载汽车模型
      const loader = new GLTFLoader();
      loader.load(
        '../../public/lamborghini_aventador_svj_sdc__free.glb',
        (gltf) => {
          const carModel = gltf.scene;
          scene.add(carModel);

          // 添加OrbitControls控制器
          const controls = new OrbitControls(camera, renderer.domElement);
          controls.update();

          // 渲染场景
          function animate() {
            requestAnimationFrame(animate);
            carModel.rotation.y += 0.01;
            renderer.render(scene, camera);
          }
          animate();
        },
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}
.model-container {
  flex: 1;
}

.controls {
  width: 200px;
  background-color: #f0f0f0;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 100px;
}
</style>
