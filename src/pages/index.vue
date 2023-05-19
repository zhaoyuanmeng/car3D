<template>
  <div class="bg-primary h-screen flex items-center justify-center">
    <div class="container mx-auto flex">
      <div class="text-container">
        <h1 class="text-4xl font-bold text-white mb-8">长城汽车</h1>
        <p class="text-xl text-white mb-12">长城智能新能源，更胜更远更安全</p>
        <router-link to="/carsview" class="btn">参观3D展厅</router-link>
      </div>
      <div class="image-container">
        <img src="@/assets/kv_pc_34.jpg" alt="Car Image" class="car-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.bg-primary {
  background: linear-gradient(166deg, #222, #c9e4e4, #ffe4e4);
}

.text-white {
  color: #fff;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 9999px;
  background-color: #ff9800;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: rgba(255, 152, 0, 0.9);
}

.text-container {
  flex: 1;
  padding-right: 2rem;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.car-image {
  max-width: 100%;
  height: auto;
  max-height: 80vh; /* Adjust the value as needed */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6);
}
</style>
