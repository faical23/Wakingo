import Vue from 'vue'
import VueRouter from 'vue-router'
import TableauDeBord from '../views/TableauDeBord'
import NouvelleDevis from '../views/Ventes/Devis&Proforma/NouveauDevis&Proforma'
import listeDevis from '../views/Ventes/Devis&Proforma/ListeDesDevis.vue'
import NouvelleCommande from '../views/Ventes/CommandesClinets/NouvelleCommandes.vue'
import NouvelleBonLivraison from '../views/Ventes/BonsLivraison/NouvelleBonLivraison.vue'
import NouvelleFacture from '../views/Ventes/Factures/NouvelleFacteurs.vue'
import NouvelleAvoir from '../views/Ventes/Avoirs/NouvelleAvoir.vue'

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
      { path: '/Ventes/NouveauDevis/Proforma/Update/:code', component: NouvelleDevis}
    ]
  },
  {
    path: '/Ventes/NouvelleCommande/Create',
    name: 'NouvelleCommande',
    component: NouvelleCommande,
    children: [
      { path: '/Ventes/NouvelleCommande/Update/:Id', component: NouvelleCommande},
      { path: '/Ventes/NouvelleCommande/NewCommande/:Id', component: NouvelleCommande}

    ]
  },
  {
    path: '/Ventes/NouvelleBonsDeLivraison/Create',
    name: 'NouvelleCommande',
    component: NouvelleBonLivraison,
    children: [
      { path: '/Ventes/NouvelleBonsDeLivraison/Update/:Id', component: NouvelleBonLivraison},
      { path: '/Ventes/NouvelleBonsDeLivraison/NewBonlivraison/:Id', component: NouvelleBonLivraison}

    ]
  },
  {
    path: '/Ventes/NouvelleFacture/Create',
    name: 'NouvelleCommande',
    component: NouvelleFacture,
    children: [
      { path: '/Ventes/NouvelleFacture/Update/:Id', component: NouvelleFacture},
      { path: '/Ventes/NouvelleFacture/NouvelleFacture/:Id', component: NouvelleFacture}

    ]
  },
  {
    path: '/Ventes/NouvelleAvoir/Create',
    name: 'NouvelleCommande',
    component: NouvelleAvoir,
    children: [
      { path: '/Ventes/NouvelleAvoir/Update/:Id', component: NouvelleAvoir},
      { path: '/Ventes/NouvelleAvoir/NouvelleAvoir/:Id', component: NouvelleAvoir}

    ]
  },
  {
    path: '/Ventes/ListeDevies',
    name: 'listeDevis',
    component: listeDevis
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
