<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Gestion des commandes clients </h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Gestion des commandes clients</span>
                        </div>
                        <div >
                        
                        </div>
                        
                    </div>
                </div>
                <div class="card">
                    <v-card flat dense >
                    <v-card-title dense class=" recherche_rapide_title text-p  black--text">
                        <v-icon class="mdi-file-search">
                            mdi-file-search
                        </v-icon>
                        Recherche rapide
                     
                    </v-card-title>
                   
                      
                         
    <v-content>
        <v-form class="recherche_rapide_content" >
            <v-col cols="4" >
              <h5>Date de la commande :</h5>
              <div class="SearchBydate">
                  <label for="">De</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                  <label for="">Au</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByEndDateCommande" >
              </div>

            </v-col>
            <v-col cols="2">
            <h5>Etat:</h5>
              <v-select
                :items="Etat"
                label="Tous"
                v-model="SearchByEtat"
                @change="SearchByFunction()"
              ></v-select>
            </v-col>
            <v-col cols="2">
            <h5>Client:</h5>
              <v-select
                :items="Client"
                label="Tous"
                v-model="SearchByClient"
                 @change="SearchByFunction()"
              ></v-select>
            </v-col>
            <v-col class="num" cols="2">
            <h5>Numéro:</h5>
             <v-text-field  v-model="SearchByNumero" @keyup="SearchByFunction()"></v-text-field>
            </v-col>            
          <!-- </v-row> -->
          
        </v-form>
    </v-content>
  
                      

                </v-card>
                
                </div>
                <div class="nouveau-bon">
                 <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        >
                        <v-icon class="mdi-plus-thick">
                            mdi-plus-thick
                        </v-icon>
                            Nouvelle Commande
                        </v-btn>
                    </router-link>
                    </div>
                    <Table :ElementSearched='ElementSearched' />
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../../components/SideBar/Index.vue'
  import NaVBar from '../../../components/navbar/navbar.vue'
<<<<<<< HEAD
  import Table from '../../../components/Tables/Table_F.vue'
  import DatePicker from "../../../components/DatePicker.vue";
=======
  import Table from '../../../components/Table_F.vue'
  // import DatePicker from "../../../components/DatePicker.vue";
>>>>>>> 688d5389cc058205482bdbf573d4c4c3aedcec98
  export default {
    name: 'Home',

 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
     
      Client: [
        'AAAA',
        'BBBB',
        'CCCC',
        'DDDD',
      ],
      Etat: [
        'AAAA',
        'BBBB',
        'CCCC',
        'DDDD',
      ],
      SearchByStartDateCommande: '',
      SearchByEndDateCommande : '',
      SearchByEtat : '',
      SearchByClient : '',
      SearchByNumero :'',
      ElementSearched:''
      
    }),
    components: {
      SideBar,
      NaVBar,
      // DatePicker,
      Table
    },
    methods: {
        SearchByFunction(){
          let SearchBy = {
              DateStartCommande :  this.SearchByStartDateCommande,
              DateEndCommande :  this.SearchByEndDateCommande,
              Etat :  this.SearchByEtat,
              Client:  this.SearchByClient,
              Numero :  this.SearchByNumero
          }
          this.ElementSearched = SearchBy
          console.log(this.ElementSearched )
        }
    }
  }
</script>

<style >
    div .btn{
        margin-left: 30% ;
    }
    .HomePage{
      font-size: 20px;
    }
</style>
