import { createApp } from 'vue';
import App from './App.vue';
import router from './Route';  // Import your router

createApp(App)
  .use(router)  // Use the router
  .mount('#app');
