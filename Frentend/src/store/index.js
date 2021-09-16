import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    InsertVendreData : false, 
    InformationVentes : "Empty",
    InformationsArticles : "Empty"
  },
  mutations: {
    ActiveToInsert(state){
      state.InsertVendreData = true ;

    },
    GetArticles(state,Data){
      state.InformationsArticles= Data
    },
    GetInformationVentes(state,Data){
      state.InformationVentes= Data
    }
  },
  actions: {
  },
  modules: {
  }
})
