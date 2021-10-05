<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Rapprochement bancaire</h2>
                       <p>Cette page vous permet de saisir un rapprochement bancaire</p>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Rapprochement bancaire</span>
                        </div>
                        <div >
                        </div>
                        
                    <div>
                             
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        @click="lancerRapprochement"
                        >
                        <i class="fas fa-play-circle"></i>
                            Lancer le rapprochement
                        </v-btn>
                    </div>
                    </div>
                </div>
                <div  v-if="Lancer && (CompteBancaire = '' || 'Veillez séléctionner' || soldeRelevé == '' || 0) ">
                    <v-alert
                        class="alert"
                        dense
                        outlined
                        type="error"
                        >
                        <i class="fas fa-ban" style="color:red"></i>
                        Le formulaire contient des erreurs<strong> (Champs obligatoires non remplis ou incorrects) </strong> 
                    </v-alert>
                    </div>
                <div class="card_rapp_bancaire">
                    <v-card flat dense >
                        <v-card-title dense class="recherche_rapide_rapp_bancaire text-p  white--text">
                        <i class="fas fa-info-circle"></i>
                       Informations sur le rapprochement 
                     
                    </v-card-title>
                  <v-content>
                    <v-form class="recherche_rapide_content" >
                      <div class="info_section"> 
                        <div class="First_section">
                            <div>
                                <label for="">Date du rapprochement :</label>
                                <input type="date"  v-model="dateRapprochement" > 
                            </div>
                            <div class="CompteBancaire">
                                <label for="Compte bancaire">Compte bancaire :</label>
                            <select v-model="CompteBancaire" name="" id="">
                                <option value="Veillez séléctionner">Veillez séléctionner</option>
                            </select>
                            <small v-if=" Lancer && (CompteBancaire = '' || 'Veillez séléctionner') " class="MessageErrorFiled">Vous devez selectionner un élément</small>
                            </div>
                            <div>
                                <label>Libellé  :</label>
                               <input type="text" :value="rapprochement" >
                               <!-- <p v-model="Rapprochement" >{{  dateRapprochement }}</p> -->
                            </div>
                        </div>

                        <div class="Second_section">
                            <div >
                                 <label for="">Solde du compte :</label>
                                <div class="solde">
                                <input  class="disable"  placeholder="0,00" disabled type="text">
                                <div>
                                      <span>MAD</span>
                                </div>
                                </div>
                            </div>
                                <div>
                                 <label for="">Solde du relevé  :</label>
                            <div class="solde">
                                <input v-model="soldeRelevé" placeholder="0,00" type="text">
                                <div>
                                     <span>MAD</span>
                                </div>
                            </div>
                                 <small v-if=" Lancer && (soldeRelevé == '' || 0 ) " class="MessageErrorFiled">Vous devez spécifier un montant correcte.</small>
                                </div>
                                <div>
                                 <label for="">Solde des lignes non rapprochées :</label>
                            <div class="solde">
                                <input class="disable" placeholder="0,00" type="text" disabled>
                                <div>
                                     <span>MAD</span>
                                </div>
                                </div>
                            </div>
                                <div>
                                 <label for="">Écart de rapprochement :</label>
                            <div class="solde">
                                <input  placeholder="0,00" type="text">
                                <div>
                                     <span>MAD</span>
                                </div>
                                </div>
                            </div>
                        </div>
                      </div>                        
                    </v-form>
                    
                    
                  </v-content>
  
                      

                </v-card>
                
                </div>
                <div class="nouveau-bon">
                 <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        @click="lancerRapprochement"
                        >
                        <i class="fas fa-play-circle"></i>
                            Lancer le rapprochement
                        </v-btn>
                    </router-link>
                    </div>
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  export default {
    components: {
      SideBar,
      NaVBar,
      },
    data() {
        return{
            Lancer : false,
            CompteBancaire:'',
            soldeRelevé:'',
            dateRapprochement: '',
            rapprochement: this.dateRapprochement
        }
    
  },
         methods:{
            lancerRapprochement(){
                this.Lancer = true
            }
         }
  }
</script>