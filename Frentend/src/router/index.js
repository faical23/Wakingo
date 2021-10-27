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
import Trésorerie_prévisionnelle from '../views/Trésorerie/TrésoreriePrévisionelle.vue'
import RapprochementBancaire from '../views/Trésorerie/RapprochementBancaires.vue'
import RemiseBanque from '../views/Trésorerie/RemiseEnBanque.vue'

import ListeEncaissements from '../views/Trésorerie/ListeDesEncaissements.vue'
import ListeDécaissements from '../views/Trésorerie/ListeDesDécaissements.vue'
import TransfertsCompteAcompte from '../views/Trésorerie/TransfertsCompteDeCompte.vue'
import ListeClients from '../views/Contact/Client/ListeDesClient.vue'
import ListeFournisseur from '../views/Contact/Fournisseurs/ListeDesFournisseurs.vue'
import familleFrounisseur from '../views/Contact/FamillesDeFournisseurs.vue'
import familleClient from '../views/Contact/FamillesDeClient.vue'
import cataloguArticles from '../views/Catalogue/Articles.vue'
import NewArticle from '../views/Catalogue/creatArticle.vue'
import FamilleArticle from '../views/Catalogue/FamillesDarticles.vue'
import CategorieArticle from '../views/Catalogue/CatégoriesDarticles.vue'
import marque from '../views/Catalogue/Marques.vue'
import gestion_commerciaux from '../views/ForceDeVente/GestionDesCommerciaux.vue'
import commition from '../views/ForceDeVente/CommissionParCommercial.vue'
import Mouvement_stock from '../views/GestionDeStock/MouVementsDeStock.vue'
import Liste_entree from '../views/GestionDeStock/EntréesDeMarchandises/ListeDesEntrées.vue'
import Nv_entree from '../views/GestionDeStock/EntréesDeMarchandises/NouveauBonDentrée.vue'
import Liste_des_sorties from '../views/GestionDeStock/SortieDesMarchandises/ListeDesSortie.vue'
import Nv_bon_de_sortie from '../views/GestionDeStock/SortieDesMarchandises/NouveauBonSortie.vue'
import Liste_des_inventaires from '../views/GestionDeStock/Inventaires/ListeDesInventaires.vue'
import Nv_inventaires from '../views/GestionDeStock/Inventaires/SaisieDinventaires.vue'
import Gestion_des_depots from '../views/GestionDeStock/Dépots.vue'
import Rapport_Commercial from '../views/Rapports&Relevés/RapportCommercial.vue'
import Relevé_de_vente from '../views/Rapports&Relevés/RelvéDesVentes.vue'
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
    path: '/Ventes/Rapport_commercial',
    name: '/Rapport_commercial',
    component: Rapport_Commercial
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
    path: '/Contacts/Liste_Clients',
    name: '/Contacts/Liste_Clients',
    component: ListeClients
  },
  {
    path: '/Contacts/Liste_fournisseurs',
    name: '/Contacts/Liste_fournisseurs',
    component: ListeFournisseur
  },
  {
    path: '/Contacts/famille_client',
    name: '/Contacts/famille_client',
    component: familleClient
  },
  {
    path: '/Contacts/famille_foursnisseur',
    name: '/Contacts/famille_foursnisseur',
    component: familleFrounisseur
  },
  {
    path: '/Catalogue/Articles',
    name: '/Catalogue/Articles',
    component: cataloguArticles
  },
  {
    path: '/Catalogue/NewArticle',
    name: '/Catalogue/NewArticle',
    component: NewArticle
  },
  {
    path: '/Catalogue/FamilleArticle',
    name: '/Catalogue/FamilleArticle',
    component: FamilleArticle
  },
  {
    path: '/Catalogue/CategorieArticle',
    name: '/Catalogue/CategorieArticle',
    component: CategorieArticle
  },
  {
    path: '/Catalogue/marque',
    name: '/Catalogue/marque',
    component: marque
  },
  {
    path: '/force_de_vente/Gestion_des_commerciaux',
    name: '/force de vente/Gestion_des_commerciaux',
    component: gestion_commerciaux
  },
  {
    path: '/force_de_vente/commition_par_commercial',
    name: '/force_de_vente/commition_par_commercial',
    component: commition
  },
  {
    path: '/Gestion_de_stock/Mouvement_stock',
    name: '/Gestion_de_stock/Mouvement_stock',
    component: Mouvement_stock
  },
  {
    path: '/Gestion_de_stock/Liste_entree',
    name: '/Gestion_de_stock/Liste_entree',
    component: Liste_entree
  },
  {
    path: '/Gestion_de_stock/Nv_entree',
    name: '/Gestion_de_stock/Nv_entree',
    component: Nv_entree
  },
  {
    path: '/Gestion_de_stock/Liste_des_sorties',
    name: '/Gestion_de_stock/Liste_des_sorties',
    component: Liste_des_sorties
  },
  {
    path: '/Gestion_de_stock/Liste_des_inventaires',
    name: '/Gestion_de_stock/Liste_des_inventaires',
    component: Liste_des_inventaires
  },
  {
    path: '/Gestion_de_stock/Nv_inventaires',
    name: '/Gestion_de_stock/Nv_inventaires',
    component: Nv_inventaires
  },
  {
    path: '/Gestion_de_stock/Gestion_des_depots',
    name: '/Gestion_de_stock/Gestion_des_depots',
    component: Gestion_des_depots
  },
  {
    path: '/Rapport_et_relevé/Relevé_de_vente',
    name: '/Rapport_et_relevé/Relevé_de_vente',
    component: Relevé_de_vente
  },
  {
    path: '/Gestion_de_stock/Nv_bon_de_sortie',
    name: '/Gestion_de_stock/Nv_bon_de_sortie',
    component: Nv_bon_de_sortie
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
