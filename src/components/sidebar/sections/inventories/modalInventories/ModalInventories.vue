<script setup lang="ts">
import { useInventoryStore } from '@/stores-pinia/Inventory';
import { ref } from 'vue';

const inventoryStore = useInventoryStore();

// Form data
const newClient = ref({
  first_name: '',
  second_name: '',
  first_last_name: '',
  second_last_name: '',
  profile_image: '',
  email: '',
  phone: '',
  birth_date: '',
  address: '',
  type_genre: '',
  emergency_contact: {
    name: '',
    phone: '',
    relationship: ''
  },
  notes: '',
  coach_id: null,
  membership_id: null,
});


// Función para limpiar el modal
const closeModal = () => {
  inventoryStore.modalInventory = '';
};

</script>

<template>
  <div class="overlay__inventory_modal" :class="{ 'active': inventoryStore.modalInventory === 'inventory__modal' }">
    <div class="popup__inventory_modal" :class="{ 'active': inventoryStore.modalInventory === 'inventory__modal' }">

      <div class="inventory_modal">
        <div class="header__modal">
          <p class="title__modals">Registrar Nuevo Cliente</p>
          <a href="#" class="btn-cerrar-popup__inventory_modal" @click="closeModal">
            <svg class="svg__close" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </a>
        </div>

        <div class="inventory_modal">
       
        </div>
       
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay__inventory_modal {
  background: rgba(0, 0, 0, .3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  visibility: hidden;
  z-index: 1000;
}

.overlay__inventory_modal.active {
  visibility: visible;
}

.popup__inventory_modal {
  background-color: var(--background-modal, #fff);
  border-radius: var(--border-radius-checker, 12px);
  padding: 20px;
  width: 90%;
  max-width: 1200px;
  height: 95vh;
  transform: scale(0.7);
  opacity: 0;
  transition: .3s ease all;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
}

.popup__inventory_modal.active {
  transform: scale(1);
  opacity: 1;
}

.overlay__inventory_modal .header__modal {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.overlay__inventory_modal .title__modals {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-100, #4A90E2);
  margin: 0;
}

.btn-cerrar-popup__inventory_modal {
  position: absolute;
  right: 10px;
  top: 0;
  color: var(--close-color, #090d1f);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: var(--tran-03);
}

.btn-cerrar-popup__inventory_modal:hover {
  background-color: rgba(0, 0, 0, 0.05);
}


.inventory_modal {
  padding: 0 10px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  overflow: auto;
}

</style>