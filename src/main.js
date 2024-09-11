import './style.css';

import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.use(createPinia());
app.mount('#app');
