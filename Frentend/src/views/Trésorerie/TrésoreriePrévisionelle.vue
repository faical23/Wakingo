<template>
  <div class="HomePage">
<<<<<<< HEAD
=======
      <div   v-if='Alert || PopupAddNewClient || PopupNewArticle || PopupChoiserLesArticles || Remproser' class="BackGourndBlackGlobalPage" @click="DeleteAllPopup()"></div>
>>>>>>> c78323e9e52c962977ea623165a1e70c3f210692
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
<<<<<<< HEAD
                       <h2>Trésorerie prévisionnelle </h2>
                       <small>Cette page vous permet de connaître et anticiper votre trésorerie</small>
=======
                        <h2>Comptes de trésorerie</h2>
>>>>>>> c78323e9e52c962977ea623165a1e70c3f210692
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
<<<<<<< HEAD
                            <span  class="RoutlinkZone">Trésorerie prévisionnelle</span>
                        </div>
                        <div >
                        
                        </div>
                        
                    </div>
                </div>
                <div class="card_tresorerie">
                    <v-card flat dense >
                <v-content>
        <v-form class="recherche_rapide_content_provisionelle" >
            <v-col cols="3">
              <h5>Date de la commande :</h5>
              <div class="SearchBydate">
                  <label for="">De</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                  <label for="">Au</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByEndDateCommande" >
              </div>

            </v-col>
            <v-col cols="3">
            <h5>Compte bancaire :</h5>
              <select class="projet" name="" id="">
                <!-- <option value="Trésorerie nette"></option> -->
                <option value="Trésorerie nette">Trésorerie nette</option>
                </select>
            </v-col>
            <v-col cols="">
                <v-btn
                elevation="1"
                class="bnt-nv-bon-de-livraison  white--text"
                >
                <i class="fas fa-play-circle"></i>
                    Lancer le prévisionnelle
                </v-btn>
            </v-col>
          </v-form>
    </v-content>
  
                      

                </v-card>
                </div>
                  </div>
                     <div class="nouveau-bon2">
                    <Table :ElementSearched='ElementSearched' :PathPage='PathPage' />
                    </div>
            </div>
          </div>
      <!-- </div> -->
    
  
                
</template>

<script>
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  import Table from '../../components/Tables/table.vue'
  export default {
    name: 'Home',

=======
                            <router-link to="/" class="RoutlinkZone">Comptes de trésorerie</router-link>
                        </div>

                    </div>
                </div>
            </div>
            <div class="BtnsTésorerie">
                <button>
                    <i class="fas fa-university"></i>
                    Ajouter un nouveau compte
                </button>
                <button>
                    <i class="fas fa-sync-alt"></i>
                     Transferts compte à compte
                </button>
            </div>
            <div class="TableZone" style="margin:20px !important">
                <Table :ElementSearched='ElementSearched' :PathPage='PathPage' :NouvelleRecette="DataNouvelleRecette" />
            </div>
      </div>

  </div>
</template>

<script>
    import SideBar from '../../components/SideBar/Index.vue'
    import NaVBar from '../../components/navbar/navbar.vue'
    import Table from '../../components/Tésorerie/Table.vue'
  export default {
    name: 'Home',
>>>>>>> c78323e9e52c962977ea623165a1e70c3f210692
 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
<<<<<<< HEAD
       isShow: true,

      Ventilations: [
        '112 frais préliminaire',
        '148 rembourssemeet',
        '66 achats revendus ',
        '66 achats consommé',
        '988 Location ',
        '433 Primes assurances',
        '11 transport',

      ],

      fournisseurs: [
        'Mr. Youssef Elaasiri',
        'Mennara SARL',
        'Mr. Abdel maghribi',
        'Mm. Amina moumen',
        'Agadir SARL',
      ],
     
      Clients: [
=======
      PageName:'Recettes Récurrente',
      Ventilations: [
>>>>>>> c78323e9e52c962977ea623165a1e70c3f210692
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
<<<<<<< HEAD
        dialog: false,
        Add:false,
        date:'',
        libellé:'',
        Ventilation:'',
        fournisseur:'',
        projet:'',
        qte:0,
        typePrix:'P.U.HT',
        Tva:'20,00%',
        TTC:'',
        prix:0,
        TotatlTTC:'',
        QtéType:'Unité(s)',
        DataNouvellDepenseDevis:'',



      SearchByStartDateCommande: '',
      SearchByEndDateCommande : '',
      SearchByEtat : 'Tous',
      SearchByClient : 'Tous',
      SearchByNumero :'',
      ElementSearched:'',
      PathPage:'',
      SearchByEtatArray : ["En retard","Annulé(e)","Accepté(e)","En attente"]
      
=======
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
      SuccessNewRecette : false,
>>>>>>> c78323e9e52c962977ea623165a1e70c3f210692
    }),
    components: {
      SideBar,
      NaVBar,
<<<<<<< HEAD
      Table
    },
    methods: {

      NouvelleDepenseDiverse(){
      this.Add = true
      if(
        this.date !='' &&  this.libellé != '' &&  this.Ventilation != '' &&  this.fournisseur != '' && this.qte != 0 &&  this.prix != 0
      ){ 
        let NouvelleDepense ={
          date:this.date , 
          Ventiation_depense:this.Ventilation,
          Libellé:this.libellé,
          TotatlTTC:this.TotatlTTC,

        }
        this.DataNouvellDepenseDevis = NouvelleDepense 
          console.log(NouvelleDepense)
        // this.$emit('NouvellDepenseDevis',NouvelleDepense)
      }
      else{
        console.log("not working")
      }
    },

     CalculteTTC(){
          let TotalHT = this.prix * this.qte
          if(this.typePrix === "P.U.HT"){
                this.TotatlTTC =(TotalHT + (TotalHT * parseFloat(this.Tva)/ 100)).toFixed(2)
          }
          else if(this.typePrix === "P.U.TTC"){
                this.TotatlTTC =TotalHT

          }
      },  

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
          console.log(this.PathPage)
        }
=======
      Table,
     
    },
    methods: {
        GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
        },

>>>>>>> c78323e9e52c962977ea623165a1e70c3f210692
    },
    created(){
        this.PathPage = this.$router.currentRoute.path
        this.GethPagePath()
<<<<<<< HEAD
    },
    

=======
    }
>>>>>>> c78323e9e52c962977ea623165a1e70c3f210692
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