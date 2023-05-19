<template>
  <div class="container">
    <h1>测试3D threejs页面</h1>
    <div
      class="panel w-full"
      ref="canvasContainer"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as THREE from 'three';

export default defineComponent({
  name: 'VueUse',
  setup() {
    const canvasContainer = ref<HTMLDivElement | null>(null);
    const mouseDownPosition = ref<{ x: number; y: number } | null>(null);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    onMounted(() => {
      if (canvasContainer.value) {
        // 创建场景
        const scene = new THREE.Scene();

        // 创建渲染器
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasContainer.value.appendChild(renderer.domElement);

        // 创建正方形
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // 调整视角
        camera.position.z = 5;

        // 动画循环
        const animate = function () {
          requestAnimationFrame(animate);

          // 旋转正方形
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;

          // 渲染场景和相机
          renderer.render(scene, camera);
        };

        animate();
      }
    });

    const onMouseDown = (event: MouseEvent) => {
      mouseDownPosition.value = { x: event.clientX, y: event.clientY };
    };

    const onMouseMove = (event: MouseEvent) => {
      if (mouseDownPosition.value) {
        const { x: startX, y: startY } = mouseDownPosition.value;
        const { clientX, clientY } = event;

        const deltaX = (clientX - startX) * 0.005;
        const deltaY = (clientY - startY) * 0.005;

        camera.rotation.y += deltaX;
        camera.rotation.x += deltaY;

        mouseDownPosition.value = { x: clientX, y: clientY };
      }
    };

    const onMouseUp = () => {
      mouseDownPosition.value = null;
    };

    return {
      canvasContainer,
      onMouseDown,
      onMouseMove,
      onMouseUp,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 50px;
  z-index: 999;
  color: #ffffff;
}

.panel {
  width: 100%;
  height: 100%;
}
</style>
