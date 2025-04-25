<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useSalesStore } from '@/stores-pinia/Sales';
import ModalSales from '@/components/sidebar/sections/sales/modalSales/ModalSales.vue';

const salesStore = useSalesStore();
const activeTab = ref('orders');

const openModal = () => {
  salesStore.modalSales = 'sales__modal';
};

const conceptsUpdate = reactive({
  items: [
    { id: 1, name: 'Total de usuarios', value: 362, increase: 112, icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>' },
    { id: 2, name: 'Total de acceso al día', value: 1056, increase: 65, icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-fingerprint"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" /><path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" /><path d="M12 11v2a14 14 0 0 0 2.5 8" /><path d="M8 15a18 18 0 0 0 1.8 6" /><path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" /></svg>' },
    { id: 3, name: 'Total de registroal al día', value: 89, increase: 65, icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" /><path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" /></svg>' },
    { id: 4, name: 'Ventas de productos al día', value: 9496, currency: 'USD', icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-bottle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 1a2 2 0 0 1 1.995 1.85l.005 .15v.5c0 1.317 .381 2.604 1.094 3.705l.17 .25l.05 .072a9.093 9.093 0 0 1 1.68 4.92l.006 .354v6.199a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6.2a9.1 9.1 0 0 1 1.486 -4.982l.2 -.292l.05 -.069a6.823 6.823 0 0 0 1.264 -3.957v-.5a2 2 0 0 1 1.85 -1.995l.15 -.005h2zm.362 5h-2.724a8.827 8.827 0 0 1 -1.08 2.334l-.194 .284l-.05 .069a7.091 7.091 0 0 0 -1.307 3.798l-.003 .125a3.33 3.33 0 0 1 1.975 -.61a3.4 3.4 0 0 1 2.833 1.417c.27 .375 .706 .593 1.209 .583a1.4 1.4 0 0 0 1.166 -.583a3.4 3.4 0 0 1 .81 -.8l.003 .183c0 -1.37 -.396 -2.707 -1.137 -3.852l-.228 -.332a8.827 8.827 0 0 1 -1.273 -2.616z" /></svg>' },
  ]
});


const historyItems = reactive([
  { id: 1, title: 'Nuevo registro', date: '02 Feb 2022 12:43', amount: 400.00, type: 'Transferencia', icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-fingerprint"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" /><path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" /><path d="M12 11v2a14 14 0 0 0 2.5 8" /><path d="M8 15a18 18 0 0 0 1.8 6" /><path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" /></svg>' },
  { id: 2, title: 'Venta de prodcuto', date: '13 Feb 2022 13:45', amount: 15.00, type: 'efectivo', icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-bottle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 1a2 2 0 0 1 1.995 1.85l.005 .15v.5c0 1.317 .381 2.604 1.094 3.705l.17 .25l.05 .072a9.093 9.093 0 0 1 1.68 4.92l.006 .354v6.199a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6.2a9.1 9.1 0 0 1 1.486 -4.982l.2 -.292l.05 -.069a6.823 6.823 0 0 0 1.264 -3.957v-.5a2 2 0 0 1 1.85 -1.995l.15 -.005h2zm.362 5h-2.724a8.827 8.827 0 0 1 -1.08 2.334l-.194 .284l-.05 .069a7.091 7.091 0 0 0 -1.307 3.798l-.003 .125a3.33 3.33 0 0 1 1.975 -.61a3.4 3.4 0 0 1 2.833 1.417c.27 .375 .706 .593 1.209 .583a1.4 1.4 0 0 0 1.166 -.583a3.4 3.4 0 0 1 .81 -.8l.003 .183c0 -1.37 -.396 -2.707 -1.137 -3.852l-.228 -.332a8.827 8.827 0 0 1 -1.273 -2.616z" /></svg>' },
  { id: 3, title: 'Venta de prodcuto', date: '13 Feb 2022 13:45', amount: 250.00, type: 'efectivo', icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-bottle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 1a2 2 0 0 1 1.995 1.85l.005 .15v.5c0 1.317 .381 2.604 1.094 3.705l.17 .25l.05 .072a9.093 9.093 0 0 1 1.68 4.92l.006 .354v6.199a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6.2a9.1 9.1 0 0 1 1.486 -4.982l.2 -.292l.05 -.069a6.823 6.823 0 0 0 1.264 -3.957v-.5a2 2 0 0 1 1.85 -1.995l.15 -.005h2zm.362 5h-2.724a8.827 8.827 0 0 1 -1.08 2.334l-.194 .284l-.05 .069a7.091 7.091 0 0 0 -1.307 3.798l-.003 .125a3.33 3.33 0 0 1 1.975 -.61a3.4 3.4 0 0 1 2.833 1.417c.27 .375 .706 .593 1.209 .583a1.4 1.4 0 0 0 1.166 -.583a3.4 3.4 0 0 1 .81 -.8l.003 .183c0 -1.37 -.396 -2.707 -1.137 -3.852l-.228 -.332a8.827 8.827 0 0 1 -1.273 -2.616z" /></svg>' },

]);
</script>

<template>
  <div class="dashboard">


    <!-- Main Content -->
    <div class="main-content">

      <main class="content">
    

        <div class="row__one">
          <div 
            v-for="concept in conceptsUpdate.items" 
            :key="concept.id" 
            class="card__concept"
          >
            <div class="concept__icon" v-html="concept.icon">
              
            </div>
            <div class="concept__info">
              <p class="concept__name">{{ concept.name }}</p>
              <div class="concept__value">
                <h3>{{ concept.value.toLocaleString() }}</h3>
                <span v-if="concept.increase" class="concept__increase">+{{ concept.increase }}</span>
                <span v-if="concept.currency" class="concept__currency">{{ concept.currency }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="tabs">
          <button 
            :class="['tab', { 'tab--active': activeTab === 'orders' }]"
            @click="activeTab = 'orders'"
          >
            Orders history
          </button>
          <button 
            :class="['tab', { 'tab--active': activeTab === 'personal' }]"
            @click="activeTab = 'personal'"
          >
            Personal information
          </button>
          <button 
            :class="['tab', { 'tab--active': activeTab === 'password' }]"
            @click="activeTab = 'password'"
          >
            Password
          </button>
          <button 
            :class="['tab', { 'tab--active': activeTab === 'payment' }]"
            @click="activeTab = 'payment'"
          >
            Payment details
          </button>
        </div>

        <div class="row__two">
          <div class="card card--balance">
            <div class="card__header">
              <div>
                <h3 class="card__title">Ingresos al mes</h3>
                <p class="card__subtitle">-567.99 MXM</p>
              </div>
              <i class="icon-more-horizontal"></i>
            </div>

            <div class="balance__info">
              <div class="balance__amount">
                <h2>5,000</h2>
                <span class="amount__currency">MXM</span>
              </div>
              <div class="balance__chart">
                <svg viewBox="0 0 100 30">
                  <path d="M0,15 Q20,5 40,20 T80,10 T100,20" fill="none" stroke="#1d75c3" stroke-width="2" />
                  <circle cx="80" cy="10" r="3" fill="#1d75c3" />
                </svg>
              </div>
            </div>

            <button class="btn btn--primary" @click="openModal">Add credit</button>
          </div>

          <div class="card card--payment">
            <div class="card__header">
              <h3 class="card__title">Detalles de pago</h3>
              <i class="icon-more-horizontal"></i>
            </div>

            <div class="payment__info">
              <div class="payment__next">
                <p class="payment__label">Próximo pago $ 400.00 MXM</p>
                <p class="payment__date">Febrero 14, 2022</p>
              </div>
              <div class="payment__chart">
                <div v-for="n in 10" :key="n" class="chart__bar" :style="`height: ${Math.random() * 100}%`"></div>
              </div>
            </div>

            <div class="payment__total">
              <div>
                <p class="payment__label">Total a pagar</p>
                <div class="total__amount">
                  <h2>1200 MXM</h2>
                  <span class="amount__currency">MXM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row__three">
          <div class="history">
            <div class="section__header">
              <h3 class="section__title">History</h3>
              <i class="icon-chevron-right"></i>
            </div>

            <div class="history__items">
              <div v-for="item in historyItems" :key="item.id" class="history__item">
                <div class="item__info">
                  <div class="item__icon" v-html="item.icon">
                    
                  </div>
                  <div>
                    <p class="item__title">{{ item.title }}</p>
                    <p class="item__date">{{ item.date }}</p>
                  </div>
                </div>
                <div class="item__amount" :class="item.type === 'credit' ? 'amount--positive' : 'amount--negative'">
                  <p>{{ item.type === 'credit' ? '+' : '-' }} {{ item.amount.toLocaleString() }}</p>
                  <p class="amount__currency">MXM</p>
                </div>
              </div>
            </div>
          </div>

          <div class="other-things">
            <div class="section__header">
              <h3 class="section__title">Other things</h3>
              <i class="icon-chevron-right"></i>
            </div>

            <div class="other-things__grid">
              <div class="card card--screen-time">
                <div class="card__header">
                  <p class="card__label">Screen time</p>
                  <i class="icon-external-link"></i>
                </div>
                <p class="card__subtitle">Payment details</p>

                <div class="screen-time__chart">
                  <div v-for="n in 7" :key="n" class="chart__column">
                    <div class="chart__bar-container">
                      <div class="chart__bar" :style="`height: ${Math.random() * 100}%`"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card card--total-time">
                <p class="card__label">TOTAL TIME</p>
                <div class="total-time__header">
                  <div>
                    <p class="time__label">This week</p>
                    <p class="time__value">1h 27m</p>
                  </div>
                  <div class="time__action">
                    <i class="icon-chevron-right"></i>
                  </div>
                </div>

                <div class="time__comparison">
                  <div class="comparison__header">
                    <i class="icon-bar-chart"></i>
                    <p>From last week</p>
                  </div>
                  <p class="comparison__value">13%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <ModalSales v-if="salesStore.modalSales === 'sales__modal'" />
  </div>
</template>

<style scoped>
/* Base styles */
.dashboard {
  display: flex;
  overflow: auto;
  background-color: var(--main-botton);

}

/* Main content styles */
.main-content {
  flex: 1;
  overflow-y: auto;
}

.main-content .content > div {
  padding: 20px;
}

.main-content .content  .row__one {
  background-color: var(--body-color);
  padding-bottom: 40px;
  margin-bottom: 0;
}

.main-content .content  .tabs {
  background-color: var(--body-color);
}


.btn {
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.btn--outline {
  border: 1px solid #e5e7eb;
  background-color: transparent;
}

.btn--primary {
  background-color: var(--primary-color);
  color: white;
  width: 100%;
  padding: 10px;
}



.content__title {
  margin-bottom: 24px;
}

.content__title h1 {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.title__id {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.row__one {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.card__concept {
  background-color: var(--dash-card);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 200px;
}

.concept__icon {
  background-color: var(--dash-card-icon);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
}

.concept__name {
  font-size: 12px;
  color: #6b7280;
  margin: 0 0 4px 0;
}

.concept__value {
  display: flex;
  align-items: baseline;
}

.concept__value h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  margin-right: 8px;
  color: var(--dash-card-text);
}

.concept__increase {
  font-size: 12px;
  color: #22c55e;
}

.concept__currency {
  font-size: 12px;
  color: #6b7280;
}

.tabs {
  display: flex;
  gap: 24px;
  border-bottom: 1px solid var(--main-line);
  
  margin-bottom: 24px;
}

.tab {
  background: none;
  border: none;
  padding: 8px 0;
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
  position: relative;
}

.tab--active {
  color: var(--dash-tab-text);
  font-weight: 500;
  border-bottom: 2px solid var(--dash-tab-text);
}

.row__two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

@media (max-width: 1024px) {
  .row__two {
    grid-template-columns: 1fr;
  }
}

.card {
  background-color: var(--dash-card-left);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.card__title {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 4px 0;
  color: var(--dash-card-left-text);
}

.card__subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.card__label {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 4px 0;
}

.balance__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: var(--dash-card-left-text);
}

.balance__amount h2 {
  font-size: 30px;
  font-weight: 700;
  margin: 0;

}

.amount__currency {
  font-size: 12px;
  color: #6b7280;
}

.balance__chart {
  width: 33%;
  height: 48px;
}

.payment__info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.payment__label {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 4px 0;
}

.payment__date {
  font-size: 14px;
  margin: 0;
  color: var(--dash-card-left-text);
}

.payment__chart {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 48px;
  gap: 2px;
}

.chart__bar {
  width: 8px;
  background-color: #8AC3EF;
  opacity: 0.7;
}

.total__amount {
  display: flex;
  align-items: baseline;
  color: var(--dash-card-left-text);
}

.total__amount h2 {
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  margin-right: 4px;
}

.row__three {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 1024px) {
  .row__three {
    grid-template-columns: 1fr;
  }
}

.section__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section__title {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.history__items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.history__item {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.item__info {
  display: flex;
  align-items: center;
}

.item__icon {
  background-color: #f3f4f6;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
}

.item__title {
  font-weight: 500;
  margin: 0 0 4px 0;
}

.item__date {
  font-size: 12px;
  color: #6b7280;
  margin: 0;
}

.item__amount {
  text-align: right;
}

.amount--positive {
  color: #22c55e;
  font-weight: 500;
}

.amount--negative {
  color: #ef4444;
  font-weight: 500;
}

.other-things__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 768px) {
  .other-things__grid {
    grid-template-columns: 1fr;
  }
}

.screen-time__chart {
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin-top: 16px;
}

.chart__column {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
}

.chart__bar-container {
  height: 100%;
  width: 4px;
  background-color: #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.total-time__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.time__label {
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 4px 0;
}

.time__value {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.time__action {
  background-color: var(--primary-color);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.time__comparison {
  margin-top: 16px;
}

.comparison__header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6b7280;
}

.comparison__value {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

/* Icons (you would need to add your own icon font or SVG implementation) */
[class^="icon-"] {
  font-size: 20px;
}
</style>