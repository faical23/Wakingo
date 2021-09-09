<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Gestion des devis / Proforma </h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Gestion des devis / Proforma</span>
                        </div>
                        <div >
                        
                        </div>
                        
                    </div>
                    
                </div>
                <div class="card">
                <v-card flat dense >
                    <v-card-title class="text-p blue lighten-4  black--text">
                        <v-icon>
                            mdi-file-search
                        </v-icon>
                      Recherche rapide
                    </v-card-title>
                    <div>
                        
                    <v-card-text>
                            <Liste />   
                    </v-card-text>
                    </div>
                   
                </v-card>
                 <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    >     
                    <v-btn
                        color="primary"
                        elevation="1"
                        class="bnt" 
                        >
                        <v-icon>
                            mdi-plus-thick
                        </v-icon>
                        Nouveau bon de livraison
                        </v-btn>
                    </router-link>
                    <Table />
            </div>
            </div>
      </div>
    
  </div>
                
</template>

<script>
  import SideBar from '../../../components/SideBar/Index.vue'
  // import InformationsProduit from '../../../components/InformationsProduits.vue'
  import  Liste from '../../../components/liste.vue'
  import NaVBar from '../../../components/navbar.vue'
  import Table from '../../../components/table.vue'
  export default {
    name: 'Home',


    data: () => ({
     
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      
    }),

    components: {
      SideBar,
      // InformationsProduit,
      NaVBar,
      Liste,
      Table
    },
  }
</script>

<style >
    div .btn{
        margin-left: 30% ;
    }
</style>
