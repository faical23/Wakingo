<template>
 
    <div class="SideBare">
  <v-card
    class="mx-auto "
    :style="SideBarClicked ? 'width:70px !important' : 'width:250px!important'"
    @click='MoveSideBare("SideBare")'
  >

 

    <v-list :style="SideBarClicked ? 'text-align: center !important;' : 'text-align: start !important;'">
      <!-- Start logo-->
        <v-list-item class="SideBar_Logo ">
          <img  v-if="SideBarClicked " class="logo_img" src="../../assets/img/logo.png" :style="SideBarClicked ? 'width: 100% !important;' : 'width: 25%; !important'">
            <v-list-item-title v-else  class="SideBar_Logo__title" @click='MoveSideBare("SideBare")'>Wakingo</v-list-item-title>
        </v-list-item>
      <!-- end logo-->

      <!-- strat table bord-->
      <router-link to="/">
        <v-list-item  class="First_Header" :style="SideBarClicked ? 'display:block !important;' : 'display:flex !important;'">
         <v-list-item-icon class="SideBar_Icons">
                  <i class="far fa-home-alt"></i>
        </v-list-item-icon>
          <v-list-item-title class="Tableau__bord__title"  :style="SideBarClicked ? 'display:none !important;' : 'display:block !important;'">Tableau de bord</v-list-item-title>
        </v-list-item>
      </router-link>
      <!-- end table bord-->


      <v-list-group
        class="First_Header"
        v-for="(Parent,n) in SideBare"
        :key="n"
      >

        <template v-slot:activator>
        <v-list-item-icon class="SideBar_Icons">
                  <i :class="Parent.icon" ></i>
        </v-list-item-icon>
          <v-list-item-title  :style="SideBarClicked ? 'display:none !important;' : 'display:block !important;'">{{Parent.ParentName}}</v-list-item-title>
        </template>


        <v-list-group
          no-action
          sub-group             
            v-for="(vente,i) in Parent.ChildData"
            :key="(i)"
            :class="['Second_Header', vente.Child ? '' : 'HasNotChidData' ]"

        >
          <template v-slot:activator >
              <v-list-item-content >
                   <router-link :to="vente.Path ? vente.Path : ''">
                       <v-list-item-title>{{vente.FirstChild}}</v-list-item-title>
                    </router-link>
              </v-list-item-content>
          </template>                    
            <v-list-item
                      v-for="(Child,i) in vente.Child"
                      :key="(i)"
                      link
                      class="Third_child"
                    >
                    <router-link :to="Child.Path" >
                        <v-list-item-title >{{Child.SecondChild}}</v-list-item-title>
                    </router-link>
            </v-list-item>
        </v-list-group>

    </v-list-group>




    </v-list>
  </v-card>
    </div>
    
</template>

<script>
  export default {
    data: () => ({
      SideBare:[
          {
            ParentName:'Ventes',
            icon:"fas fa-chart-line",
            ChildData:[
              {
                FirstChild : 'Devis&Proforma',
                Icons : 'mdi-football-helmet',
                Child:[
                  {
                    SecondChild : 'Liste des devis',
                    Path:'/Ventes/ListeDevies'
                  },
                  {
                    SecondChild : 'Nouveau devis&Proforma',
                    Path:'/Ventes/NouveauDevis/Proforma/Create'
                  }
                ]
              },
              {
                FirstChild : 'Commandes clients',
                Icons : 'mdi-account-multiple-outline',
                Child:[
                  {
                    SecondChild : 'Liste des commandes',
                    Path:'/Ventes/ListeCommandes'
                  },
                  {
                    SecondChild : 'Nouvelle commande',
                    Path:'/Ventes/NouvelleCommande/Create'
                  }
                ]
              },
              {
                FirstChild : 'Bons de livraison',
                Icons : 'mdi-account-multiple-outline',
                Child:[
                  {
                    SecondChild : 'Liste des Bons de livraison',
                    Path:'/Ventes/Gestion_des_bons_de_livraison'
                  },
                  {
                    SecondChild : 'Nouvelle  Bons de livraison',
                    Path:'/Ventes/NouvelleBonsDeLivraison/Create'
                  }
                ]
              },
              {
                FirstChild : 'Factures',
                Icons : 'mdi-account-multiple-outline',
                Child:[
                  {
                    SecondChild : 'Liste des Factures',
                    Path:'/Ventes/Gestion_des_Factures'
                  },
                  {
                    SecondChild : 'Nouvelle Factures',
                    Path:'/Ventes/NouvelleFacture/Create'
                  }
                ]
              },
              {
                FirstChild : 'Avoirs',
                Icons : 'mdi-account-multiple-outline',
                Child:[
                  {
                    SecondChild : 'Liste des Avoirs',
                    Path:'/Ventes/Liste_Des_Avoirs'
                  },
                  {
                    SecondChild : 'Nouvelle Avoirs',
                    Path:'/Ventes/NouvelleAvoir/Create'
                  },
                ]
              },
              {
                FirstChild: 'Réglements',
                Icons : 'mdi-account-multiple-outline',
                Path:'/Ventes/Reglement'
              },
              {
                FirstChild: 'Acomptes',
                Icons : 'mdi-account-multiple-outline',
                Path:'/Ventes/Accomptes'
              },
              {
                FirstChild: 'Recettes diverses',
                Icons : 'mdi-account-multiple-outline',
                Path:'/Ventes/Diverses'
              },
              {
                FirstChild: 'Recettes récurrents',
                Icons : 'mdi-account-multiple-outline',
                Path:'/Ventes/Recurrentes'
              },
              {
                FirstChild: 'Regroupment de documents',
                Icons : 'mdi-account-multiple-outline',
                Path:'/Ventes/regroupement_des_document'
              },
              {
                FirstChild: 'Rapport commercial',
                Icons : 'mdi-account-multiple-outline',
                Path:'/Ventes/Rapport_commercial'
              }
            ]
          },
          {
            ParentName:'Achats',
            icon:"fas fa-shopping-cart",
            ChildData:[
              {
                FirstChild : 'Dépenses diverses' ,
                Icons : 'mdi-account-multiple-outline',
                Path : '/Achat/depenses_diverses'
              },
              {
                FirstChild : 'Dépenses récurrents',
                Icons : 'mdi-account-multiple-outline',
                Path : '/Achat/DepensesRecurrents'
              }
            ]
          },
          {
            ParentName:'Trésorerie',
            icon:"fas fa-university",
            ChildData:[
              {
                FirstChild : 'Comptes de trésorerie',
                Icons : 'mdi-account-multiple-outline',
                Path:'/Tresorerie/ComptesTresorerie'
              },
              {
                FirstChild : 'Trésorerie pévisionnelle',
                Icons : 'mdi-account-multiple-outline',
                Path : '/Tresorerie/Tresorerie_previsionnelle'
              },
                            {
                FirstChild : 'Liste des encaissements',
                Icons : 'mdi-account-multiple-outline',
                Path:'/Tresorerie/ListeEncaissements'
              },
              {
                FirstChild : 'Liste des décaissements',
                Icons : 'mdi-account-multiple-outline',
                Path : '/Tresorerie/ListeDecaissements'
              },
                {
                FirstChild : 'Remise en banque',
                Icons : 'mdi-account-multiple-outline',
                Path:'/Tresorerie/RemiseEnBanque'
              },
              {
                FirstChild : 'Rapprochement bancaire',
                Icons : 'mdi-account-multiple-outline',
                Path : '/Tresorerie/Rapprochement_bancaire'
              },
              {
                FirstChild : 'Transferts compte à compte',
                Icons : 'mdi-account-multiple-outline',
                Path : '/Tresorerie/TransfertsCompteAcompte'
              },

            ]
          },
          {
            ParentName:'Contacts',
            icon:"fas fa-address-book",
            ChildData:[
              {
                FirstChild : 'Client' ,
                Icons : 'mdi-account-multiple-outline',
                Child:[
                  {
                    SecondChild : 'Liste des client',
                    Path:'/Contacts/Liste_Clients'
                  },
                  {
                    SecondChild : 'Nouveau Client',
                    Path:'/Clinet/Nouveau Client'
                  }
                ]
              },
              {
                FirstChild : 'Familles de client',
                Icons : 'mdi-account-multiple-outline',
                Path : '/Contacts/famille_client'
              },
              {
                FirstChild : 'Fournisseurs' ,
                Icons : 'mdi-account-multiple-outline',
                Child:[
                  {
                    SecondChild : 'Liste des Fournisseurs',
                    Path:'/Contacts/Liste_fournisseurs'
                  },
                  {
                    SecondChild : 'Nouveau Fournisseurs',
                    Path:'/Clinet/Nouveau Fournisseurs'
                  }
                ]
              },
                {
                FirstChild : 'Familles de Fournisseurs',
                Icons : 'mdi-account-multiple-outline',
                Path : '/Contacts/famille_foursnisseur'
              },
            ]
          },
          {
            ParentName:'Catalogue',
            icon:"fas fa-tags",
            ChildData:[
              {
                FirstChild : 'Articles' ,
                Icons : 'mdi-account-multiple-outline',
                Path : '/Catalogue/Articles'
              },
              {
                FirstChild : "Familles d'articles",
                Icons : 'mdi-account-multiple-outline',
                Path : "/Catalogue/FamilleArticle"
              },
              {
                FirstChild : "Catégories d'articles" ,
                Icons : 'mdi-account-multiple-outline',
                Path : "/Catalogue/CategorieArticle"
              },
              {
                FirstChild : 'Marques',
                Icons : 'mdi-account-multiple-outline',
                Path : '/Catalogue/marque'
              }
              ,
              {
                FirstChild : 'Remises/Promotions',
                Icons : 'mdi-account-multiple-outline',
                Path : '/Catalogue/Remise&Promotions'
              }
            ]
          },
          {
            ParentName:'Force de vente',
            icon:"fas fa-users"
            , ChildData:[
              {
                FirstChild : 'Gestion des commerciaux' ,
                Icons : 'mdi-account-multiple-outline',
                Path : '/force_de_vente/Gestion_des_commerciaux'
              },
              {
                FirstChild : 'Commission par commercial',
                Icons : 'mdi-account-multiple-outline',
                Path : '/force de vente/commition_par_commercial'
              }
            ]
          },
          {
            ParentName:'Gestion de stock',
            icon:"fas fa-archive",
            ChildData:[
              {
                FirstChild : 'Mouvements de stock' ,
                Icons : 'mdi-account-multiple-outline',
                Path : 'Gestion de stock/Mouvements de stock'
              },
              {
                FirstChild : 'Entrées de marchandises',
                Icons : 'mdi-account-multiple-outline',
                Child:[
                  {
                    SecondChild : 'Liste des Entrées',
                    Path:'/Gestion de stock/Liste des Entrées'
                  },
                  {
                    SecondChild : "Nouveau bon d'entrée",
                    Path:"/Gestion de stock/Nouveau bon d'entrée"
                  }
                ]
              },
              {
                FirstChild : 'sorties de marchandises',
                Icons : 'mdi-account-multiple-outline',
                Child:[
                  {
                    SecondChild : 'Liste des sortie',
                    Path:'/Gestion de stock/Liste des sortie'
                  },
                  {
                    SecondChild : "Nouveau bon d'entrée",
                    Path:"/Gestion de stock/Nouveau bon sortie"
                  }
                ]
              },
              {
                FirstChild : 'Inventaires',
                Icons : 'mdi-account-multiple-outline',
                Child:[
                  {
                    SecondChild : 'Liste des Inventaires',
                    Path:'/Gestion de stock/Liste des Inventaires'
                  },
                  {
                    SecondChild : "Saisie d'inventaires",
                    Path:"/Gestion de stock/Saisie d'inventaires"
                  }
                ]
              },
              {
                FirstChild : 'Dépots' ,
                Icons : 'mdi-account-multiple-outline',
                Path : 'Gestion de stock/Dépots'
              },

            ]
          },
          {
            ParentName:'Rapports & Relevés',
            icon:"fas fa-folder-open",
            ChildData:[
              {
                FirstChild : 'Rapport commercial' ,
                Icons : 'mdi-account-multiple-outline',
                Path : 'Rapports & Relevés/Rapport commercial'
              },
              {
                FirstChild : 'Relvé des ventes',
                Icons : 'mdi-account-multiple-outline',
                Path : 'Rapports & Relevés/Relvé des ventes'
              }
            ]
          }
      ],
      SecondChildClicked : '',
      SideBarClicked:false
    }),
    methods:{
      MoveSideBare(ClickFromWhere){
        if(ClickFromWhere === "Initialisation"){
              this.SideBarClicked = true
              if(this.SideBarClicked === true){
              document.querySelectorAll('.v-list-group__header').forEach(element =>{
                  element.style="display:block"
              })
              document.querySelectorAll('.v-list-group__header__append-icon').forEach(element =>{
                  element.style="display:none"
              })
            }
        }
        else if (ClickFromWhere === "SideBare"){
              this.SideBarClicked = false
              document.querySelectorAll('.v-list-group__header').forEach(element =>{
                  element.style="display:flex"
              })
              document.querySelectorAll('.v-list-group__header__append-icon').forEach(element =>{
                  element.style="display:flex"
              })
        }

      }
    },
    mounted(){
      this.MoveSideBare("Initialisation");
    }
  }
</script>
