<template>
  <div class="container" ref="container"></div>
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
    const debounce = (fn, delay) => {
      let timer;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn();
        }, delay);
      };
    };
    const cancelDebounce = debounce(this.loadModel, 200);

    window.addEventListener('resize', () => {
      //清除之前的内容
      if (this.$refs.container) {
        this.$refs.container.innerHTML = '';
      }

      // 调用延迟加载方法
      cancelDebounce();
    });
  },
  methods: {
    loadModel() {
      const container = this.$refs.container;

      // 清除之前的内容
      while (container.children.length > 0) {
        const child = container.children[0];
        if (child.dispose) {
          child.dispose();
        }
        container.remove(child);
      }

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
      camera.position.y = 4;
      camera.position.x = 5;

      // 创建光源
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 1).normalize();
      scene.add(light);
      // 绘制网格线
      var grid = new THREE.GridHelper(24, 24, 0xff0000, 0x444444);
      grid.material.opacity = 0.4;
      grid.material.transparent = true;
      grid.rotation.x = Math.PI / 1;
      scene.add(grid);

      // // 添加墙体
      // const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      // const wallGeometry = new THREE.BoxGeometry(24, 8, 0.1);
      // const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
      // leftWall.position.set(-12, 4, 12);
      // const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
      // rightWall.position.set(12, 4, 12);
      // const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
      // backWall.position.set(12, 4, -12);
      // const frontWall = new THREE.Mesh(wallGeometry, wallMaterial);
      // frontWall.position.set(12, 4, 12);

      // const middleWallMaterial = new THREE.MeshBasicMaterial({
      //   color: 0xffffff,
      // });
      // const middleWallGeometry = new THREE.BoxGeometry(0.1, 8, 24);
      // const middleWall = new THREE.Mesh(middleWallGeometry, middleWallMaterial);
      // middleWall.position.set(0, 4, 0);

      // scene.add(leftWall, rightWall, backWall, frontWall, middleWall);

      // 使用GLTFLoader加载汽车模型
      const loader = new GLTFLoader();
      loader.load(
        '../../public/lamborghini_aventador_svj_sdc__free.glb',
        (gltf) => {
          const carModel = gltf.scene;
          carModel.position.y = 0.08;
          scene.add(carModel);

          // 使用GLTFLoader加载地板模型
          loader.load('../../public/sci-fi_floor_panel.glb', (gltf) => {
            const floorModel = gltf.scene;
            floorModel.scale.set(4, 4, 4); //地板模型缩放
            scene.add(floorModel);
          });

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
  width: 100vw;
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
