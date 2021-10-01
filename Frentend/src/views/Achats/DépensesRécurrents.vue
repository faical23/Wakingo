<template>
  <div class="HomePage">
      <div   v-if='PopupNouvelleRecette' class="BackGourndBlackGlobalPage" @click="DeleteAllPopup()"></div>

      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <NouvelleRecette v-if='PopupNouvelleRecette' :PageName='PageName' @RemovePopupNouvelleRecette='PopupNouvelleRecette = false' @GetNouvelleRecurrente='GetNouvelleRecurrente' />


            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Gestion des recettes récurrentes</h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Gestion des recettes récurrentes</span>
                        </div>
                        <div >
                        
                        </div>
                        
                    </div>
                </div>
                <v-alert v-if="SuccessNewdépense" type="success" class="AlertError">
                       La dépense a bien été activée!
                </v-alert>
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
              <h5>Date de la recette :</h5>
              <div class="SearchBydate">
                  <label for="">De</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                  <label for="">Au</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByEndDateCommande" >
              </div>

            </v-col>
            <v-col cols="3">
            <h5>Etat:</h5>
              <select name="" id="" @change="SearchByFunction()" v-model="SearchByEtat ">
                <option value="Tous">Tous</option>
                <option v-for="Etat,n in SearchByEtatArray" :key="n"  value="Etat">{{Etat}}</option>
              </select>
            </v-col>
            <v-col cols="3">
                    <h5>Ventilation :</h5>
                    <select name="" id="" @change="SearchByFunction()" v-model="SearchByVentilation" >
                      <option value="Tous">Tous</option>
                      <option v-for="(Ventilation,n) in Ventilations" :key="n"  :value="Ventilation" >{{Ventilation}}</option>
                    </select>
            </v-col>
            
            <v-col class="num" cols="2">
            <h5>Libellé :</h5>
            <input type="text" @keyup="SearchByFunction()" v-model="SearchByLibellé">
            </v-col>            
          <!-- </v-row> -->
          
        </v-form>
    </v-content>
  
                      

                </v-card>
                
                </div>
                 <div class="nouveau-bon">
  
                        <v-btn
                            elevation="1"
                            class="bnt-nv-bon-de-livraison  white--text"
                            @click="PopupNouvelleRecette = true"
                            >
                            <v-icon class="mdi-plus-thick">
                                mdi-plus-thick
                            </v-icon>
                                Nouveelle recettes récurrente
                            </v-btn>
                    </div>
                    <Table :ElementSearched='ElementSearched' :PathPage='PathPage' :NouvelleRecette="DataNouvelleRecette" />
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  import Table from '../../components/Tables/Table_F.vue'
  import NouvelleRecette from '../../components/NouvelleRecetteRecurrente.vue'
  export default {
    name: 'Home',

 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
     PageName:'dépense Récurrente',
      Ventilations: [
        'AAAA',
        'BBBB',
        'CCCC',
        'DDDD',
        'AAAA',
        'BBBB',
        'CCCC',
        'DDDD',
        'AAAA',
        'BBBB',
        'CCCC',
        'DDDD'
      ],
      SearchByStartDateCommande: '',
      SearchByEndDateCommande : '',
      SearchByEtat : 'Tous',
      SearchByVentilation : 'Tous',
      SearchByLibellé:'',
      ElementSearched:'',
      PathPage:'',
      SearchByEtatArray : ["Annulé(e)","En cours","Clôturé(e)"],
      PopupNouvelleRecette : false,
      DataNouvelleRecette :'',
      SuccessNewdépense:false,
    }),
    components: {
      SideBar,
      NaVBar,
      Table,
      NouvelleRecette,
     
    },
    methods: {
        SearchByFunction(){
          let SearchBy = {
              DateStartCommande :  this.SearchByStartDateCommande,
              DateEndCommande :  this.SearchByEndDateCommande,
              Etat :  this.SearchByEtat,
              Client:  this.SearchByClient,
              Libellé :  this.SearchByLibellé
          }
          this.ElementSearched = SearchBy
          console.log(this.ElementSearched )
        },
        GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
        },
        GetNouvelleRecurrente(Data){
          this.DataNouvelleRecette = Data
          this.PopupNouvelleRecette = false
          this.SuccessNewdépense = true
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
