<script setup lang="ts">
import { useInventoryStore } from '@/stores-pinia/Inventory';

const InventoryStore = useInventoryStore();

const openModal = () => {
  InventoryStore.modalInventory = 'inventory__modal';  // Cambia el estado para abrir el modal
};


</script>

<template>
  <div class="products">
    <div class="products__container">
      <div>
        <button class="btn__general-primary" @click="openModal">Nuevo producto</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.products__container {
  padding: 20px;
}

</style>