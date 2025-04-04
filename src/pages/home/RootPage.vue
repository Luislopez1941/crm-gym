<script setup lang="ts">
import Sidebar from '@/components/sidebar/Sidebar.vue';
import Header from '@/components/header/Header.vue';



</script>

<template>
  <div class="root-page">
    <Sidebar />
  <div class="main">
    <Header />
    <router-view />
  </div>
  </div>
</template>

<style scoped>
  .main {
    display: grid;
    grid-template-rows: auto 1fr;
    width: 100%;
    height: 100%;
   
  }

  .root-page {
    display: flex;
    height: 100vh;
  }

</style>
