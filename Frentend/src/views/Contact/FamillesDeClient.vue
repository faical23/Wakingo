<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Familles de clients</h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Liste des familles de clients</span>
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
                            Liste des familles de clients
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
                            Ajouter une famille de clients
                        </v-btn>
                        
                    </router-link>
                    </div>
                       <Table :PathPage='PathPage' :NouveauFamilleClient='DataFamilleClient'/> 
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
                            <span class="text-h5">Nouvelle famille de clients </span>
                          </v-card-title>
                          <hr>
                          <v-card-text>
                           <v-container class="dialog_container">
                                <div class="nv-famille-client">
                                    <label for="">Libellé * :</label>
                                    <div>
                                    <input v-model="Libellé" :style="enregistrer && (Libellé == '') ? 'border: 1px solid #de1c1c;' : '' " type="text">
                                    <small v-if="enregistrer && (Libellé == '')"  class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                                    </div>
                                    <label for="">Grille de tarif :</label>    
                                    <select v-model="tarif" :style="enregistrer && (Libellé == '') ? 'border-color: #3c763d;' : '' " name="" id="">
                                        <!-- <option>Veillez selectionner</option> -->
                                        <option>cc</option>
                                    </select>
                                    <label for="">Échéancier de paiement :</label>
                                    <select v-model="Échéancier" :style="enregistrer && (Libellé == '') ? 'border-color: #3c763d;' : '' "  name="" id="">
                                        <option >Veillez selectionner</option>
                                        <option>hi</option>
                                    </select>
                                    <label for="">Mode de paiement préféré :</label>
                                    <select v-model="Mode" name="" :style="enregistrer && (Libellé == '') ? 'border-color: #3c763d;' : '' "  id="">
                                        <!-- <option value=""></option> -->
                                        <option v-for="mode in ModePaiement" :key="mode" :value="mode">{{ mode }}</option>
                                    </select>
                                    <label for="">Mode de livraison préféré :</label>
                                    <select v-model="livraison" name="" :style="enregistrer && (Libellé == '') ? 'border-color: #3c763d;' : '' "  id="">
                                        <option value="">Veillez selectionner</option>
                                        <option v-for="livraison in ModeLivraison" :key="livraison" value="">{{ livraison }}</option>
                                    </select>
                                <small>* champs obligatoire</small>
                                </div>
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
                              @click='NouveauFamilleClient()'
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
          tarif:'',
          Échéancier:'',
          Mode:'',
          livraison:'',
          DataFamilleClient:'',
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
    NouveauFamilleClient(){
        this.enregistrer = true
        if( this.Libellé !='' && this.tarif != 'veillez selectinonner' && this.Échéancier != 'veillez selectinonner' && this.Mode != 'veillez selectinonner' && this.livraison != 'veillez selectinonner' )
        {
            let NouveauFamilleClient ={
                 libelle:this.Libellé,
                 echeance:this.Échéancier,
                 modePaiement:this.Mode,
                 tarif:this.tarif,
            }
                 this.successAlert = true
                  this.errorAlert = false
            this.DataFamilleClient = NouveauFamilleClient
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