import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './routes/index';

const app = createApp(App);
app.use(router); // Usa el router en tu aplicación
app.use(createPinia());
app.mount('#app');