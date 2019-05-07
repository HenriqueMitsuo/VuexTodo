import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// Carrega vuex
Vue.use(Vuex);

// Cria o Storage
export default new Vuex.Store({
    modules:{
        todos
    }
})