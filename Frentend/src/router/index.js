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
import Rapport_commercial from '../views/Ventes/RapportCommercial.vue'
import NouvelleCommande from '../views/Ventes/CommandesClinets/NouvelleCommandes.vue'
import NouvelleBonLivraison from '../views/Ventes/BonsLivraison/NouvelleBonLivraison.vue'
import NouvelleFacture from '../views/Ventes/Factures/NouvelleFacteurs.vue'
import NouvelleAvoir from '../views/Ventes/Avoirs/NouvelleAvoir.vue'
import CompteTresorerie from '../views/Trésorerie/ComptesDeTrésorerie.vue' 
import regroupement from '../views/Ventes/RegroupmentDeDocuments.vue'
import Dépenses_diverses from '../views/Achats/DépensesDiverses.vue'
import DépensesRecurrents from '../views/Achats/DépensesRécurrents.vue'
<<<<<<< HEAD
import Trésorerie_prévisionnelle from '../views/Trésorerie/TrésoreriePrévisionelle.vue'
import RapprochementBancaire from '../views/Trésorerie/RapprochementBancaires.vue'
import RemiseBanque from '../views/Trésorerie/RemiseEnBanque.vue'

=======
import ListeEncaissements from '../views/Trésorerie/ListeDesEncaissements.vue'
import ListeDécaissements from '../views/Trésorerie/ListeDesDécaissements.vue'
import TransfertsCompteAcompte from '../views/Trésorerie/TransfertsCompteDeCompte.vue'
>>>>>>> c78323e9e52c962977ea623165a1e70c3f210692
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TableauDeBord',
    component: TableauDeBord
  },
  {
    path: '/Tresorerie/TransfertsCompteAcompte',
    name: 'CompteTresorerie',
    component: TransfertsCompteAcompte
  },
  {
    path: '/Tresorerie/ComptesTresorerie',
    name: 'CompteTresorerie',
    component: CompteTresorerie
  },
  {
    path: '/Tresorerie/ListeEncaissements',
    name: 'ListeEncaissements',
    component: ListeEncaissements
  },
  {
    path: '/Tresorerie/ListeDecaissements',
    name: 'ListeDécaissements',
    component: ListeDécaissements
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
    path: '/Achat/depenses_diverses',
    name: '/Dépenses_diverses',
    component: Dépenses_diverses
  },
  {
    path: '/Tresorerie/Tresorerie_previsionnelle',
    name: '/Trésorerie_prévisionnelle',
    component: Trésorerie_prévisionnelle
  },
  {
    path: '/Tresorerie/RemiseEnBanque',
    name: '/Remise_En_Banque',
    component: RemiseBanque
  },
  {
    
    path: '/Tresorerie/Rapprochement_bancaire',
    name: '/Rapprochement_bancaire',
    component: RapprochementBancaire
  },
  {
    path: '/Achat/DepensesRecurrents',
    name: '/Achat/DepensesRecurrents',
    component: DépensesRecurrents
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
