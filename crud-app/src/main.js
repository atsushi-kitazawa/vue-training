import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "semantic-ui-css/semantic.min.css";

var data = []
var app = createApp(App)
app.config.globalProperties.inMemoryDB = data
app.use(router).mount('#app')
