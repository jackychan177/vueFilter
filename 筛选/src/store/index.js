import Vue from 'vue';
import Vuex from 'vuex';
import lineType from './modules/lineType.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    lineType
  }
})