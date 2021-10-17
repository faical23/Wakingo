<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">

            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Catalogue </h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Catalogue</span>
                        </div>
                        <div >
                        
                        </div>
                        
                    </div>
                </div>
                 <v-alert v-if="successAlert == true" :value="successAlert " type="success">
                          L'article a bien été ajouté! :)
                        </v-alert>
                        <v-alert v-if="errorAlert == true" type="error">
                         We're so sorry , something went wrong , please check you informations and try again , thank you!
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
            <v-col class="num" cols="2">
            <h5>Numéro:</h5>
            <input type="text">
            </v-col>            
            <v-col class="num" cols="2">
            <h5>Libellé :</h5>
            <input type="text">
            </v-col>            
            <v-col cols="4" >
              <h5>Prix de vente :</h5>
              <div class="SearchBydate">
                  <label for="">Entre</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                  <label for="">Et</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByEndDateCommande" >
              </div>

            </v-col>
            <v-col cols="2">
            <h5>Type :</h5>
              <select name="" id="">
                <option value="Tous">Tous</option>
                <option value="Annulé">Annulé</option>
                <option value="En cours">En cours</option>
                <option value="Clôturé(e)">Clôturé(e)</option>
              </select>
            </v-col>
            <v-col cols="2">
            <h5>Famille:</h5>
              <select name="" id="">
                <option value="Tous">Tous</option>
                <!-- <option v-for="(Client,n) in Clients" :key="n"  :value="Client" >{{Client}}</option> -->
              </select>
            </v-col>
          <!-- </v-row> -->
          
        </v-form>
    </v-content>
  
                      

                </v-card>
                
                </div>
                <div class="nouveau-bon"> 
                    <router-link to='/Catalogue/NewArticle'>
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        >
                        <v-icon class="mdi-plus-thick">
                            mdi-plus-thick
                        </v-icon>
                            Nouvel article
                        </v-btn>
                        </router-link> 
                    <v-btn
                        elevation="1"
                        class="creatArticle  white--text" 
                        @click="popup = true"
                        >
                        <v-icon class="mdi-plus-thick">
                            mdi-plus-thick
                        </v-icon>
                            Création rapide d'un article
                              <template>
                        <v-row justify="center">
                            <v-dialog
                            v-model="popup"
                            persistent
                            max-width="780px"
                            >
                           
                            <v-card>
                                <v-card-title>
                                <span class="text-h5">
                                Nouvel article rapide</span>
                                </v-card-title>
                                    <hr>
                                <v-card-text>
                                <v-container class="Article_popup_container">
                                   <div class="first_part_article">
                                       <div>
                                           <label for="">Code Article *:</label>
                                           <input type="text" v-model="CodeArticle" placeholder="ART 157">
                                            <small v-if="add && (CodeArticle == '')"  class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                                       </div>
                                       <div>
                                           <label for="">Libellé de l'article *: </label>
                                           <input class="libelle" v-model="libelleArticle" type="text" >
                                           <small v-if="add && (libelleArticle == '')"  class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                                       </div>
                                   </div>
                                   <div class="checkbox_div_new_article">
                                       <input type="checkbox">
                                       <label for="">Activer la gestion des stocks</label>
                                   </div>
                                   <hr>
                                   <div class="second_part_article">
                                       <div class="Prix_achat">
                                           <label for="">Prix d'achat :</label>
                                           <div>
                                           <input type="number" class="prix" v-model="PrixAchat" :style="add && (libelleArticle == '') ? 'border-color: #3c763d;' : '' " placeholder="0,00">
                                           <input type="text" placeholder="MAD" disabled class="MAD">
                                           <select name="" v-model="TypePrixAchat" id="">
                                               <option v-for="option in TypePrix" :key="option">{{ option }}</option>
                                           </select>
                                       </div>
                                       </div>
                                       <div class="Prix_achat">
                                           <label for="">Prix de vente public :</label>
                                           <div>
                                           <input type="number" class="prix" v-model="PrixVente" :style="add && (libelleArticle == '') ? 'border-color: #3c763d;' : '' "  placeholder="0,00">
                                           <input type="text" placeholder="MAD" disabled class="MAD">
                                           <select name="" v-model="TypePrixVente" id="">
                                               <option v-for="option in TypePrix" :key="option" >{{ option }}</option>
                                           </select>
                                       </div>
                                       </div>
                                   </div>
                                   <hr>
                                   <div class="third_part_article">
                                       <div class="select_part">
                                           <label for="">Catégorie :</label>
                                           <select v-model="Catégorie" :style="add && (libelleArticle == '') ? 'border-color: #3c763d;' : '' "  name="" id="">
                                               <option >Veuilez séléctonner</option>
                                               <option v-for="one in categories" :key="one">{{ one }}</option>
                                           </select>
                                       </div>
                                        <div class="select_part">
                                           <label for="">TVA :</label>
                                           <select v-model="tva" name="" :style="add && (libelleArticle == '') ? 'border-color: #3c763d;' : '' " id="">
                                               <option>Veuilez séléctonner</option>
                                               <option v-for="tva in tvapersent" :key="tva">{{ tva }}</option>
                                           </select>
                                       </div>
                                       <div class="select_part">
                                           <label for="">Unité de valorisation :</label>
                                           <select v-model="Unite" name="" id="">
                                               <option >Veuilez séléctonner</option>
                                               <option v-for="unite in unites" :key="unite">{{ unite }}</option>
                                           </select>
                                            <small v-if="add && (Unite == '')"  class="MessageErrorFiledClientUnite">Ce champ est obligatoire.</small>
                                       </div>
                                   </div>
                                   <hr>
                                       <label for="">Description détaillée :</label>
                                   <div class="Description">
                                       <textarea name="" id="" cols="87" rows="10"></textarea>
                                   </div>
                                   <template><v-btn><v-file-input  label="Select File..."></v-file-input></v-btn>  </template>
                                <small>*indicates required field</small>
                                </v-container>
                                </v-card-text>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="popup=false"
                                    
                                >
                                    Close
                                </v-btn>
                                <v-btn
                                    color="blue darken-1"
                                   @click="CreatNewArticle()"
                                    text
                                >
                                    Save
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-dialog>
                        </v-row>
                        </template>
                        </v-btn>
                    <v-btn
                        elevation="1"
                        class="mettreAjour  white--text" 
                        >
                        <v-icon class="mdi-plus-thick">
                            mdi-refresh
                        </v-icon>
                            Mettre a jour mes tarif
                        </v-btn>
                    <v-btn
                        elevation="1"
                        class="importArticle  white--text" 
                        >
                        <v-icon >
                          mdi-download-outline
                        </v-icon>
                            Importer des Articles
                        </v-btn>
                    </div>
                  
                    <div>

                    </div>
                    <Table :ElementSearched='ElementSearched' :PathPage='PathPage'  :CreatNewArticle='dataCreatNewArticle'/>
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  import Table from '../../components/Tables/Table_F.vue'
  export default {
    name: 'Home',

 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
     
      
      SearchByStartDateCommande: '',
      SearchByEndDateCommande : '',
      SearchByPrice : '',
      SearchByType : '',
      SearchByFamille : '',
      SearchByLibele : '',
      SearchByNumero :'',
      ElementSearched:'',
      PathPage:'',
      popup:false,
      CodeArticle:'',
      libelleArticle:'',
      PrixAchat:'',
      PrixVente:'',
      TypePrixAchat:'',
      TypePrixVente:'',
      TypePrix :[
          'TT',
          'HT'
      ],
      Catégorie:'',
      categories:[
          'one',
          'two',
          'three',
          'four'
      ],
      tva:'',
      tvapersent:[
          '20%',
          '14%',
          '17%',
          '10%',
          '0.00%'
      ],
      Add:false,
      dataCreatNewArticle:'',
      unites:[
          'hi'
      ],
      Unite:'',
     successAlert:false,
     errorAlert:false,





      
    }),
    components: {
      SideBar,
      NaVBar,
      Table
    },
    methods: {
        CreatNewArticle(){
            this.add = true
                if(this.CodeArticle != '' && this.libelleArticle !='' && this.PrixAchat !='' && this.PrixVente  !=''  )
                {
                    let CreatNewArticle={
                        code : this.CodeArticle,
                        lib : this.libelleArticle,
                        Monatnt : this.PrixAchat,
                        quantité : this.PrixVente,
                        famille: 'CARTE DE VISITE',
                        Type : 'produit',

                   }
                    this.successAlert = true
                    this.errorAlert = false
                    this.dataCreatNewArticle = CreatNewArticle  
            }
            else{
             this.errorAlert = true
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
