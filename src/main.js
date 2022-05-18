import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/header_footer/Header_Comp.vue';
import Footer from './components/header_footer/Footer_Comp.vue';
import Loader_Comp from './components/Utils/loader_Comp.vue';
import Toaster from '@meforma/vue-toaster'
const app =  createApp(App);

app.component('app-header',Header);
app.component('app-loader',Loader_Comp);
app.component('app-footer',Footer);
app.use(Toaster);
app.mount('#app')
