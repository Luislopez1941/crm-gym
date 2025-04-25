<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
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


const filteredClients = reactive({
  clients:[
  {
    id: '1',
    user_id: 'u1',
    first_name: 'Valeria',
    second_name: 'Isabel',
    first_last_name: 'Montoya',
    second_last_name: 'López',
    profile_image: 'https://randomuser.me/api/portraits/women/1.jpg',
    email: 'valeria.montoya@example.com',
    phone: '+51 999 123 456',
    birth_date: new Date('1993-04-22'),
    address: 'Av. Primavera 123, Lima',
    type_genre: 'Femenino',
    emergency_contact_name: 'Carlos López',
    emergency_contact_number: '+51 999 654 321',
    emergency_contact_relationship: 'Padre',
    notes: 'Prefiere clases de yoga.',
    coach_id: 1,
    membership_id: 3,
    type_membership: 'Premium',
    status: false,
    expiration: '2024-07-22'
  },
  {
    id: '2',
    user_id: 'u2',
    first_name: 'Marco',
    second_name: 'Antonio',
    first_last_name: 'Paredes',
    second_last_name: 'Gómez',
    profile_image: 'https://randomuser.me/api/portraits/men/2.jpg',
    email: 'marco.paredes@example.com',
    phone: '+52 555 888 000',
    birth_date: new Date('1987-10-05'),
    address: 'Col. Roma Norte, CDMX',
    type_genre: 'Masculino',
    emergency_contact_name: 'Laura Gómez',
    emergency_contact_number: '+52 555 999 111',
    emergency_contact_relationship: 'Esposa',
    notes: 'Tiene lesión de rodilla.',
    coach_id: 2,
    membership_id: 2,
    type_membership: 'Premium',
    status: true,
    expiration: '2025-01-30'
  },
  {
    id: '3',
    user_id: 'u3',
    first_name: 'Sofía',
    second_name: null,
    first_last_name: 'Delgado',
    second_last_name: 'Martínez',
    profile_image: 'https://randomuser.me/api/portraits/women/3.jpg',
    email: 'sofia.delgado@example.com',
    phone: '+57 310 123 9876',
    birth_date: new Date('1995-01-15'),
    address: 'Carrera 45, Medellín',
    type_genre: 'Femenino',
    emergency_contact_name: 'Andrea Martínez',
    emergency_contact_number: '+57 310 765 4321',
    emergency_contact_relationship: 'Madre',
    notes: 'Alérgica al polvo.',
    coach_id: null,
    membership_id: 1,
    type_membership: 'Premium',
    status: false,
    expiration: '2024-10-18'
  },
  {
    id: '4',
    user_id: 'u4',
    first_name: 'Luis',
    second_name: 'Fernando',
    first_last_name: 'Reyes',
    second_last_name: 'Quispe',
    profile_image: 'https://randomuser.me/api/portraits/men/4.jpg',
    email: 'luis.reyes@example.com',
    phone: '+56 987 654 321',
    birth_date: new Date('1982-07-30'),
    address: 'Calle Central 89, Santiago',
    type_genre: 'Masculino',
    emergency_contact_name: 'Paola Quispe',
    emergency_contact_number: '+56 123 456 789',
    emergency_contact_relationship: 'Hermana',
    notes: 'Quiere rutina para perder peso.',
    coach_id: 3,
    membership_id: 2,
    type_membership: 'Premium',
    status: true,
    expiration: '2025-05-12'
  },
  {
    id: '5',
    user_id: null,
    first_name: 'Camila',
    second_name: 'Alejandra',
    first_last_name: 'Torres',
    second_last_name: 'Zapata',
    profile_image: 'https://randomuser.me/api/portraits/women/5.jpg',
    email: 'camila.torres@example.com',
    phone: '+54 11 4567 8901',
    birth_date: new Date('2000-11-11'),
    address: 'Palermo, Buenos Aires',
    type_genre: 'Femenino',
    emergency_contact_name: 'Jorge Zapata',
    emergency_contact_number: '+54 11 1234 5678',
    emergency_contact_relationship: 'Padre',
    notes: 'Prefiere entrenamientos al aire libre.',
    coach_id: null,
    membership_id: 3,
    type_membership: 'Premium',
    status: false,
    expiration: '2024-12-15'
  },
  {
    id: '6',
    user_id: 'u6',
    first_name: 'Jorge',
    second_name: 'Enrique',
    first_last_name: 'Navarro',
    second_last_name: 'Suárez',
    profile_image: 'https://randomuser.me/api/portraits/men/6.jpg',
    email: 'jorge.navarro@example.com',
    phone: '+51 998 776 554',
    birth_date: new Date('1990-03-18'),
    address: 'San Miguel, Lima',
    type_genre: 'Masculino',
    emergency_contact_name: 'Lucía Suárez',
    emergency_contact_number: '+51 944 332 110',
    emergency_contact_relationship: 'Esposa',
    notes: 'Entrena 3 veces por semana.',
    coach_id: 2,
    membership_id: 1,
    type_membership: 'Premium',
    status: true,
    expiration: '2024-11-01'
  },
  {
    id: '7',
    user_id: null,
    first_name: 'Natalia',
    second_name: 'Rocío',
    first_last_name: 'Jiménez',
    second_last_name: 'Vega',
    profile_image: 'https://randomuser.me/api/portraits/women/7.jpg',
    email: 'natalia.jimenez@example.com',
    phone: '+57 312 444 2211',
    birth_date: new Date('1998-05-09'),
    address: 'Av. Bolívar 321, Bogotá',
    type_genre: 'Femenino',
    emergency_contact_name: 'Santiago Vega',
    emergency_contact_number: '+57 312 333 4444',
    emergency_contact_relationship: 'Hermano',
    notes: 'Tiene marcapasos, consultar al médico.',
    coach_id: 1,
    membership_id: 2,
    type_membership: 'Premium',
    status: false,
    expiration: '2025-03-15'
  }
]
});



// Función para abrir el modal de registro
const openModal = () => {
  clientsStore.modalClients = 'clients__modal';  // Cambia el estado para abrir el modal
};
// Función para editar un cliente


// Función para limpiar filtros
const clearFilters = () => {
  searchQuery.value = '';
  statusFilter.value = 'all';
  membershipFilter.value = 'all';
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
          <input type="text" placeholder="Buscar por nombre, email o ID..." v-model="searchQuery"
            class="search-input" />
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
      <div class="row__two">
        <div class="table__clients">
          <div class="table__head">
            <div class="thead">
              <div class="th">
                <p>Nombre</p>
              </div>
              <div class="th">
                <p>Email</p>
              </div>
              <div class="th">
                <p>Telefono</p>
              </div>
              <div class="th">
                <p>Membresía</p>
              </div>
              <div class="th">
                <p>Vencimiento</p>
              </div>
              <div class="th">
                <p>Estado</p>
              </div>
              <div>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div class="table__body">
            <div class="tbody__container" v-for="client in filteredClients.clients" :key="client.id">
              <div class="tbody">
                <div class="td">
                  <p class="primary-identifier">{{ client.first_name }} {{ client.second_name }}
                    {{ client.first_last_name }} {{ client.second_last_name }}</p>
                </div>
                <div class="td email">
                  <p >{{ client.email }}</p>
                </div>
                <div class="td">
                  <p >{{ client.phone }}</p>
                </div>
                <div class="td">
                  <p class="secondary-identifier">{{ client.type_membership }}</p>
                </div>
                <div class="td">
                  <p class="tertiary-identifier">{{ client.expiration }}</p>
                </div>
                <div class="td">
                  <p class="active-status" v-if="client.status">Activo</p>
                  <p class="canceled-status" v-else>Inactivo</p>
                </div>
                <div class="td edit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                  </svg>
                </div>
                <div class="td delete">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                    class="icon icon-tabler icons-tabler-filled icon-tabler-trash">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" />
                    <path
                      d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




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

  border-radius: 12px;

  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

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










.table__clients {
  display: grid;
  margin-top: 20px;
  border: 2px solid var(--border-table-color);
  border-radius: 20px;
}


.table__clients .table__head {
  display: flex;
  width: 100%;
  background-color: var(--table-header-color);
  border-radius: 20px 20px 0 0;
}

.table__clients .table__head .thead {
  display: flex;
  width: 100%;

}

.table__clients .table__head .thead {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr)) 50px 50px;
  padding: 10px;
  column-gap: 20px;
  font-weight: 600;
  color: var(--text-table-color);
}

.table__clients .table__body {
  overflow: auto;
  transition-delay: 0.0s;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 5px;
    height: 100px;
  }

  &::-webkit-scrollbar-track {
    /* Para modificar el background */
  }
}


.table__clients .table__body {}

.table__clients .tbody__container {
  border-top: 2px solid var(--border-table-color);
}

.table__clients .tbody__container:nth-child(even) {
  background-color: var(--table-color);
}

.table__clients .tbody__container:nth-child(odd) {
  background-color: var(--two-table-color);
}

.table__clients .tbody__container:first-child {
  border-top: 2px solid var(--border-table-color);
}

.table__clients .tbody__container:last-child {
  border-bottom: none;
  border-radius: 0 0 20px 20px;
}

.table__clients .table__body .tbody {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr)) 50px 50px;
  padding: 10px;
  column-gap: 20px;
  align-items: center;
  color: var(--text-table-color);
}

.table__clients .table__body .tbody .td {
  display: flex;
}

.table__clients .table__body .tbody .td.email {
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
}

.table__clients .table__body .tbody .td.edit {
  color: var(--primary-100);
}

.table__clients .table__body .tbody .td.delete {
  display: flex;
  justify-content: end;
  color: var(--color-red);
}

.table__clients .table__body .tbody:hover {
  background-color: var(--table-hover-color);
  color: #fff;
}

.table__clients .table__body .tbody:hover .td>.folio {
  background-color: #3d86c6;
  color: #ffffff;
}

.table__clients .table__body .tbody:hover .td>.total {
  background-color: #f55041;
  color: #ffffff;
}
</style>