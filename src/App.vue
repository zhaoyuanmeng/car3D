<template>
  <AppHeader />
  <RouterView />
</template>

<script>
import AppHeader from '@/components/Header.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>
