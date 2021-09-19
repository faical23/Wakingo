import Vue from 'vue'
import VueRouter from 'vue-router'
import TableauDeBord from '../views/TableauDeBord'
import NouvelleDevis from '../views/Ventes/Devis&Proforma/NouveauDevis&Proforma'
import listeDevis from '../views/Ventes/Devis&Proforma/ListeDesDevis.vue'
import NouvelleCommande from '../views/Ventes/CommandesClinets/NouvelleCommandes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TableauDeBord',
    component: TableauDeBord
  },
  {
    path: '/Ventes/NouveauDevis/Proforma/Create',
    name: 'NouvelleDevis',
    component: NouvelleDevis,
    children: [
      { path: '/Ventes/NouveauDevis/Proforma/update/:Id', component: NouvelleDevis}
    ]
  },
  {
    path: '/Ventes/ListeDevies',
    name: 'listeDevis',
    component: listeDevis
  },
  {
    path: '/Ventes/NouvelleCommande/Create',
    name: 'NouvelleCommande',
    component: NouvelleCommande,
    children: [
      { path: '/Ventes/NouvelleCommande/update/:Id', component: NouvelleDevis}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
