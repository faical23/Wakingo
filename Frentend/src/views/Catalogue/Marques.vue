<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Marques</h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Marques</span>
                        </div>
                        <div >
                        </div>
                    <div>
                    </div>
                    </div>
                </div>
                        <v-alert v-if="successAlert == true" :value="successAlert " type="success">
                            La Marque d'articles a bien été ajouté!
                            </v-alert>
                            <v-alert v-if="errorAlert == true" type="error">
                            We're so sorry , something went wrong , please check you informations and try again , thank you!
                            </v-alert>
                <div class="card4">
                    <v-card flat dense >
                         <v-card-title dense class=" text-p  black--text">
                            Liste des Marques
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
                            Ajouter une  Marque
                        </v-btn>
                        
                    </router-link>
                    </div>
                       <Table :PathPage='PathPage' :NouvelleMarque='DataNouvelleMarque'/> 
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
                            <span class="text-h5">Nouvelle Catégories d'articles </span>
                          </v-card-title>
                          <hr>
                          <v-card-text>
                           <v-container class="dialoguecontainer">
                                <div class="code_famille_article">
                                  <div>
                                    <label for="">Libellé * :</label><br>
                                    <input class="marque" v-model="Libellé" type="text" >
                                  <small v-if="enregistrer && (Libellé == '')"  class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
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
                              @click='NouvelleMarque()'
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
          Libellé:'',
          DataNouvelleMarque:'',
          successAlert:false,
          errorAlert:false,

    }),
    methods: {
         GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
          console.log(this.PathPage )
        },
    NouvelleMarque(){
        this.enregistrer = true
        if( this.Libellé !='')
        {
            let NouvelleMarque ={
                 marque:this.Libellé,
            }
                 this.successAlert = true
                  this.errorAlert = false
                this.DataNouvelleMarque = NouvelleMarque
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