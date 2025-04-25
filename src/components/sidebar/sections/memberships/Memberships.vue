<script setup lang="ts">
import { reactive } from 'vue'
import { useMembershipsStore } from '@/stores-pinia/Memberships';
import ModalMemberships from './modalMemberships/ModalMemberships.vue';

const membershipsStore = useMembershipsStore();

const conceptsUpdate = reactive({
  conceptos: [
    {
      id: 1,
      name_menresia: 'Basic Fit',
      duration: '1 mes',
      price: '15.99',
      benefits: 'Acceso a gimnasio, 1 clase grupal semanal',
    },
    {
      id: 2,
      name_menresia: 'Premium Plus',
      duration: '3 meses',
      price: '39.99',
      benefits: 'Acceso completo, clases ilimitadas, entrenador personalizado',
    },
    {
      id: 3,
      name_menresia: 'Student Pack',
      duration: '6 meses',
      price: '49.99',
      benefits: 'Descuento estudiante, acceso completo, 2 invitaciones mensuales',
    },
    {
      id: 4,
      name_menresia: 'Family Fit',
      duration: '1 año',
      price: '99.99',
      benefits: 'Hasta 4 personas, piscina, zona wellness',
    },
    {
      id: 5,
      name_menresia: 'Weekend Warrior',
      duration: '1 mes (fines de semana)',
      price: '9.99',
      benefits: 'Acceso solo fines de semana, clases grupales',
    }
  ]
});

const openModal = () => {
  membershipsStore.modalMemberships = 'memberships__modal';
};

</script>

<template>
  <div class="memberships">
    <div class="memberships__container">
      <div class="row__one">
        <button class="btn__general-primary" @click="openModal">Crear nueva membresia</button>
      </div>
      <div class="row__two">
        <div class="table__memberships">
          <div class="table__head">
            <div class="thead">
              <div class="th">
                <p>Nombre de membresia</p>
              </div>
              <div class="th">
                <p>Duración</p>
              </div>
              <div class="th">
                <p>Precio</p>
              </div>
              <div class="th">
                <p>Descripción</p>
              </div>
              <div>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div class="table__body">
            <div class="tbody__container" v-for="membership in conceptsUpdate.conceptos" :key="membership.id">
              <div class="tbody">
                <div class="td">
                  <p class="primary-identifier">{{membership.name_menresia}}</p>
                </div>
                <div class="td">
                  <p class="">{{membership.duration}}</p>
                </div>
                <div class="td">
                  <p class="secondary-identifier">$ {{membership.price}}</p>
                </div>
                <div class="td">
                  <p class="">{{membership.benefits}}</p>
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
      <ModalMemberships />
    </div>
  </div>
</template>

<style scoped>
.memberships__container {
  padding: 20px;
}


.memberships__container .row__one {
  display: flex;
  justify-content: center;
}










.table__memberships {
  display: grid;
  margin-top: 20px;
  border: 2px solid var(--border-table-color);
  border-radius: 20px;
}


.table__memberships .table__head {
  display: flex;
  width: 100%;
  background-color: var(--table-header-color);
  border-radius: 20px 20px 0 0;
}

.table__memberships .table__head .thead {
  display: flex;
  width: 100%;

}

.table__memberships .table__head .thead {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) 100px 100px;
  padding: 10px;
  column-gap: 20px;
  font-weight: 600;
  color: var(--text-table-color);
}

.table__memberships .table__body {
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


.table__memberships .table__body {}

.table__memberships .tbody__container {
  border-top: 2px solid var(--border-table-color);
}

.table__memberships .tbody__container:nth-child(even) {
  background-color: var(--table-color);
}

.table__memberships .tbody__container:nth-child(odd) {
  background-color: var(--two-table-color);
}

.table__memberships .tbody__container:first-child {
  border-top: 2px solid var(--border-table-color);
}

.table__memberships .tbody__container:last-child {
  border-bottom: none;
  border-radius: 0 0 20px 20px;
}

.table__memberships .table__body .tbody {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)) 100px 100px;
  padding: 10px;
  column-gap: 20px;
  align-items: center;
  color: var(--text-table-color);
}

.table__memberships .table__body .tbody .td {
  display: flex;
}

.table__memberships .table__body .tbody .td.edit {
  color: var(--primary-100);
}

.table__memberships .table__body .tbody .td.delete {
  color: var(--color-red);
}

.table__memberships .table__body .tbody .td>.by-user {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  color: #5c6c85;
  font-weight: 500;
}



.table__memberships .table__body .tbody .td>.folio {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: #3d86c62c;
  border-radius: 5px;
  font-weight: 600;
  /* outline: 2px solid var(--primary-100); */
  color: var(--primary-100);
}

.table__memberships .table__body .tbody .td>.total {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: #ff6e611f;
  border-radius: 5px;
  font-weight: 600;
  /* outline: 2px solid var(--primary-100); */
  color: var(--accent-300);
}




.table__memberships .table__body .tbody .td.delete {
  display: flex;
  justify-content: end;
}

.table__memberships .table__body .tbody .td .inputs__general {
  margin-top: 0;
}

.table__memberships .table__body .tbody:hover {
  background-color: var(--table-hover-color);
  color: #fff;
}

.table__memberships .table__body .tbody:hover .td>.folio {
  background-color: #3d86c6;
  color: #ffffff;
}

.table__memberships .table__body .tbody:hover .td>.total {
  background-color: #f55041;
  color: #ffffff;
}
</style>