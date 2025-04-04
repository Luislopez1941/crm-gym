<script setup lang="ts">
import { ref } from 'vue';
import { useClientsStore } from '@/stores-pinia/Clients';

const clientsStore = useClientsStore();

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

// Preview for profile image
const imagePreview = ref('');

// Función para limpiar el modal
const closeModal = () => {
  clientsStore.modalClients = '';
};

</script>

<template>
  <div class="overlay__clients_modal" :class="{ 'active': clientsStore.modalClients === 'clients__modal' }">
    <div class="popup__clients_modal" :class="{ 'active': clientsStore.modalClients === 'clients__modal' }">

      <div class="clients_modal">
        <div class="header__modal">
          <p class="title__modals">Registrar Nuevo Cliente</p>
          <a href="#" class="btn-cerrar-popup__clients_modal" @click="closeModal">
            <svg class="svg__close" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </a>
        </div>

        <form class="form__clients_modal">
          <div class="">
            <div class="form__grid">
              <!-- Columna izquierda: Información personal -->
              <div class="form__column">
                <div class="form__section">
                  <h3 class="section__title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Información Personal
                  </h3>

                  <div class="form__row">
                    <div class="form__group">
                      <label class="label__general" for="fullName">Primer nombre*</label>
                      <input class="inputs__general" type="text" id="fullName" placeholder="Primer nombre"
                        v-model="newClient.first_name" />
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="fullName">Segundo nombre*</label>
                      <input class="inputs__general" type="text" id="fullName" placeholder="Segundo nombre"
                        v-model="newClient.second_name" />
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="fullName">Primer apellido*</label>
                      <input class="inputs__general" type="text" id="fullName" placeholder="Primer apellido"
                        v-model="newClient.first_last_name" />
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="fullName">Segundo Nombre</label>
                      <input class="inputs__general" type="text" id="fullName" placeholder="Segundo Nombre"
                        v-model="newClient.second_last_name" />
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="fullName">Correo electronico</label>
                      <input class="inputs__general" type="text" id="fullName" placeholder="Correo electronico"
                        v-model="newClient.email" />
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="membershipType">Tipo de Membresía</label>
                      <select class="inputs__general" id="membershipType" v-model="newClient.membership_id">
                        <option value="basic">Básica (1 mes)</option>
                        <option value="standard">Estándar (3 meses)</option>
                        <option value="premium">Premium (12 meses)</option>
                      </select>
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="membershipType">Tipo de coach</label>
                      <select class="inputs__general" id="membershipType" v-model="newClient.coach_id">
                        <option value="basic">Juan</option>
                        <option value="standard">Miguel</option>
                        <option value="premium">Eduardo</option>
                      </select>
                    </div>

                    <div class="form__group">
                      <label class="label__general" for="gender">Género*</label>
                      <select class="inputs__general" id="gender" v-model="newClient.type_genre">
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="birthDate">Fecha de Nacimiento*</label>
                      <input class="inputs__general" type="date" id="birthDate" v-model="newClient.birth_date" />
                    </div>
                  </div>
               
                  <div class="form__group">
                    <label class="label__general" for="address">Dirección*</label>
                    <textarea class="textarea__general" id="address" v-model="newClient.address"></textarea>
                  </div>
                </div>
              </div>

              <!-- Columna derecha: Foto y membresía -->
              <div class="form__column">
                <div class="form__section">
                  <h3 class="section__title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    Foto de Perfil
                  </h3>

                  <div class="photo-upload-area">
                    <div class="photo-preview" v-if="imagePreview">
                      <img :src="imagePreview" alt="Vista previa" />
                    </div>
                    <div class="upload-placeholder" v-else>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <p>Arrastra una imagen o haz clic para seleccionar</p>
                      <input type="file" id="profileImage" accept="image/*" class="file-input" />
                    </div>
                  </div>
                </div>
                <div class="form__section">
                  <h3 class="section__title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                      </path>
                    </svg>
                    Contacto de Emergencia
                  </h3>

                  <div class="form__row">
                    <div class="form__group">
                      <label class="label__general" for="emergencyName">Nombre*</label>
                      <input class="inputs__general" type="text" id="emergencyName"
                        v-model="newClient.emergency_contact.name" />
                    </div>

                    <div class="form__group">
                      <label class="label__general" for="emergencyPhone">Teléfono*</label>
                      <input class="inputs__general" type="tel" id="emergencyPhone"
                        v-model="newClient.emergency_contact.phone" />
                    </div>
                  </div>

                  <div class="form__group">
                    <label class="label__general" for="emergencyRelationship">Relación</label>
                    <input class="inputs__general" type="text" id="emergencyRelationship"
                      v-model="newClient.emergency_contact.relationship" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="form__actions">
          <button type="submit" class="btn-submit">Registrar Cliente</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay__clients_modal {
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

.overlay__clients_modal.active {
  visibility: visible;
}

.popup__clients_modal {
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

.popup__clients_modal.active {
  transform: scale(1);
  opacity: 1;
}

.header__modal {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.title__modals {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-100, #4A90E2);
  margin: 0;
}

.btn-cerrar-popup__clients_modal {
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

.btn-cerrar-popup__clients_modal:hover {
  background-color: rgba(0, 0, 0, 0.05);
}


.clients_modal {
  padding: 0 10px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  overflow: auto;
}

.form__clients_modal {
  display: flex;
  flex-direction: column;
  gap: 25px;
  overflow: auto;
}

.form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form__column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form__section {
  background-color: var(--card-modal);
  padding: 20px;
  border-radius: var(--border-radius-checker, 12px);
}

.section__title {
  margin: 0 0 15px 0;
  font-size: 1.1rem;
  color: var(--primary-100, #4A90E2);
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 5px;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}

.form__group {
  margin-bottom: 15px;
}

/* Estilos para el área de carga de fotos */
.photo-upload-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--input-color);
  border-radius: var(--border-radius-checker, 12px);
  padding: 20px;
  min-height: 250px;
  position: relative;
  border: 2px dashed var(--text-color, #707070);
  transition: all 0.3s ease;
}

.photo-preview {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.photo-preview img {
  max-width: 100%;
  max-height: 200px;
  border-radius: var(--border-radius-small, 8px);
  object-fit: cover;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-color, #707070);
  gap: 15px;
}

.upload-placeholder svg {
  opacity: 0.6;
}

.upload-placeholder p {
  margin: 0;
  font-size: 0.9rem;
}

.file-input {
  display: none;
}

/* Botones de acción */
.form__actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.btn-cancel,
.btn-submit {
  padding: 12px 25px;
  border: none;
  border-radius: var(--border-radius-small, 8px);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-cancel {
  background-color: var(--input-color, #D9D9D9);
  color: var(--text-color, #707070);
}

.btn-submit {
  background-color: var(--primary-100, #4A90E2);
  color: white;
  font-weight: 500;
}

.btn-cancel:hover {
  background-color: #c4c4c4;
}

.btn-submit:hover {
  background-color: var(--primary-200, #1d75c3);
}

/* Responsive styles */
@media (max-width: 992px) {
  .form__grid {
    grid-template-columns: 1fr;
  }

  .popup__clients_modal {
    width: 95%;
    max-height: 95vh;
  }
}

@media (max-width: 768px) {
  .form__row {
    grid-template-columns: 1fr;
  }
}
</style>