<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Gestion des commerciaux</h2>
                    </div>
                    
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Gestion des commerciaux</span>
                        </div>
                         <router-link
                    to= ""
                    >     
                    <v-btn
                        @click="dialog = true"
                        elevation="1"
                        class="nouveau_commercial" 
                        >
                        <i class="fas fa-plus"></i>
                            Ajouter un commercial
                        </v-btn>
                    </router-link>
                        <div >
                        </div>
                    <div>
                    </div>
                    </div>
                </div>
                        <v-row>
                            <v-dialog
                            v-model="dialog"
                            persistent
                            max-width="768px">
                                <v-card>
                                    <v-card-title class="text-h5">
                                        <h5>Nouveau commercial</h5>
                                    </v-card-title>
                                    <hr>
                                    <v-card-text>
                                        <v-container class="commerciaux_container">
                                            <div class="code_commercial">
                                                <div class="code_commercial_div">
                                                    <label for="">Code du vendeur * :</label><br>
                                                    <input type="text" placeholder="VE1" v-model="code_vendeur">
                                                </div>
                                                <div>
                                                    <label for="">Libellé * :</label><br>
                                                    <input type="text" class="libelle_commerciaux" v-model="libelle">
                                                </div>
                                            </div>
                                            <div class="commercial_checkbox">
                                                <input type="checkbox">
                                                <label style="margin-left:6px;" for="">Accés restreint</label>
                                            </div>
                                            <hr>
                                            <div class="depot_div_commercial">
                                                <div class="user_class_commercial">
                                                    <label for="">Utilisateur :</label>
                                                    <select v-model="user" name="" id="">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label for="">Dépôt :</label>
                                                    <select v-model="depot" name="" id="">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="regle_div_commercial">
                                                <div class="commision_class_commercial">
                                                    <label for="">Règle de commissionnement :</label>
                                                    <select v-model="commition" name="" id="">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div class="remise">
                                                    <label for="">Remise autorisée :</label><br>
                                                    <input v-model="remise" type="text" placeholder="0.00" >
                                                    <input type="text" placeholder="%">
                                                </div>
                                            </div>
                                            <div>
                                                <div class="cordonee_commercial_title">
                                                    <i class="fas fa-map-signs"></i>
                                                    <h5>Adresse et Coordonnées</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="adressETcordonee">
                                                    <div>
                                                        <label for="">Téléphone :</label><br>
                                                        <input placeholder="+212 357689973" type="text">
                                                    </div>
                                                    <div>
                                                        <label for="">Mobile :</label><br>
                                                        <input placeholder="+212 357689973" type="text">
                                                    </div>
                                                    <div>
                                                        <label for="">E-mail :</label><br>
                                                        <input placeholder="@" type="text">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="adress_container_commercial">
                                                <div class="flex_part">
                                                <div>
                                                    <label for="">Adress :</label><br>
                                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                                </div>
                                                <div class="two_inputs_commercial">
                                                    <div>
                                                        <label for="">Code Postale :</label><br>
                                                        <input type="text">
                                                    <div class="pays_commercial_input">
                                                        <label for="">Pays :</label><br>
                                                        <input type="text">
                                                    </div>
                                                    </div>
                                                    <div>
                                                        <label for="">Ville :</label><br>
                                                        <input type="text">
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        <span>* champs obligatoire</span>
                                        </v-container>
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
                              @click='NouveauClient()'
                            >
                              Enregister
                            </v-btn>
                          </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                <div class="card_gestion_des_commercisux">
                  <v-card flat dense > 
                   <v-card-title>
                       <h5>Liste des commerciaux</h5>
                   </v-card-title>
                       <hr>
                 </v-card>
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
      
    data: () => ({
        dialog:false,
        code_vendeur:'',
        libelle:'',
        user:'',
        depot:'',
        commition:'',
        remise:'',
    
  })
  }
</script>   