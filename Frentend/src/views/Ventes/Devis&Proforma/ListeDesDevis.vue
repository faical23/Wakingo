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
<<<<<<< HEAD
                    
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
=======
                </div>
                <div class="card">
                    <v-card flat dense >
                    <v-card-title dense class=" recherche_rapide_title text-p  black--text">
                        <v-icon class="mdi-file-search">
                            mdi-file-search
                        </v-icon>
                        Recherche rapide
                     
                    </v-card-title>
                   
                       <v-text>
                         
    <v-content>
        <v-form class="recherche_rapide_content" >
          <!-- <v-row> -->
             <!-- <v-spacer></v-spacer> -->
             <v-icon class=" mdi-calendar-month">
                mdi-calendar-month
              </v-icon>
              
            <v-col cols="2" >
              <h5>Date de livraison:</h5>
              <DatePicker label="Start Date" @change="date=>(startDate=date)">from</DatePicker>
          </v-col>
              <v-icon>
                mdi-calendar-month
              </v-icon>
            <v-col cols="2" >
             <v-spacer>></v-spacer>
              <DatePicker label="End Date" @change="date=>(endDate=date)"></DatePicker>
            </v-col>
            <v-col cols="2">
            <h5>Etat:</h5>
              <v-select
                :items="items"
                label="Tous"
              ></v-select>
            </v-col>
            <v-col cols="2">
            <h5>Client:</h5>
              <v-select
                :items="items"
                label="Tous"
              ></v-select>
            </v-col>
            <v-col cols="3">
            <h5>Numéro:</h5>
             <v-text-field ></v-text-field>
            </v-col>
          <!-- </v-row> -->
          
        </v-form>
    </v-content>
  
                       </v-text>  
                </v-card>
                
                </div>
                <div class="nouveau-bon">
>>>>>>> chaimaBranch
                 <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    >     
                    <v-btn
<<<<<<< HEAD
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
=======
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        >
                        <v-icon class="mdi-plus-thick">
                            mdi-plus-thick
                        </v-icon>
                        Nouveau bon/Perorma
                        </v-btn>
                    </router-link>
                    </div>
                    <Table />
            </div>
          </div>
      </div>
    
  
>>>>>>> chaimaBranch
                
</template>

<script>
  import SideBar from '../../../components/SideBar/Index.vue'
<<<<<<< HEAD
  // import InformationsProduit from '../../../components/InformationsProduits.vue'
  import  Liste from '../../../components/liste.vue'
  import NaVBar from '../../../components/navbar.vue'
  import Table from '../../../components/table.vue'
=======
  import NaVBar from '../../../components/navbar.vue'
  import Table from '../../../components/table.vue'
  import DatePicker from "../../../components/DatePicker.vue";
>>>>>>> chaimaBranch
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
<<<<<<< HEAD
      Liste,
=======
      DatePicker,
>>>>>>> chaimaBranch
      Table
    },
  }
</script>

<style >
    div .btn{
        margin-left: 30% ;
    }
</style>
