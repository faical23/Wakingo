import Vue from 'vue'
import VueRouter from 'vue-router'
import TableauDeBord from '../views/TableauDeBord'
import NouvelleDevis from '../views/Ventes/Devis&Proforma/NouveauDevis&Proforma'
import listeDevis from '../views/Ventes/Devis&Proforma/ListeDesDevis.vue'
import profile_card from '../components/navbar/profile_card.vue'
import password from '../components/navbar/password.vue'
import ListeCommandes from '../views/Ventes/CommandesClinets/ListeDesCommandes.vue'
import ListeCommandesLivraison from '../views/Ventes/BonsLivraison/ListeDesBonsLivraison.vue'
import ListeFactures from '../views/Ventes/Factures/ListeDesFacteurs.vue'
import ListeAvoirs from '../views/Ventes/Avoirs/ListeDesAvoires.vue'
import Reglement from '../views/Ventes/Réglements.vue'
import Accomptes from '../views/Ventes/Acomptes.vue'
import Diverses from '../views/Ventes/RecettesDivereses.vue'
import récurrentes from '../views/Ventes/RecettesRécurrents.vue'
import regroupement from '../views/Ventes/RegroupmentDeDocuments.vue'
import Rapport_commercial from '../views/Ventes/RapportCommercial.vue'
import DépensesRecurrents from '../views/Achats/DépensesRécurrents.vue'

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
  },
  {
    path: '/Ventes/ListeDevies',
    name: 'listeDevis',
    component: listeDevis
  },
  {
    path: '/Ventes/Mon-Compte',
    name: 'profile_card',
    component: profile_card
  },
  {
    path: '/Ventes/Mon-mot-de-passe',
    name: 'password',
    component: password
  },
  {
    path: '/Ventes/ListeCommandes',
    name: '/ListeCommandes',
    component: ListeCommandes
  },
  {
    path: '/Ventes/Gestion_des_bons_de_livraison',
    name: '/ListeCommandesLivraison',
    component: ListeCommandesLivraison
  },
  {
    path: '/Ventes/Gestion_des_Factures',
    name: '/ListeFactures',
    component: ListeFactures
  },
  {
    path: '/Ventes/Liste_Des_Avoirs',
    name: '/ListeAvoirs',
    component: ListeAvoirs
  },
  {
    path: '/Ventes/Reglement',
    name: '/Reglement',
    component: Reglement
  },
  {
    path: '/Ventes/Accomptes',
    name: '/Accomptes',
    component: Accomptes
  },
  {
    path: '/Ventes/Diverses',
    name: '/Diverses',
    component: Diverses
  },
  {
    path: '/Ventes/Recurrentes',
    name: '/recurrentes',
    component: récurrentes
  },
  {
    path: '/Ventes/regroupement_des_document',
    name: '/regroupement_des_document',
    component: regroupement
  },
  {
    path: '/Ventes/Rapport_commercial',
    name: '/Rapport_commercial',
    component: Rapport_commercial
  },
  {
    path: '/Achat/DepensesRecurrents',
    name: '/Achat/DepensesRecurrents',
    component: DépensesRecurrents
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
