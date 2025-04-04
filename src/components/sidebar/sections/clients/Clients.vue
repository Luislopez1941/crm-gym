<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import ModalClients from './modalClients/ModalClients.vue';
import { useClientsStore } from '@/stores-pinia/Clients';

// Usando la tienda de Pinia
const clientsStore = useClientsStore();

// Cargar clientes cuando el componente se monta
onMounted(() => {
  // clientsStore.fetchClients();
});

// Estado para búsqueda y filtros
const searchQuery = ref('');
const statusFilter = ref('all');
const membershipFilter = ref('all');

// Clientes filtrados
const filteredClients = computed(() => {
  const clients: any = [
  {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    birthDate: '1990-05-15',
    address: '123 Main St, City, Country',
    membershipType: 'premium',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    emergencyContact: {
      name: 'Jane Doe',
      phone: '987-654-3210',
      relationship: 'Spouse'
    },
    healthInfo: {
      medicalConditions: 'None',
      allergies: 'Peanuts',
      medications: 'None'
    },
    profileImage: null,
    paymentMethod: 'credit_card',
    notes: 'Prefers morning sessions',
    gender: 'male',
    membershipFee: 1000,
    height: '180cm',
    weight: '75kg',
    goals: 'Muscle gain',
    fitnessLevel: 'intermediate',
    preferredTrainingTime: 'morning',
    referredBy: 'Friend',
    occupation: 'Software Engineer',
    fingerprint: true,
    accessCardNumber: 'A123456',
    hasLockerRental: true,
    lockerNumber: 'L12',
    personalTrainer: 'Coach Mike',
    dietaryRestrictions: 'Vegetarian',
    preferredClasses: ['Yoga', 'CrossFit']
  },
  {
    fullName: 'Alice Smith',
    email: 'alicesmith@example.com',
    phone: '555-123-4567',
    birthDate: '1985-10-20',
    address: '456 Another St, City, Country',
    membershipType: 'basic',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    emergencyContact: {
      name: 'Bob Smith',
      phone: '555-987-6543',
      relationship: 'Brother'
    },
    healthInfo: {
      medicalConditions: 'Asthma',
      allergies: 'None',
      medications: 'Inhaler'
    },
    profileImage: null,
    paymentMethod: 'cash',
    notes: 'Prefers evening workouts',
    gender: 'female',
    membershipFee: 500,
    height: '165cm',
    weight: '60kg',
    goals: 'Weight loss',
    fitnessLevel: 'beginner',
    preferredTrainingTime: 'evening',
    referredBy: 'Advertisement',
    occupation: 'Teacher',
    fingerprint: false,
    accessCardNumber: 'B654321',
    hasLockerRental: false,
    lockerNumber: '',
    personalTrainer: '',
    dietaryRestrictions: 'None',
    preferredClasses: ['Pilates', 'Spinning']
  }
];


 
  
  return clients ;
});

// Función para abrir el modal de registro
const openModal = () => {
  clientsStore.modalClients = 'clients__modal';  // Cambia el estado para abrir el modal
};
// Función para editar un cliente
const editClient = () => {
  clientsStore.modalClients = 'clients__modal';
};

// Función para confirmar eliminación
const confirmDelete = (_: number, name: string) => {
  if (confirm(`¿Estás seguro de eliminar al cliente ${name}?`)) {
    clientsStore.modalClients = 'clients__modal';
  }
};

// Función para cambiar el estado de un cliente
const changeStatus = (_: any, newStatus: any) => {
 console.log(newStatus)
};

// Función para limpiar filtros
const clearFilters = () => {
  searchQuery.value = '';
  statusFilter.value = 'all';
  membershipFilter.value = 'all';
};

// Función para formatear fecha
const formatDate = (dateString: any) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-MX', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  }).format(date);
};
</script>

<template>
  <div class="clients">
    <div class="clients__container">
      <!-- Header con título y botón de registro -->
     
      
      <!-- Filtros y búsqueda -->
      <div class="clients__filters">
        <div class="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Buscar por nombre, email o ID..." 
            v-model="searchQuery"
            class="search-input"
          />
        </div>
        
        <div class="filter-group">
          <div class="filter-select">
            <label for="statusFilter">Estado:</label>
            <select id="statusFilter" v-model="statusFilter">
              <option value="all">Todos</option>
              <option value="active">Activos</option>
              <option value="inactive">Inactivos</option>
              <option value="pending">Pendientes</option>
            </select>
          </div>
          
          <div class="filter-select">
            <label for="membershipFilter">Membresía:</label>
            <select id="membershipFilter" v-model="membershipFilter">
              <option value="all">Todas</option>
              <option value="basic">Básica</option>
              <option value="standard">Estándar</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          
          <button class="btn-clear" @click="clearFilters">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Limpiar
          </button>
        
            <button class="btn-primary" @click="openModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Dar de alta
            </button>
    
        </div>
      </div>
      
      <!-- Tabla de clientes -->
      <div class="clients__table-container">
        <!-- Tabla usando divs -->
        <div class="table-wrapper" v-if="filteredClients.length > 0">
          <!-- Encabezado de la tabla -->
          <div class="table-header">
            <div class="table-cell header-cell">ID</div>
            <div class="table-cell header-cell">Nombre</div>
            <div class="table-cell header-cell">Email</div>
            <div class="table-cell header-cell">Teléfono</div>
            <div class="table-cell header-cell">Membresía</div>
            <div class="table-cell header-cell">Vencimiento</div>
            <div class="table-cell header-cell">Estado</div>
            <div class="table-cell header-cell">Acciones</div>
          </div>
          
          <!-- Cuerpo de la tabla -->
          <div class="table-body">
            <div class="table-row" v-for="client in filteredClients" :key="client.id">
              <div class="table-cell client-id" data-label="ID">{{ client.id }}</div>
              <div class="table-cell client-name" data-label="Nombre">
                <div class="client-avatar" v-if="client.profileImage">
                  <img :src="client.profileImage" alt="Foto de perfil" />
                </div>
                <div class="client-avatar" v-else>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                {{ client.fullName }}
              </div>
              <div class="table-cell" data-label="Email">{{ client.email }}</div>
              <div class="table-cell" data-label="Teléfono">{{ client.phone }}</div>
              <div class="table-cell" data-label="Membresía">
                <span class="badge membership-badge" :class="client.membershipType">
                  {{ client.membershipType === 'basic' ? 'Básica' : 
                     client.membershipType === 'standard' ? 'Estándar' : 'Premium' }}
                </span>
              </div>
              <div class="table-cell" data-label="Vencimiento">{{ formatDate(client.endDate) }}</div>
              <div class="table-cell" data-label="Estado">
                <span class="badge status-badge" :class="client.status">
                  {{ client.status === 'active' ? 'Activo' : 
                     client.status === 'inactive' ? 'Inactivo' : 'Pendiente' }}
                </span>
              </div>
              <div class="table-cell actions-cell" data-label="Acciones">
                <div class="action-buttons">
                  <button class="action-btn edit" @click="editClient()" title="Editar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                  
                  <div class="dropdown">
                    <button class="action-btn status" title="Cambiar estado">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </button>
                    <div class="dropdown-content">
                      <button 
                        @click="changeStatus(client.id, 'active')" 
                        :class="{ 'active-option': client.status === 'active' }"
                      >
                        Activo
                      </button>
                      <button 
                        @click="changeStatus(client.id, 'inactive')" 
                        :class="{ 'active-option': client.status === 'inactive' }"
                      >
                        Inactivo
                      </button>
                      <button 
                        @click="changeStatus(client.id, 'pending')" 
                        :class="{ 'active-option': client.status === 'pending' }"
                      >
                        Pendiente
                      </button>
                    </div>
                  </div>
                  
                  <button class="action-btn delete" @click="confirmDelete(client.id, client.fullName)" title="Eliminar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Estado vacío -->
        <!-- <div class="empty-state" v-else-if="!clientsStore.isLoading">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <p>No se encontraron clientes</p>
          <button class="btn-primary" @click="openModal">Registrar Cliente</button>
        </div> -->
        
        <!-- Estado de carga -->
        <div class="loading-state" v-else>
          <div class="spinner"></div>
          <p>Cargando clientes...</p>
        </div>
      </div>
      
      <!-- Estadísticas rápidas -->
      <!-- <div class="clients__stats" v-if="clientsStore.clients.length > 0">
        <div class="stat-card">
          <div class="stat-icon active">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="stat-info">
            <h3>{{ clientsStore.activeClients.length }}</h3>
            <p>Clientes Activos</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon inactive">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <line x1="5" y1="12" x2="13" y2="12"></line>
            </svg>
          </div>
          <div class="stat-info">
            <h3>{{ clientsStore.inactiveClients.length }}</h3>
            <p>Clientes Inactivos</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon premium">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <div class="stat-info">
            <h3>{{ clientsStore.clients.filter(c => c.membershipType === 'premium').length }}</h3>
            <p>Membresías Premium</p>
          </div>
        </div>
      </div> -->
    </div>
    
    <!-- Componente Modal -->
    <ModalClients />
  </div>
</template>

<style scoped>
.clients {
  width: 100%;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.clients__container {
  background-color: var(--sidebar-color, #fff);
  border-radius: var(--border-radius-checker, 12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

/* Header styles */
.clients__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header__title {
  margin: 0;
  color: var(--primary-100, #4A90E2);
  font-size: 1.8rem;
  font-weight: 600;
}

.header__subtitle {
  margin: 5px 0 0 0;
  color: var(--text-color, #707070);
  font-size: 0.95rem;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: var(--primary-100, #4A90E2);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--primary-200, #1d75c3);
}

/* Filters styles */
.clients__filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.search-box {
  display: flex;
  align-items: center;
  background-color: var(--input-color, #D9D9D9);
  border-radius: 5px;
  padding: 0 15px;
  flex: 1;
  max-width: 400px;
}

.search-box svg {
  color: var(--text-color, #707070);
  margin-right: 10px;
}

.search-input {
  background: transparent;
  border: none;
  outline: none;
  padding: 12px 0;
  width: 100%;
  color: var(--text-color, #707070);
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-select {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-select label {
  color: var(--text-color, #707070);
  font-size: 0.9rem;
}

.filter-select select {
  background-color: var(--input-color, #D9D9D9);
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  color: var(--text-color, #707070);
  outline: none;
  cursor: pointer;
}

.btn-clear {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  background-color: transparent;
  color: var(--text-color, #707070);
  border: 1px solid var(--input-color, #D9D9D9);
  border-radius: var(--border-radius-small, 8px);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-clear:hover {
  background-color: var(--input-color, #D9D9D9);
}




/* Estilos para la tabla con divs */
.clients__table-container {
  overflow-x: auto;
  background-color: var(--table-color);
  border: 2px solid var(--border-table-color);
  border-radius: var(--border-radius-checker);
  padding: 0 15px;
}

.table-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.table-header {
  display: flex;
  border-bottom: 2px solid #212121;
}

.table-body {
  display: flex;
  flex-direction: column;
}

.table-row {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s ease;
}

.table-row:hover {
  background-color: rgba(138, 195, 239, 0.1);
}

.table-cell {
  padding: 15px;
  flex: 1;
  color: var(--text-color, #707070);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.header-cell {
  font-weight: 600;
}

/* Ajustes de ancho para columnas específicas */
.table-cell:nth-child(1) { /* ID */
  flex: 0 0 60px;
}

.table-cell:nth-child(2) { /* Nombre */
  flex: 2;
}

.table-cell:nth-child(3), /* Email */
.table-cell:nth-child(4) { /* Teléfono */
  flex: 1.5;
}

.table-cell:nth-child(5), /* Membresía */
.table-cell:nth-child(6), /* Vencimiento */
.table-cell:nth-child(7) { /* Estado */
  flex: 1;
}

.actions-cell {
  flex: 0 0 120px;
  justify-content: flex-end;
}

.client-id {
  font-family: monospace;
  font-weight: 600;
  color: var(--primary-200, #1d75c3) !important;
}

.client-name {
  display: flex;
  align-items: center;
  gap: 10px;
}

.client-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary-color, #8ac3ef);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
  flex-shrink: 0;
}

.client-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  display: inline-block;
  padding: 5px 10px;
  border-radius: var(--border-radius-pill, 30px);
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
}

.membership-badge {
  min-width: 80px;
}

.membership-badge.basic {
  background-color: #e0e0e0;
  color: #707070;
}

.membership-badge.standard {
  background-color: var(--primary-100, #4A90E2);
  color: white;
}

.membership-badge.premium {
  background-color: var(--accent-100, #FFCC00);
  color: #333;
}

.status-badge {
  min-width: 80px;
}

.status-badge.active {
  background-color: #4CAF50;
  color: white;
}

.status-badge.inactive {
  background-color: #F44336;
  color: white;
}

.status-badge.pending {
  background-color: #FF9800;
  color: white;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.action-btn.edit {
  color: var(--primary-100, #4A90E2);
}

.action-btn.status {
  color: var(--text-color, #707070);
}

.action-btn.delete {
  color: #F44336;
}

.action-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Dropdown styles */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: var(--sidebar-color, #FFF);
  min-width: 120px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: var(--border-radius-small, 8px);
  overflow: hidden;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content button {
  color: var(--text-color, #707070);
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  text-align: left;
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.dropdown-content button:hover {
  background-color: var(--primary-color-light, #F6F5FF);
}

.dropdown-content button.active-option {
  background-color: var(--primary-color-light, #F6F5FF);
  color: var(--primary-100, #4A90E2);
  font-weight: 500;
}

/* Empty state styles */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  color: var(--text-color, #707070);
}

.empty-state svg {
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-state p {
  margin-bottom: 20px;
  font-size: 1.1rem;
}

/* Loading state styles */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  color: var(--text-color, #707070);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--primary-100, #4A90E2);
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Estilos responsivos para la tabla */
@media (max-width: 992px) {
  .table-cell {
    padding: 12px 10px;
  }
}


@media (max-width: 576px) {
  .table-cell:before {
    width: 100px;
  }
  
  .table-cell {
    padding-left: 120px;
  }
}
/* Responsive styles */
@media (max-width: 992px) {
  .clients__filters {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .search-box {
    max-width: 100%;
    width: 100%;
  }
  
  .filter-group {
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 768px) {
  .clients__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .filter-group {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .filter-select {
    width: 100%;
  }
  
  .filter-select select {
    flex: 1;
  }
  
  .btn-clear {
    width: 100%;
    justify-content: center;
  }
  
  .clients__stats {
    grid-template-columns: 1fr;
  }

  .table-header {
    display: none; /* Ocultar encabezado en móvil */
  }
  
  .table-row {
    flex-direction: column;
    padding: 15px 0;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .table-cell {
    padding: 8px 15px;
    border-bottom: none;
    position: relative;
  }
  
  .table-cell:before {
    content: attr(data-label);
    position: absolute;
    left: 15px;
    width: 120px;
    font-weight: 600;
    color: var(--primary-100, #4A90E2);
  }
  
  .table-cell {
    padding-left: 140px;
    justify-content: flex-start;
  }
  
  .table-cell:nth-child(1),
  .table-cell:nth-child(2),
  .table-cell:nth-child(3),
  .table-cell:nth-child(4),
  .table-cell:nth-child(5),
  .table-cell:nth-child(6),
  .table-cell:nth-child(7),
  .table-cell:nth-child(8) {
    flex: 1;
  }
  
  .actions-cell {
    justify-content: flex-start;
  }
}

@media (max-width: 576px) {
  .clients {
    padding: 15px;
  }
  
  .clients__container {
    padding: 15px;
  }
}
</style>