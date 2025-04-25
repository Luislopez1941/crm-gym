<script setup lang="ts">
import { useInventoryStore } from '@/stores-pinia/Inventory';

const InventoryStore = useInventoryStore();

const openModal = () => {
  InventoryStore.modalInventory = 'inventory__modal';  // Cambia el estado para abrir el modal
};


</script>

<template>
  <div class="inventory">
    <div class="inventory__container">
      <div>
        <button @click="openModal">Nuevo producto</button>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>