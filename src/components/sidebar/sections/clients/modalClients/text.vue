<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useClientsStore } from '@/stores-pinia/Clients';

const clientsStore = useClientsStore();

// Form data
const newClient = ref({
  first_name: '',
  second_name: '',
  first_last_name: '',
  second_last_name: '',
  profile_image: null as File | null,
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
const dragActive = ref(false);



// Validation
const errors = ref({
  first_name: '',
  second_name: '',
  first_last_name: '',
  second_last_name: '',
  email: '',
  phone: '',
  birth_date: '',
  address: '',
});



// Handle image upload
const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    newClient.value.profile_image = input.files[0];
    createImagePreview(input.files[0]);
  }
};

// Create image preview
const createImagePreview = (file: File) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.value = e.target?.result as string;
  };
  reader.readAsDataURL(file);
};

// Handle drag events
const handleDragEnter = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  dragActive.value = true;
};

const handleDragLeave = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  dragActive.value = false;
};

const handleDragOver = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  dragActive.value = true;
};

const handleDrop = (e: DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  dragActive.value = false;

  if (e.dataTransfer?.files && e.dataTransfer.files[0]) {
    newClient.value.profileImage = e.dataTransfer.files[0];
    createImagePreview(e.dataTransfer.files[0]);
  }
};

// Form validation
const validateForm = () => {
  let isValid = true;
  errors.value = {
    fullName: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
    membershipType: '',
    emergencyContactName: '',
    emergencyContactPhone: ''
  };

  // Required fields validation
  if (!newClient.value.fullName) {
    errors.value.fullName = 'El nombre es obligatorio';
    isValid = false;
  }

  if (!newClient.value.email) {
    errors.value.email = 'El correo es obligatorio';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newClient.value.email)) {
    errors.value.email = 'Formato de correo inválido';
    isValid = false;
  }

  if (!newClient.value.phone) {
    errors.value.phone = 'El teléfono es obligatorio';
    isValid = false;
  }

  if (!newClient.value.birthDate) {
    errors.value.birthDate = 'La fecha de nacimiento es obligatoria';
    isValid = false;
  }

  if (!newClient.value.address) {
    errors.value.address = 'La dirección es obligatoria';
    isValid = false;
  }

  if (!newClient.value.emergencyContact.name) {
    errors.value.emergencyContactName = 'El contacto de emergencia es obligatorio';
    isValid = false;
  }

  if (!newClient.value.emergencyContact.phone) {
    errors.value.emergencyContactPhone = 'El teléfono de emergencia es obligatorio';
    isValid = false;
  }

  return isValid;
};

// Submit form
const submitForm = () => {
  if (validateForm()) {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', newClient.value);

    // Reset form
    resetForm();

    // Close modal
    clientsStore.closeModal();
  }
};

// Reset form
const resetForm = () => {
  newClient.value = {
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

  };
  imagePreview.value = '';
  calculateEndDate();
};

// Initialize end date on component mount
onMounted(() => {
  calculateEndDate();
  newClient.value.membershipFee = 500; // Default for basic membership
});

// Close modal when clicking outside
const handleOutsideClick = (event: MouseEvent) => {
  const modal = document.querySelector('.popup__clients_modal');
  if (modal && !modal.contains(event.target as Node)) {
    clientsStore.closeModal();
  }
};

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

        <form class="form__clients_modal" @submit.prevent="submitForm">
          <!-- Primera fila: Información personal y foto -->
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
                      <input class="inputs__general" type="text" id="fullName" placeholder="Nombre"
                        v-model="newClient.fullName" :class="{ 'input-error': errors.fullName }" />
                      <span class="error-message" v-if="errors.fullName">{{ errors.fullName }}</span>
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="fullName">Segundo nombre*</label>
                      <input class="inputs__general" type="text" id="fullName" placeholder="Nombre"
                        v-model="newClient.fullName" :class="{ 'input-error': errors.fullName }" />
                      <span class="error-message" v-if="errors.fullName">{{ errors.fullName }}</span>
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="fullName">Primer apellido*</label>
                      <input class="inputs__general" type="text" id="fullName" placeholder="Nombre"
                        v-model="newClient.fullName" :class="{ 'input-error': errors.fullName }" />
                      <span class="error-message" v-if="errors.fullName">{{ errors.fullName }}</span>
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="fullName">Segundo Nombre</label>
                      <input class="inputs__general" type="text" id="fullName" placeholder="Nombre"
                        v-model="newClient.fullName" :class="{ 'input-error': errors.fullName }" />
                      <span class="error-message" v-if="errors.fullName">{{ errors.fullName }}</span>
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="fullName">Correo electronico</label>
                      <input class="inputs__general" type="text" id="fullName" placeholder="Nombre"
                        v-model="newClient.fullName" :class="{ 'input-error': errors.fullName }" />
                      <span class="error-message" v-if="errors.fullName">{{ errors.fullName }}</span>
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="membershipType">Tipo de Membresía</label>
                      <select class="inputs__general" id="membershipType" v-model="newClient.membershipType">
                        <option value="basic">Básica (1 mes)</option>
                        <option value="standard">Estándar (3 meses)</option>
                        <option value="premium">Premium (12 meses)</option>
                      </select>
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="membershipType">Tipo de coach</label>
                      <select class="inputs__general" id="membershipType" v-model="newClient.membershipType">
                        <option value="basic">Juan</option>
                        <option value="standard">Miguel</option>
                        <option value="premium">Eduardo</option>
                      </select>
                    </div>

                    <div class="form__group">
                      <label class="label__general" for="gender">Género*</label>
                      <select class="inputs__general" id="gender" v-model="newClient.gender">
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Otro</option>
                      </select>
                    </div>
                    <div class="form__group">
                      <label class="label__general" for="birthDate">Fecha de Nacimiento*</label>
                      <input class="inputs__general" type="date" id="birthDate" v-model="newClient.birthDate"
                        :class="{ 'input-error': errors.birthDate }" />
                      <span class="error-message" v-if="errors.birthDate">{{ errors.birthDate }}</span>
                    </div>
                  </div>

                  <div class="form__group">
                    <label class="label__general" for="address">Dirección*</label>
                    <textarea class="textarea__general" id="address" v-model="newClient.address"
                      :class="{ 'input-error': errors.address }"></textarea>
                    <span class="error-message" v-if="errors.address">{{ errors.address }}</span>
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

                  <div class="photo-upload-area" :class="{ 'drag-active': dragActive }" @dragenter="handleDragEnter"
                    @dragleave="handleDragLeave" @dragover="handleDragOver" @drop="handleDrop">
                    <div class="photo-preview" v-if="imagePreview">
                      <img :src="imagePreview" alt="Vista previa" />
                      <button type="button" class="remove-photo"
                        @click="imagePreview = ''; newClient.profileImage = null">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    <div class="upload-placeholder" v-else>
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <p>Arrastra una imagen o haz clic para seleccionar</p>
                      <input type="file" id="profileImage" @change="handleImageUpload" accept="image/*"
                        class="file-input" />
                      <button type="button" class="upload-btn"
                        @click="document.getElementById('profileImage')?.click()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        Subir Foto
                      </button>
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
                        v-model="newClient.emergencyContact.name"
                        :class="{ 'input-error': errors.emergencyContactName }" />
                      <span class="error-message" v-if="errors.emergencyContactName">{{ errors.emergencyContactName
                      }}</span>
                    </div>

                    <div class="form__group">
                      <label class="label__general" for="emergencyPhone">Teléfono*</label>
                      <input class="inputs__general" type="tel" id="emergencyPhone"
                        v-model="newClient.emergencyContact.phone"
                        :class="{ 'input-error': errors.emergencyContactPhone }" />
                      <span class="error-message" v-if="errors.emergencyContactPhone">{{ errors.emergencyContactPhone
                      }}</span>
                    </div>
                  </div>

                  <div class="form__group">
                    <label class="label__general" for="emergencyRelationship">Relación</label>
                    <input class="inputs__general" type="text" id="emergencyRelationship"
                      v-model="newClient.emergencyContact.relationship" />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </form>
        <div class="form__actions">
          <button type="button" class="btn-cancel" @click="clientsStore.closeModal">Cancelar</button>
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






.input-error {
  box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.3);
}

.error-message {
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 5px;
  display: block;
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

.photo-upload-area.drag-active {
  border-color: var(--primary-100, #4A90E2);
  background-color: rgba(138, 195, 239, 0.1);
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

.remove-photo {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.remove-photo:hover {
  background-color: #c0392b;
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

.upload-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: var(--primary-100, #4A90E2);
  color: white;
  border: none;
  border-radius: var(--border-radius-small, 8px);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.upload-btn:hover {
  background-color: var(--primary-200, #1d75c3);
}

/* Estilos para checkboxes */
.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.checkbox-label input[type="checkbox"] {
  margin-right: 8px;
  width: 18px;
  height: 18px;
}

.checkbox-text {
  font-size: 0.9rem;
  color: var(--text-color, #707070);
}

/* Botones de acción */
.form__actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
}

.btn-cancel,
.btn-submit {
  padding: 12px 25px;
  border: none;
  border-radius: var(--border-radius-small, 8px);
  font-size: 1rem;
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