<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Familles d'articles</h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Liste Familles d'articles</span>
                        </div>
                        <div >
                        </div>
                    <div>
                    </div>
                    </div>
                </div>
                        <v-alert v-if="successAlert == true" :value="successAlert " type="success">
                            Le fournisseur a bien été ajouté!
                            </v-alert>
                            <v-alert v-if="errorAlert == true" type="error">
                            We're so sorry , something went wrong , please check you informations and try again , thank you!
                            </v-alert>
                <div class="card4">
                    <v-card flat dense >
                         <v-card-title dense class=" text-p  black--text">
                            Liste Familles d'articles
                         </v-card-title>
                         <hr>
                        <v-content>
                <div class="nv-famille">
                 <router-link
                    to= ""
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-add-famille  white--text" 
                        @click="dialog = true"
                        >
                        <i class="fas fa-plus"></i>
                            Ajouter une  Familles d'articles
                        </v-btn>
                        
                    </router-link>
                    </div>
                       <Table :PathPage='PathPage' :NouveauFamilleArticle='DataFamilleArticle'/> 
                        </v-content>
                    </v-card>
                     <v-row justify="center">
                      <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="700px"
                      >
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Nouvelle famille d'article </span>
                          </v-card-title>
                          <hr>
                          <v-card-text>
                           <v-container class="dialoguecontainer">
                                <div class="code_famille_article">
                                  <div class="CODE">
                                    <label for="">Code * :</label><br>
                                    <input v-model="Code" type="text" placeholder="FA10">
                                    <small v-if="enregistrer && (Code == '')"  class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                                  </div>
                                  <div>
                                    <label for="">Libellé * :</label><br>
                                    <input v-model="Libellé" type="text" >
                                  <small v-if="enregistrer && (Libellé == '')"  class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                                  </div>
                                </div>
                                <label for="">Description :</label><br>
                                <textarea name="" id="" cols="40" rows="7"></textarea>
                                <div class="Complement">
                                  <div class="titre_complement">
                                    <i class="fas fa-info-circle"></i>
                                    <h5>Complément</h5>
                                  </div>
                                  <hr>
                                  <div class="info_area_famille_article_container">
                                  <div class="info_area_famille_article">
                                    <div class="marge">
                                      <label for="">Marge :</label>
                                      <div class="disabled_area">
                                        <input class="ONE" type="text" placeholder="00.00">
                                        <input class="TWO" disabled type="text" placeholder="%">
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div class="Garantie">
                                      <label for="">Garantie :</label>
                                      <div class="disabled_area">
                                        <input  class="ONE"  type="text" placeholder="00">
                                        <input class="TWO" disabled type="text" placeholder="Mois">
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tva_famille_article">
                                    <label for=""> TVA :</label>
                                    <select name="" id="">
                                      <option value="">10%</option>
                                      <option value="">20%</option>
                                      <option value="">30%</option>
                                    </select>
                                  </div>
                                  </div>
                                <div class="fournisseur_principal">
                                  <label for="">Fournisseur proncipal :</label>
                                  <select name="" id="">
                                    <option value="">Veuillez séléctionner</option>
                                  </select>
                                </div>
                               </div>  <!-- complement div -->
                               <div class="gestion_du_stock">
                                 <div class="titre_gestion_stock">
                                   <i class="fas fa-archive"></i>
                                   <h5>Gestion du stock</h5>
                                 </div>
                                 <hr>
                                 <div class="activer_gs">
                                   <input type="checkbox" v-model="checkbox">
                                   <label for="">Activer la gestion des stocks</label>
                                 </div>
                                 <div v-if="checkbox == true">
                                 <label for="">Dépot princiaple :</label><br>
                                 <select name="" id="">
                                   <option value="">veuillez séléctionner</option> 
                                   <option value="">dépot principal</option> 
                                 </select>
                                 </div>
                                 <div v-else>
                                 <label for="">Dépot princiaple :</label><br>
                                 <select name="" disabled id="">
                                   <option value="">veuillez séléctionner</option> 
                                   <option value="">dépot principal</option> 
                                 </select>
                                 </div>
                               </div>
                                <small>* champs obligatoire</small>
                                
                            </v-container>
                        
                                
                          </v-card-text>
                            <hr>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click='NouveauFamilleArticle()'
                            >
                              Enregister
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                </div>
                
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  import Table from '../../components/Tables/table_famille.vue'
  export default {
      
      components: {
        SideBar,
        NaVBar,
        Table,
        },
      
      data: () => ({
          PathPage:'',
          dialog: false,
          enregistrer:false,
          checkbox:false,
          Libellé:'',
          tarif:'',
          Échéancier:'',
          Code:'',
          livraison:'',
          DataFamilleArticle:'',
          ModePaiement:[
              'Cheque',
              'Virement',
              'Traite',
              'Espece',
              'Affacturage',
              'Antres'
          ],
          ModeLivraison:[
              'Livraison a domicile',
              'Livraison gratuite',
              'Mise a disposition en magasin ',
              'A la charge de l acheteur',
              'A la charge du vendeur'
          ],
          successAlert:false,
          errorAlert:false,

    }),
    methods: {
         GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
          console.log(this.PathPage )
        },
    NouveauFamilleArticle(){
        this.enregistrer = true
        if( this.Libellé !='' && this.Code != '')
        {
            let NouveauFamilleArticle ={
                 libelle:this.Libellé,
                 code:this.Code,
                 suiviStock:"Activé"
            }
                 this.successAlert = true
                  this.errorAlert = false
            this.DataFamilleArticle = NouveauFamilleArticle
        }
        else{
             this.errorAlert = true
        }
    },
    },
     created(){
        this.PathPage = this.$router.currentRoute.path
        this.GethPagePath()
    }
    
  }
</script>