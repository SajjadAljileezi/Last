
import Vue from 'vue';
import router from './router'
require('./bootstrap');
import store from "./store";

window.Vue = require('vue');


Vue.use(store);



const app = new Vue({
    el: '#app',
    router,
    store,




});
