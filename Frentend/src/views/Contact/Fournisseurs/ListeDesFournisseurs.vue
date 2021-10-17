<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">

            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Fournisseurs</h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Fournisseurs</span>
                        </div>
                        <div >
                        
                        </div>
                    </div>
                </div>
                        <v-alert v-if="successAlert == true" :value="successAlert " type="success">
                          Le fournisseur a bien été ajouté!
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
            <v-col cols="3" >
              <h5>Numéro :</h5>
              <div class="SearchBydate">
                  <!-- <label for="Numero">Numéro</label> -->
                  <input type="text" @change="SearchByFunction()" v-model="SearchByNumber" >
                  
              </div>

            </v-col>
            <v-col cols="3">
           <h5 for="Nom">Nom :</h5>
             <input type="text"  @change="SearchByFunction()" v-model="SearchByName">
            </v-col>
            <v-col cols="2">
            <h5>Famille:</h5>
              <select  name="" id="">
                <option value="Tous">Tous</option>
                <option v-for="(Client,n) in Clients" :key="n" :value="Client" >{{ Client }}</option>
              </select>
            </v-col>
          </v-form>
    </v-content>
             </v-card>
                 </div>
                   <v-row justify="center">
                      <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="838px"
                      >
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Nouveau fournisseur rapide </span>
                          </v-card-title>
                          <hr>
                          <v-card-text>
                            <v-container class="dialog_container">
                            <div class="f-sec">
                              <div>
                                <h5>Type de fournisseur :</h5>
                                <input @click="Particulier = true , entreprise = false"  type="radio">
                                <label for="particulier">Particulier</label>
                                <input @click="Particulier = false , entreprise = true" type="radio">
                                <label for="Entreprise">Entreprise</label>
                              </div>
                                <label for="Code_fournisseur">Code du fournisseur * :</label>
                              <div>
                                <input v-model="codeFournisseur" placeholder="CLT-68" type="text" name="code_fournisseur" >
                              </div>
                              <!-- v-if CLIENT CIVILE -->
                              <div class="clientDiv" v-if="ParticulierChecked">
                                <label for="Civilité">Civilité * :</label>
                              <div>
                                <select aria-placeholder="Veuillez selectionner"  v-model="civilite">
                                   <option value="">Veuillez selectionner</option>
                                  <option v-for="etat in civilites" :key="etat"> {{ etat }}</option>
                                </select>
                                <small v-if="enregistrer && (civilite = ''|| 'Veuillez selectionner')" class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                              </div>
                                <label for="prenom">Prénom * :</label>
                              <div>
                                <input v-model="Prenom" type="text">
                                <small v-if="enregistrer && (Prenom == '')" class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                              </div>
                                <label for="Nom">Nom * :</label>
                              <div>
                                <input v-model="Nom"  type="text">
                                <small v-if=" enregistrer && (Nom = '')" class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                              </div>
                              </div>
                              <!-- v-else ENTREPRISE -->
                              <div class="clientDiv" v-else>
                                <label for="Civilité">Nom de l'entreprise * :</label>
                              <div>
                                <select  v-model="NomEntreprise">
                                  <option value="">Veuillez selectionner</option>
                                  <option v-for="etat in NomsEntreprise" :key="etat"> {{ etat }}</option>
                                </select>
                                <small v-if="enregistrer && (NomEntreprise = '' || 'Veuillez selectionner')" class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                              </div>
                                <label for="FormJuridique">Forme juridique :</label>
                              <div>
                                <input v-model="FormJuridique" type="text">
                                <small v-if="enregistrer && (FormJuridique = '')" class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                              </div>
                                <label for="ICE">ICE *</label>
                              <div>
                                <input v-model="Nom"  type="text">
                                <small v-if=" enregistrer && (ICE = '' || 'Veuillez selectionner')" class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                              </div>
                              </div>
                                <label for="">Famille de client:</label>
                              <div>
                                <select v-model="Famille" name="" id="">
                                  <option value="">Veuillez selectionner</option>
                                  <option v-for="famille in NomsEntreprise" :key="famille">{{famille}}</option>
                                </select>
                              </div>
                            </div>
                            <div class="s-sec">
                              <label  for="Téléphone">Téléphone :</label>
                              <div>
                                <input v-model="Telephone" placeholder=" +212 6000000" type="text" name="numero telephone" >
                              </div>
                              <label for="E-mail">E-mail :</label>
                              <div>
                                <input v-model="Email" placeholder="email@gmail.com" type="text" name="email" >
                              </div>
                                <label for="Adresse :">Adresse :</label>
                              <div>
                                <select>
                                  <option value="tst"></option>
                                </select>
                              </div>
                              <div class="post_div">
                                <div>
                                  <label for="">Code Postale :</label> 
                                  <input  v-model="CodePostal" type="number">
                                </div>
                                <div>
                                  <label for="">Ville :</label> 
                                  <input type="text">
                                </div>
                              </div>
                                <label for="">Pays :</label> 
                              <div>
                                  <input type="text">
                              </div>
                            </div>
                            </v-container>  
                            <small class="OBLIGATOIR">*Champs obligatoir !</small>
                            
                                <hr>
                                
                          </v-card-text>

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
                              @click='NouveauFournisseur()'
                            >
                              Enregister
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                <div class="nouveau-bon">
                 <router-link
                    to= ""
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        >
                        <v-icon class="mdi-plus-thick">
                            mdi-plus-thick
                        </v-icon>
                            Nouveau fournisseur
                        </v-btn>
                    </router-link>
                    <v-btn class="nv-client" @click="dialog = true">
                        <i class="fas fa-plus-circle"></i>
                        Création rapide d'un fournisseur
                    </v-btn>
                    </div>
                    <Table :PathPage='PathPage' :NouveauFournisseur='DataFournisseur'/>
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../../components/SideBar/Index.vue'
  import Table from '../../../components/Tables/table_client.vue'
  import NaVBar from '../../../components/navbar/navbar.vue'
  export default {
    name: 'Home',

 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
      
        Clients:[
        'chaima',
        'yassine',
        'Faical'
    ],
     NomsEntreprise:[
        'SARL 1',
        'SARL 2',
        'SARL 3'
    ],
    Particulier: false,
      entreprise: true,
      dialog:false,
      civilite:'',
      codeFournisseur:'',
      NomEntreprise:'',
      FormJuridique:'',
      DataFournisseur:'',
      ICE:'',
      Nom:'',
      Prenom:'',
      Famille:'',
      Email:'',
      Telephone:'',
      Portable:'',
      errorAlert:false,
      successAlert:false,

     enregistrer:false,

      civilites:[
        'Monsieur',
        'Madame',
        'Mademoiselle',
        'Maitre',
        'Docteur',
        'Professeur '
      ]
      
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

        NouveauFournisseur(){
          this.enregistrer = true
        //   console.log(this.Famille)
          if(
            this.codeFournisseur != '' && this.Nom != '' && this.Prenom != '' && this.Famille != 'veillez selectinonner'   && this.Email != ''  && this.Telephone != '' 
          ){
            let NouveauFournisseur ={
              Numero:this.codeFournisseur,
              Nom:this.Nom,
              Famille:this.Famille,
              Telephone:this.Telephone,
              Portable:this.Portable,
              Email:this.Email,
              dialog :this.dialog = false,
              success:this.successAlert = true
            }
            this.DataFournisseur = NouveauFournisseur
            console.log(NouveauFournisseur)
          }
          else{
            this.errorAlert = true
            console.log('not working :(')
          }
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