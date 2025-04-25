<script setup lang="ts">
import { useSalesStore } from '@/stores-pinia/Sales';
import ModalSales from '@/components/sidebar/sections/sales/modalSales/ModalSales.vue';


const salesStore = useSalesStore();

const openModal = () => {
  salesStore.modalSales = 'sales__modal';
};


</script>

<template>
  <div class="sales">
    <div class="sales__container">
        <div>
            <button @click="openModal">Nueva venta</button>
        </div>
        <ModalSales />
    </div>
  </div>
</template>

<style scoped>

</style>