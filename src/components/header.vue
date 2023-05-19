<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/cc_logo.png" alt="Logo" />
    </div>
    <nav class="nav">
      <router-link to="/" class="nav-link" :class="{ active: isActive('/') }"
        >首页</router-link
      >
      <router-link
        to="/carsview"
        class="nav-link"
        :class="{ active: isActive('/carsview') }"
        >展台</router-link
      >
      <router-link
        to="/about"
        class="nav-link"
        :class="{ active: isActive('/about') }"
        >关于我们</router-link
      >
      <router-link
        to="/login"
        class="nav-link"
        :class="{ active: isActive('/login') }"
        >登录</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.logo img {
  height: 50px;
}

.nav-link {
  margin-right: 1rem;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link.active {
  color: #ff9800;
}

@media (max-width: 768px) {
  .logo img {
    width: 100px;
    height: auto;
  }
}
</style>
