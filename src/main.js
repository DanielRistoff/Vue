import { createApp } from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'

//registrado de forma global
createApp(App)
    .component('app-contadores', Contadores)
    .mount('#app')
