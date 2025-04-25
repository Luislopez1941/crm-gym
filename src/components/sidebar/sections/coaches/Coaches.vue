<script setup lang="ts">
import { reactive } from 'vue'
import ModalCoaches from './modalCoaches/ModalCoaches.vue';
import { useCoachesStore } from '@/stores-pinia/Coaches';

interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

interface Client {
  id: number;
  first_name: string;
  second_name: string;
  first_last_name: string;
  second_last_name: string;
  profile_image: string;
  email: string;
  phone: string;
  birth_date: string;
  address: string;
  type_genre: string;
  emergency_contact: EmergencyContact;
  notes: string;
  coach_id: number | null;
  membership_id: number | null;
}


const coachesStore = useCoachesStore();



const conceptsUpdate = reactive({
  conceptos: <Client[]>[
    {
      id: 1,
      first_name: 'Carlos',
      second_name: 'Andrés',
      first_last_name: 'Ramírez',
      second_last_name: 'Torres',
      profile_image: 'https://randomuser.me/api/portraits/men/10.jpg',
      email: 'carlos.ramirez@example.com',
      phone: '555-123-4567',
      birth_date: '1990-06-15',
      address: 'Calle 123, Ciudad de México',
      type_genre: 'masculino',
      emergency_contact: {
        name: 'Laura Torres',
        phone: '555-765-4321',
        relationship: 'hermana',
      },
      notes: 'Cliente nuevo, interesado en clases de fuerza.',
      coach_id: 1,
      membership_id: 2,
    },
    {
      id: 2,
      first_name: 'María',
      second_name: 'Elena',
      first_last_name: 'González',
      second_last_name: 'Pérez',
      profile_image: 'https://randomuser.me/api/portraits/women/12.jpg',
      email: 'maria.elena@example.com',
      phone: '555-234-5678',
      birth_date: '1985-03-22',
      address: 'Av. Reforma 456, CDMX',
      type_genre: 'femenino',
      emergency_contact: {
        name: 'José González',
        phone: '555-987-6543',
        relationship: 'esposo',
      },
      notes: 'Requiere atención especial por cirugía reciente.',
      coach_id: 2,
      membership_id: 1,
    },
    {
      id: 3,
      first_name: 'Luis',
      second_name: 'Fernando',
      first_last_name: 'Martínez',
      second_last_name: 'Rojas',
      profile_image: 'https://randomuser.me/api/portraits/men/25.jpg',
      email: 'luis.fernando@example.com',
      phone: '555-345-6789',
      birth_date: '1995-11-05',
      address: 'Carrera 45, Bogotá',
      type_genre: 'masculino',
      emergency_contact: {
        name: 'Ana Rojas',
        phone: '555-123-9876',
        relationship: 'madre',
      },
      notes: '',
      coach_id: 3,
      membership_id: null,
    },
    {
      id: 4,
      first_name: 'Sofía',
      second_name: 'Isabel',
      first_last_name: 'Navarro',
      second_last_name: 'Díaz',
      profile_image: 'https://randomuser.me/api/portraits/women/30.jpg',
      email: 'sofia.navarro@example.com',
      phone: '555-456-7890',
      birth_date: '2000-01-10',
      address: 'Calle 9, Monterrey',
      type_genre: 'femenino',
      emergency_contact: {
        name: 'Carlos Díaz',
        phone: '555-111-2222',
        relationship: 'padre',
      },
      notes: 'Atleta de alto rendimiento.',
      coach_id: null,
      membership_id: 3,
    }
  ]
});


const openModal = () => {
  coachesStore.modalCoaches = 'coaches__modal';  // Cambia el estado para abrir el modal
};

</script>

<template>
  <div class="coaches">
    <div class="coaches__container">
      <div class="row__one">
        <button class="btn__general-primary" @click="openModal">Nuevo entrenador</button>
      </div>
      <div class="row__two">
        <div class="table__coaches">
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
              <div>

              </div>
              <div>

              </div>
            </div>
          </div>
          <div class="table__body">
            <div class="tbody__container" v-for="concept in conceptsUpdate.conceptos" :key="concept.id">
              <div class="tbody">
                <div class="td">
                  <p class="primary-identifier">
                    {{ concept.first_name }} {{ concept.second_name }} {{
                    concept.second_last_name }} {{ concept.second_last_name }}
                  </p>
                </div>
                <div class="td email">
                  <p>{{ concept.email }}</p>
                </div>
                <div class="td">
                  <p>{{ concept.phone }}</p>
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
      <ModalCoaches />
    </div>
  </div>
</template>

<style scoped>
.coaches__container {
  padding: 20px;
}

.coaches__container>.row__one {
  display: flex;
  justify-content: center;
}

.coaches__container {
  padding: 20px;
}










.table__coaches {
  display: grid;
  margin-top: 20px;
  border: 2px solid var(--border-table-color);
  border-radius: 20px;
}


.table__coaches .table__head {
  display: flex;
  width: 100%;
  background-color: var(--table-header-color);
  border-radius: 20px 20px 0 0;
}

.table__coaches .table__head .thead {
  display: flex;
  width: 100%;

}

.table__coaches .table__head .thead {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) 50px 50px;
  padding: 10px;
  column-gap: 20px;
  font-weight: 600;
  color: var(--text-table-color);
}

.table__coaches .table__body {
  overflow: auto;
  transition-delay: 0.0s;
  color: var(--text-table-color);

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


.table__coaches .tbody__container {
  border-top: 2px solid var(--border-table-color);
}

.table__coaches .tbody__container:nth-child(even) {
  background-color: var(--table-color);
}

.table__coaches .tbody__container:nth-child(odd) {
  background-color: var(--two-table-color);
}

.table__coaches .tbody__container:first-child {
  border-top: 2px solid var(--border-table-color);
}

.table__coaches .tbody__container:last-child {
  border-bottom: none;
  border-radius: 0 0 20px 20px;
}


.table__coaches .table__body .tbody {
  display: flex;
}

.table__coaches .table__body .tbody {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) 50px 50px;
  padding: 10px;
  column-gap: 20px;
  align-items: center;

}

.table__coaches .table__body .tbody .td {
  display: flex;

}

.table__coaches .table__body .tbody .td.email {
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
}

.table__coaches .table__body .tbody .td.edit {
  color: var(--primary-100);
}

.table__coaches .table__body .tbody .td.delete {
  display: flex;
  justify-content: end;
  color: var(--color-red);
}


.table__coaches .table__body .tbody .td .inputs__general {
  margin-top: 0;
}

.table__coaches .table__body .tbody:hover {
  background-color: var(--table-hover-color);
  color: #fff;
}
</style>