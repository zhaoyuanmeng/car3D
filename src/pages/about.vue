<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-4">关于长城汽车</h1>
    <p class="text-lg mb-8">
      长城汽车是一家知名的汽车制造公司，致力于生产高品质的汽车产品。
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          src="@/assets/kv_pc_34.jpg"
          alt="长城汽车"
          class="rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-4">公司历史</h2>
        <p>
          长城汽车成立于1984年，总部位于中国。多年来，我们一直专注于技术创新和产品质量。
        </p>
        <p>
          我们的使命是为客户提供可靠、安全和环保的汽车，满足不同消费者的需求和偏好。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  color: #666;
}

img {
  width: 100%;
  height: auto;
}
</style>
