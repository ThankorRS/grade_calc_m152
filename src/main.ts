import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faCirclePlus);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
