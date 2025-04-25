<script setup lang="ts">
import { useMembershipsStore } from '@/stores-pinia/Memberships';
import { reactive  } from 'vue';

const membershipsStore = useMembershipsStore();

// Form data
const fields = reactive({
  name_menresia: '',
  duration: '',
  price: '',
  benefits: '',
});



// Función para limpiar el modal
const closeModal = () => {
  membershipsStore.modalMemberships = '';
};

const createMemberships = () => {
  console.log('fields', fields.name_menresia)
}

</script>

<template>
  <div class="overlay__memberships_modal"
    :class="{ 'active': membershipsStore.modalMemberships === 'memberships__modal' }">
    <div class="popup__memberships_modal"
      :class="{ 'active': membershipsStore.modalMemberships === 'memberships__modal' }">

      <div class="memberships_modal">
        <div class="header__modal">
          <p class="title__modals">Registrar nueva membresia</p>
          <a href="#" class="btn-cerrar-popup__memberships_modal" @click="closeModal">
            <svg class="svg__close" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </a>
        </div>
        <div class="memberships_modal">
          <div class="row__one">
            <div>
              <label class="label__general" for="fullName">Nombre de membresia</label>
              <input class="inputs__general" type="text" id="fullName" placeholder="Nombre de la membresia"
                v-model="fields.name_menresia" />
            </div>
            <div>
              <label class="label__general" for="fullName">Duración</label>
              <input class="inputs__general" type="text" id="fullName" placeholder="Duración de la membresia"
                v-model="fields.duration" />
            </div>
            <div>
              <label class="label__general" for="fullName">Precio</label>
              <input class="inputs__general" type="text" id="fullName" placeholder="Precio de la membresia"
                v-model="fields.price" />
            </div>
            <div>
              <label class="label__general" for="fullName">Beneficios</label>
              <input class="inputs__general" type="text" id="fullName" placeholder="Beneficios de la membresia"
                v-model="fields.benefits" />
            </div>
          </div>
          <div class="row__two">
            <div>
              <button type="button" @click="createMemberships" class="btn__general-primary">Registrar Cliente</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay__memberships_modal {
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

.overlay__memberships_modal.active {
  visibility: visible;
}

.popup__memberships_modal {
  background-color: var(--background-modal, #fff);
  border-radius: var(--border-radius-checker, 12px);

  width: 50vw;
  max-width: 1200px;
  max-height: 95vh;
  transform: scale(0.7);
  opacity: 0;
  transition: .3s ease all;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
}

.popup__memberships_modal.active {
  transform: scale(1);
  opacity: 1;
}

.overlay__memberships_modal .header__modal {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

}

.overlay__memberships_modal .title__modals {
  font-size: 1rem;
  margin: 0;
}

.btn-cerrar-popup__memberships_modal {
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

.btn-cerrar-popup__memberships_modal:hover {
  background-color: rgba(0, 0, 0, 0.05);
}


.memberships_modal {
  display: grid;
  grid-template-rows: auto auto;
  height: 100%;
  overflow: auto;
  padding: 10px;
  gap: 20px;

}

.memberships_modal .row__one {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.memberships_modal .row__two {
  display: flex;
  justify-content: center;
}

</style>