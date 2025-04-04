<script setup lang="ts">
import { ref } from 'vue';

const userData = ref({
  fullName: "Juan Pérez",
  profileImage: "", // Aquí podrías poner una URL de imagen
  email: "juan.perez@example.com",
  phone: "+1 234 567 890",
  birthDate: "1995-08-15",
  address: "Av. Siempre Viva 742, Springfield",
  userId: "USR12345",
  lastLogin: "2024-04-02 14:30:00"
});

// Datos de membresía
const membershipData = ref({
  type: "Premium",
  startDate: "2023-01-15",
  endDate: "2024-12-31",
  status: "Activa",
  paymentStatus: "Al día"
});

// Datos de asistencia
const attendanceHistory = ref([
  { date: "2024-04-01", time: "08:15", duration: "1h 30m" },
  { date: "2024-03-30", time: "17:45", duration: "2h 00m" },
  { date: "2024-03-28", time: "19:20", duration: "1h 15m" },
]);

// Estado de verificación de huella
const fingerprintStatus = ref("Verificado");


// Función para formatear fecha
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

// Modo oscuro
const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
};
</script>

<template>
  <div class="checker" :class="{ 'dark-mode': isDarkMode }">
    <div class="checker__container">
      <div class="left">
        <div class="profile__card">
          <div class="profile__image">
            <img v-if="userData.profileImage" :src="userData.profileImage" alt="Foto de perfil" />
            <div v-else class="profile__image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="icon">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
          </div>
          
          <div class="profile__id-card">
            <div class="id-card__content">
              <div class="id-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div class="id-card__details">
                <div class="id-card__top">
                  <span class="id-card__number">{{ userData.userId }}</span>
                  <span class="id-card__membership">{{ membershipData.type }}</span>
                </div>
                <div class="id-card__bottom">
                  <span class="id-card__dates">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Válido hasta: {{ formatDate(membershipData.endDate) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="profile__dates">
            <h3 class="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle> </svg>
              Información Personal
            </h3>
            <div class="profile__info-list">
              <div class="info-item">
                <span class="info-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path> <polyline points="22,6 12,13 2,6"></polyline></svg>
                  Correo
                </span>
                <p class="info-value">{{ userData.email }}</p>
              </div>
              <div class="info-item">
                <span class="info-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Teléfono
                </span>
                <p class="info-value">{{ userData.phone }}</p>
              </div>
              <div class="info-item">
                <span class="info-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Fecha de Nacimiento
                </span>
                <p class="info-value">{{ formatDate(userData.birthDate) }}</p>
              </div>
              <div class="info-item">
                <span class="info-label">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Dirección
                </span>
                <p class="info-value">{{ userData.address }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="right">
        <div class="fingerprint-section">
          <div class="section-header">
            <h3 class="section-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839-1.132c.449-1.29.69-2.652.69-4.148 0-4.047-2.267-7.435-5.345-7.9m2.094 13.175a21.91 21.91 0 01-3.434 3.925m-4.409.973a20.908 20.908 0 01-3.476-2.979 21.96 21.96 0 01-3.212-4.354"></path>
              </svg>
              Verificación de Huella
            </h3>
            <button class="theme-toggle" @click="toggleDarkMode">
              <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
          </div>
          <div class="fingerprint-container">
            <div class="fingerprint-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839-1.132c.449-1.29.69-2.652.69-4.148 0-4.047-2.267-7.435-5.345-7.9m2.094 13.175a21.91 21.91 0 01-3.434 3.925m-4.409.973a20.908 20.908 0 01-3.476-2.979 21.96 21.96 0 01-3.212-4.354"></path>
              </svg>
            </div>
            <div class="fingerprint-status">
              <p>Coloca tu dedo en el lector para verificar tu identidad</p>
              <div class="status-indicator-large" :class="{ 'status-active': fingerprintStatus === 'Verificado' }"></div>
            </div>
          </div>
        </div>
        
        <div class="membership-status">
          <h3 class="section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            Estado de Membresía
          </h3>
          <div class="status-card" :class="{ 'status-active': membershipData.status === 'Activa' }">
            <div class="status-details">
              <h4>{{ membershipData.status }}</h4>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Tipo: <strong>{{ membershipData.type }}</strong>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Vence: <strong>{{ formatDate(membershipData.endDate) }}</strong>
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                Pagos: <strong>{{ membershipData.paymentStatus }}</strong>
              </p>
            </div>
          </div>
        </div>
        
        <div class="attendance-history">
          <h3 class="section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Historial de Asistencia
          </h3>
          <div class="attendance-list">
            <div v-for="(record, index) in attendanceHistory" :key="index" class="attendance-item">
              <div class="attendance-date">
                <span class="day">{{ record.date.split('-')[2] }}</span>
                <span class="month">{{ new Date(record.date).toLocaleString('es-ES', { month: 'short' }) }}</span>
              </div>
              <div class="attendance-details">
                <p class="attendance-time">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {{ record.time }}
                </p>
                <p class="attendance-duration">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  {{ record.duration }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.checker {
  width: 100%;
  min-height: 100vh;
  background-color: var(--body-color);
  padding: 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-color);
  transition: var(--tran-04);
}

.checker.dark-mode {
  --body-color: #1e1e1e;
  --sidebar-color: #171717;
  --primary-color-light: #3A3B3C;
  --toggle-color: #FFF;
  --text-color: #CCC;
  --input-color: #3c3d46;
  --purple-color: #6a60b6;
  --background-color: #1e1e1e;
}

.checker__container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 25px;
  margin-top: 15px;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.profile__card {
  background-color: var(--sidebar-color);
  border-radius: var(--border-radius-checker);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.profile__image {
  width: 100%;
  height: 200px;
  background-color: var(--primary-color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.profile__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile__image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  cursor: pointer;
  transition: background-color 0.3s;
}

.profile__id-card {
  margin: 15px;
  background: linear-gradient(135deg, var(--primary-100) 0%, var(--primary-200) 100%);
  border-radius: var(--border-radius-checker);
  padding: 15px;
  color: var(--text-100);
  box-shadow: 0 8px 20px rgba(74, 144, 226, 0.2);
}

.id-card__content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.id-card__icon {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.id-card__details {
  flex: 1;
}

.id-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.id-card__number {
  font-size: 0.8rem;
  opacity: 0.9;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 3px 8px;
  border-radius: 12px;
}

.id-card__membership {
  font-size: 1.2rem;
  font-weight: 600;
}

.id-card__bottom {
  display: flex;
  align-items: center;
}

.id-card__dates {
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.profile__dates {
  padding: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: var(--primary-100);
  position: relative;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--accent-100);
  border-radius: 3px;
}

.profile__info-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-item {
  display: flex;;
  padding: 12px;
  border-radius: var(--border-radius-small);
  background-color: var(--primary-color-light);
  transition: transform 0.2s;
}

.info-item:hover {
  transform: translateY(-2px);
}

.info-label {
  font-size: 0.85rem;
  color: var(--text-color);
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.info-value {
  font-size: 0.95rem;
  margin: 0;
  padding-left: 10px;
}

.right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 25px;
}

.fingerprint-section {
  grid-column: span 2;
  background-color: var(--sidebar-color);
  border-radius: var(--border-radius-checker);
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.membership-status,
.attendance-history {
  background-color: var(--sidebar-color);
  border-radius: var(--border-radius-checker);
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.fingerprint-container {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 25px;
  background-color: var(--primary-color-light);
  border-radius: var(--border-radius-checker);
}

.fingerprint-icon {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-100);
  background-color: var(--sidebar-color);
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.fingerprint-status {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.fingerprint-status p {
  margin: 0;
  font-size: 0.95rem;
  text-align: center;
}

.status-indicator-large {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--text-color);
}

.status-indicator-large.status-active {
  background-color: var(--accent-100);
  box-shadow: 0 0 15px var(--accent-100);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 204, 0, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(255, 204, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 204, 0, 0);
  }
}

.status-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: var(--border-radius-checker);
  background-color: var(--primary-color-light);
  border-left: 4px solid #ccc;
}

.status-card.status-active {
  border-left-color: var(--accent-100);
}

.status-details h4 {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  color: var(--primary-100);
}

.status-details p {
  margin: 8px 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.attendance-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 200px;
  overflow-y: auto;
}

.attendance-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-radius: var(--border-radius-small);
  background-color: var(--primary-color-light);
  transition: transform 0.2s;
}

.attendance-item:hover {
  transform: translateX(5px);
  background-color: var(--item-hover);
}

.attendance-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--primary-100);
  color: var(--text-100);
  border-radius: var(--border-radius-small);
}

.day {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1;
}

.month {
  font-size: 0.7rem;
  text-transform: uppercase;
}

.attendance-details {
  flex: 1;
}

.attendance-time {
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

.attendance-duration {
  font-size: 0.85rem;
  color: var(--text-color);
  margin: 5px 0 0 0;
  display: flex;
  align-items: center;
  gap: 5px;
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  background-color: var(--primary-color-light);
  transition: var(--tran-03);
}

.theme-toggle:hover {
  background-color: var(--item-hover);
}

/* Responsive styles */
@media (max-width: 1024px) {
  .checker__container {
    grid-template-columns: 1fr;
  }
  
  .right {
    grid-template-columns: 1fr;
  }
  
  .fingerprint-section {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .theme-toggle {
    align-self: flex-end;
  }
}

body.dark {
  --item-hover: #8ec2e318;
  --body-color: #1e1e1e;
  --sidebar-color: #171717;
  --primary-color-light: #3A3B3C;
  --toggle-color: #FFF;
  --text-color: #CCC;
  --input-color: #3c3d46;
  --purple-color: #6a60b6;
  --background-color: #1e1e1e;
}
</style>