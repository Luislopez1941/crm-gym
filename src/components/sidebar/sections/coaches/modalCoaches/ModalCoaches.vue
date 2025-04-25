<script setup lang="ts">
import { useCoachesStore } from '@/stores-pinia/Coaches';
import { ref } from 'vue';

const coachesStore = useCoachesStore();

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
  coachesStore.modalCoaches = '';
};

</script>

<template>
  <div class="overlay__coaches_modal" :class="{ 'active': coachesStore.modalCoaches === 'coaches__modal' }">
    <div class="popup__coaches_modal" :class="{ 'active': coachesStore.modalCoaches === 'coaches__modal' }">
      <div class="coaches_modal">
        <div class="header__modal">
          <p class="title__modals">Registrar nuevo entrenador</p>
          <a href="#" class="btn-cerrar-popup__coaches_modal" @click="closeModal">
            <svg class="svg__close" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </a>
        </div>
        <div class="coaches_modal">
          <div class="row__one">
            <div>
              <label class="label__general" for="fullName">Primer nombre</label>
              <input class="inputs__general" type="text" id="fullName" placeholder="Primer nombre"
                v-model="newClient.first_name" />
            </div>
            <div>
              <label class="label__general" for="fullName">Segundo nombre</label>
              <input class="inputs__general" type="text" id="fullName" placeholder="Segundo nombre"
                v-model="newClient.second_name" />
            </div>
            <div>
              <label class="label__general" for="fullName">Primer nombre</label>
              <input class="inputs__general" type="text" id="fullName" placeholder="Primer nombre"
                v-model="newClient.first_name" />
            </div>
            <div>
              <label class="label__general" for="fullName">Segundo nombre</label>
              <input class="inputs__general" type="text" id="fullName" placeholder="Segundo nombre"
                v-model="newClient.second_name" />
            </div>
            <div>
              <label class="label__general" for="email">Email</label>
              <input class="inputs__general" type="text" id="email" placeholder="Email"
                v-model="newClient.email" />
            </div>
            <div>
              <label class="label__general" for="phone">Telefono</label>
              <input class="inputs__general" type="text" id="phone" placeholder="Numero"
                v-model="newClient.phone" />
            </div>
            <div>
              <label class="label__general" for="salary">Salario</label>
              <input class="inputs__general" type="text" id="salary" placeholder="Salario"
                v-model="newClient.salary" />
            </div>
     
          </div>
          <div class="row__two">
            <div>
              <button type="submit" class="btn__general-primary">Registrar Cliente</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay__coaches_modal {
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

.overlay__coaches_modal.active {
  visibility: visible;
}

.popup__coaches_modal {
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

.popup__coaches_modal.active {
  transform: scale(1);
  opacity: 1;
}

.overlay__coaches_modal .header__modal {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

}

.overlay__coaches_modal .title__modals {
  font-size: 1rem;
  margin: 0;
}

.btn-cerrar-popup__coaches_modal {
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

.btn-cerrar-popup__coaches_modal:hover {
  background-color: rgba(0, 0, 0, 0.05);
}


.coaches_modal {
  display: grid;
  grid-template-rows: auto auto;
  height: 100%;
  overflow: auto;
  padding: 10px;
  gap: 20px;

}

.coaches_modal .row__one {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.coaches_modal .row__two {
  display: flex;
  justify-content: center;
}

</style>