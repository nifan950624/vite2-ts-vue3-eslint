import { createApp } from 'vue';
import { store, key } from './store';
import router from './router';
import datav from '@kjgl77/datav-vue3'
import ElementPlus from 'element-plus';

import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/styles/reset.css';

import App from './App.vue';

const app = createApp(App);

app.use(datav)
app.use(store, key);
app.use(router);
app.use(ElementPlus);

app.mount('#app');
