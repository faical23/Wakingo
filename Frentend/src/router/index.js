import Vue from 'vue'
import VueRouter from 'vue-router'
import TableauDeBord from '../views/TableauDeBord'
import NouvelleDevis from '../views/Ventes/Devis&Proforma/NouveauDevis&Proforma'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TableauDeBord',
    component: TableauDeBord
  },
  {
    path: '/Ventes/NouveauDevis/Proforma',
    name: 'NouvelleDevis',
    component: NouvelleDevis
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
