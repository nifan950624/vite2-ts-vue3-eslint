import { createApp } from 'vue';
import {createPinia} from 'pinia';
import router from './router';
import ElementPlus from 'element-plus';
import CountTo from  'vue3-count-to'
import DataVVue3 from '@kjgl77/datav-vue3'

import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/styles/reset.css';

import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(CountTo);
app.use(DataVVue3);

app.mount('#app');
