<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Les encaissements</h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Liste Les encaissements</span>
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
              <h5>Date:</h5>
              <div class="SearchBydate">
                  <label for="">De</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                  <label for="">Au</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByEndDateCommande" >
              </div>

            </v-col>
            <v-col class="num" cols="2">
                <h5>Numéro:</h5>
            <input type="text" @keyup="SearchByFunction()" v-model="SearchByNumero">
            </v-col>  
            <v-col cols="2">
            <h5>Moyen de paiment:</h5>
              <select name="" id="" @change="SearchByFunction()" v-model="SearchByPaiment">
                <option value="Tous">Tous</option>
                <option v-for="Paiment,n in MoyenPaiement"   :key="n" :value="Paiment">{{Paiment}}</option>
              </select>
            </v-col>
            <v-col cols="2">
            <h5>Compte:</h5>
              <select name="" id="" @change="SearchByFunction()" v-model="SearchByCompte">
                <option value="Tous">Tous</option>
                <option value="Baqnue">Baqnue</option>
                <option value="Caisse kbup">Caisse kbup</option>

              </select>
            </v-col>
            <v-col cols="2">
                <h5>État :</h5>
              <select name="" id="" @change="SearchByFunction()" v-model="SearchByEtat">
                <option value="Tous">Tous</option>
                <option v-for="Etat,n in SearchByEtatArray"   :key="n" :value="Etat">{{Etat}}</option>
              </select>
            </v-col>
          
          <!-- </v-row> -->
          
        </v-form>
    </v-content>
  
                      

                </v-card>
                
                </div>
                    <Table :ElementSearched='ElementSearched' :PathPage='PathPage' />
                </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  import Table from '../../components/Tésorerie/Tablecaissment.vue'
  export default {
    name: 'Home',

 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
     
      MoyenPaiement : [
          'Chéque',
          'Espéces',
          'Traite',
      ],
      SearchByStartDateCommande: '',
      SearchByEndDateCommande : '',
      SearchByPaiment : 'Tous',
      SearchByCompte : 'Tous',
      SearchByEtat : 'Tous',
      SearchByNumero :'',
      ElementSearched:'',
      PathPage:'',
      SearchByEtatArray : ["Annulé(e)","A encaisser","Clôturé(e)","En attente"]
      
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
        },
        GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
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
