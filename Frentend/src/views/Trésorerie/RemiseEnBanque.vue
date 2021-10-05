<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Remise en banque</h2>
                       <p>Cette page vous permet de saisir une remise en banque</p>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">remise en banque</span>
                        </div>
                        <div >
                        </div>
                        
                    <div>    
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text"
                         @click="lancerRecherche()" 
                        >
                        <i class="fas fa-play-circle"></i>
                           Lancer la recherche
                        </v-btn>
                    </div>
                    </div>
                </div>
                    <div  v-if="lancer && (ModePaiement = '' || 'Veillez séléctionner' || compteBancaire == '' || 'Veillez séléctionner') ">
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
                       Informations de la remise 
                     
                    </v-card-title>
                  <v-content>
                    <v-form class="recherche_rapide_content" >
                      <div class="info_section"> 
                        <div class="First_section">
                            <div>
                                <label for="">Date de la remise :</label>
                                <input type="date"  v-model="dateRapprochement" > 
                            </div>
                            <div>
                                <label for="Compte bancaire">Compte bancaire :</label>
                            <select v-model="compteBancaire" name="" id="">
                                <option value="Veillez séléctionner">Veillez séléctionner</option>
                            </select>
                            <small v-if="lancer && (compteBancaire = '' || 'Veillez séléctionner')" class="MessageErrorFiled">Vous devez selectionner un élément</small>
                            </div>
                            <div>
                                <label>Mode de paiement  :</label>
                               <select v-model="ModePaiement"  aria-placeholder="Veillez séléctionner" name="" id="">
                                <option value="Veillez séléctionner">Veillez séléctionner</option>
                                <option value="" v-for="(mode,m) in modePaement" :key="m">{{ mode }}</option>
                            </select>
                            <small v-if="lancer && (ModePaiement = '' || 'Veillez séléctionner')" class="MessageErrorFiled">Vous devez selectionner un élément</small>
                            </div>
                        </div>
                    <div class="chekbox_div_section">
                                <div class="chekbox_div">
                                    <input type="checkbox" name="" id="">
                                    <label for="Règlement pour cette banque uniquement">Règlement pour cette banque uniquement</label>
                                </div>
                                </div>        
                        </div> 
                    </v-form>
                  </v-content>
  
                      

                </v-card>
                
                </div>
                <div class="nouveau-bon">    
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
                        @click="lancerRecherche()"
                        >
                        <i class="fas fa-play-circle"></i>
                            Lancer la recherche
                        </v-btn>
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
            compteBancaire:'',
            ModePaiement:'',
            dateRapprochement: '',
            lancer: false,
            rapprochement: this.dateRapprochement,
            modePaement:[
                'Cheque',
                'Espece',
                'Traite'
            ]
        }
    
  },
         methods:{
            lancerRecherche(){
                this.lancer = true
            }
         }
  }
</script>