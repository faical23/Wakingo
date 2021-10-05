<template>
  <div class="HomePage">
        <div  v-if='ShowPoypNewTransfert' class="BackGourndBlackGlobalPage" 
        ></div>

      <SideBar/>
      <PopupNewTransfert  v-if="ShowPoypNewTransfert" 
                        @RemivePopupTransfert="ShowPoypNewTransfert = false"
                         @NewTransfert='NewTransfert'/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Transferts compte à compte</h2>
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
              <h5>Date de transfert :</h5>
              <div class="SearchBydate">
                  <label for="">De</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                  <label for="">Au</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByEndDateCommande" >
              </div>

            </v-col>
            <v-col cols="2">
            <h5>Compte d'origine:</h5>
              <select name="" id="" @change="SearchByFunction()" v-model="SearchByCompteOrigin">
                <option value="Tous">Tous</option>
                <option v-for="Compte,n in CompteOrigin"   :key="n" :value="Compte">{{Compte}}</option>
              </select>
            </v-col>
            <v-col cols="2">
            <h5>Compte de déstination:</h5>
              <select name="" id="" @change="SearchByFunction()" v-model="SearchByComptedéstination">
                <option value="Tous">Tous</option>
                <option  v-for="Compte in CompteDéstination" :key="Compte" :value="Compte">{{Compte}}</option>
              </select>
            </v-col>
             <v-col class="num" cols="2">
                <h5>Référence:</h5>
            <input type="text" @keyup="SearchByFunction()" v-model="SearchByRéférence">
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
                    <div class="nouveau-bon">
                        <v-btn
                            elevation="1"
                            class="bnt-nv-bon-de-livraison  white--text"
                            @click="ShowPoypNewTransfert = true"
                            >
                            <v-icon class="mdi-plus-thick">
                                mdi-plus-thick
                            </v-icon>
                                 Nouvelle Transfert
                            </v-btn>
                    </div>
                    <Table :ElementSearched='ElementSearched' :PathPage='PathPage' :NewTransfertDataInfomation='NewTransfertData' />
                </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  import Table from '../../components/Tésorerie/TableTransfert.vue'
  import PopupNewTransfert from '../../components/Tésorerie/PopupNewTransfert.vue'
  export default {
    name: 'Home',

 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
     
      CompteDéstination : [],
      CompteOrigin:[],
      SearchByStartDateCommande: '',
      SearchByEndDateCommande : '',
      SearchByCompteOrigin : 'Tous',
      SearchByComptedéstination : 'Tous',
      SearchByEtat : 'Tous',
      SearchByRéférence :'',
      ElementSearched:'',
      PathPage:'',
      SearchByEtatArray : [],
      ShowPoypNewTransfert:false,
      NewTransfertData:''
      
    }),
    components: {
      SideBar,
      NaVBar,
      Table,
      PopupNewTransfert
    },
    methods: {
        SearchByFunction(){
          let SearchBy = {
              DateStartCommande :  this.SearchByStartDateCommande,
              DateEndCommande :  this.SearchByEndDateCommande,
              Etat :  this.SearchByEtat,
              CompteDestination:  this.SearchByComptedéstination,
            SearchByCompteOrigin:  this.SearchByCompteOrigin,
              Référence :  this.SearchByRéférence
          }
          this.ElementSearched = SearchBy
        },
        GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
        },
        NewTransfert(Data){
            console.log("NewTransfert",Data)
            this.ShowPoypNewTransfert = false
            this.NewTransfertData = Data
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
