import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    InsertVendreData : false, 
    InformationVentes : "Empty",
    InformationsArticles : "Empty",
    RemarqueArticle: "Empty",
    Réinitialiser : false,

  },
  mutations: {
    ActiveToInsert(state){
        state.InsertVendreData ? state.InsertVendreData = false : state.InsertVendreData = true
    },
    GetArticles(state,Data){
      state.InformationsArticles= Data
    },
    GetInformationVentes(state,Data){
      state.InformationVentes= Data
    },
    GetRemarqueArticles(state,Data){
      state.RemarqueArticle= Data
    },
    RéinitialiserCompenent(state){
      state.Réinitialiser ? state.Réinitialiser = false : state.Réinitialiser = true
    }
  },
  actions: {
  },
  modules: {
  }
})
