<template>
  <div class="bg-primary min-h-screen flex items-center justify-center">
    <div class="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">用户登录</h1>
      <form class="space-y-4">
        <div>
          <label for="email" class="text-gray-800">邮箱：</label>
          <input
            type="email"
            id="email"
            class="w-full p-2 rounded-md bg-gray-100 text-gray-800"
          />
        </div>
        <div>
          <label for="password" class="text-gray-800">密码：</label>
          <input
            type="password"
            id="password"
            class="w-full p-2 rounded-md bg-gray-100 text-gray-800"
          />
        </div>
        <button
          class="w-full py-2 rounded-md bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white font-bold transition duration-300 hover:from-red-600 hover:via-red-700 hover:to-red-600"
        >
          登录
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
});
</script>

<style scoped>
.container {
  max-width: 400px;
}

.bg-primary {
  background-color: #222;
}

input[type='email'],
input[type='password'] {
  border: 2px solid transparent;
  background-clip: padding-box;
  transition: border-color 0.3s;
}

input[type='email']:focus,
input[type='password']:focus {
  border-color: #ff9800;
  outline: none;
}
</style>