<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Les entrées de marchandises</h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Les entrées de marchandises</span>
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
            <h5>Article:</h5>
              <select name="" id="">
                <option>ART23 - A3 Adhésif + Découpe</option>
                <option >ART23 - A3 Adhésif + Découpe</option>
                <option >En ART23 - A3 Adhésif + Découpe</option>
                <option >ART23 - A3 Adhésif + Découpe(e)</option>
              </select>
            </v-col>
            <v-col cols="2">
            <h5>Depot:</h5>
              <select name="" id="">
                <option value="Tous">Tous</option>
                <option v-for="(depot,n) in depots" :key="n"  :value="depot" >{{depot}}</option>
              </select>
            </v-col>
            <v-col class="num" cols="3">
            <h5>Numéro:</h5>
            <input type="text">
            </v-col>                        
          <!-- </v-row> -->
          
        </v-form>
    </v-content>
  
                      

                </v-card>
                
                </div>
                <div class="nouveau-bon">
                   <router-link
                    to= "/Ventes/NouveauDevis/Proforma/Create"
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        >
                        <v-icon class="mdi-plus-thick">
                            mdi-plus-thick
                        </v-icon>
                            Nouveau Bon d'entrée
                        </v-btn>
                    </router-link>
                </div>
                    <Table :ElementSearched='ElementSearched' :PathPage='PathPage'/>
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../../components/SideBar/Index.vue'
  import NaVBar from  '../../../components/navbar/navbar.vue'
  import Table from   '../../../components/Tables/Table_F.vue'
  export default {
    name: 'Home',

 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
     
      depots: [
        'DEP00001 - dépôt Principal',
        'DEP00002 - dépôt Principal',
        'DEP00003 - dépôt Principal',
        'DEP00004 - dépôt Principal',
      ],
      SearchByStartDateCommande: '',
      SearchByEndDateCommande : '',
      SearchByEtat : '',
      SearchByClient : '',
      SearchByNumero :'',
      ElementSearched:'',
      PathPage:''
      
    }),
    components: {
      SideBar,
      NaVBar,
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
        },
        GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
          console.log(this.PathPage )
        }
    },
    created(){
        this.PathPage = this.$router.currentRoute.path
        this.GethPagePath()
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