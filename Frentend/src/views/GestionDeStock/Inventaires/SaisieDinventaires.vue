<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Inventaire : STO1 </h2>
                       <p>Cette page vous permet de créer et mettre à jour un bon d'Inventaire</p>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Les sorties de marchandises > Bon d'Inventaire</span>
                        </div>
                        <div >
                        </div>
                        
                    
                    <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-enregistrer_entree   white--text" 
                        >
                        <i class="fas fa-save"></i>
                            Enregistrer
                        </v-btn>
                    </router-link>
                    <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-renitialiser_entree  white--text" 
                        >
                        <i class="fas fa-undo"></i>
                            Réinialiser
                        </v-btn>
                    </router-link>
                    </div>
                </div>
                  <v-content class="entree_content">
                    <v-form  >
                        <div class="entree_tab">
                        <v-tabs
                        v-model="tab"
                        background-color="white"
                        class=" entree black--text"
                        >
                        <v-tab
                            v-for="tab in items"
                            :key="tab.tab"
                        >
                            <i :class="tab.icon" style="margin-right:7px"></i>
                            {{ tab.tab }}
                        </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                        <v-tab-item
                            v-for="item in items"
                            :key="item.tab"
                        >
                            <v-card flat class="entre_card" style="height:auto">
                           
                                <!-- IF TAB SELECTED IS INFORMATIONS PI2CE SHOW : -->
                                <div class="information_piéce"  v-if="item.tab == 'Informations piéce'">
                                    <v-col cols="2" >
                                    <div>
                                        <label for="">Dépôt *:</label><br>
                                        <select class="depot_entree" name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    </v-col>
                                     <v-col cols="2" >
                                    <div>
                                        <label for="">Numéro * :</label><br>
                                        <input type="text">
                                    </div>
                                     </v-col>
                                      <v-col cols="2" >
                                    <div>
                                        <label for="">Date de l'inventaire * :</label><br>
                                        <input type="date">
                                    </div>
                                     </v-col>
                                     <v-col cols="2" >
                                    <div>
                                        <label for="">N° de référence :</label><br>
                                        <input type="date">
                                    </div>
                                      </v-col>
                                     <v-col cols="2" >
                                    <div>
                                        <label for="">Articles par document :</label><br>
                                        <select name="" id="">
                                            <option value="test"></option>
                                        </select>
                                    </div>
                                      </v-col>
                                     <v-col cols="2" >
                                    <div>
                                        <label for="">Responsable :</label><br>
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                     </v-col>
                                </div>
                                  
                            </v-card>
                        </v-tab-item>
                        </v-tabs-items>
                    </div>                    
                    </v-form> 
                  </v-content>
            </div>
            <remarque />
            <v-btn class="enregitrer_entree" style="color: white;">
                Enregitrer
            </v-btn>
          </div>
      </div>
      
  
                
</template>


<script>
  import SideBar from '../../../components/SideBar/Index.vue'
  import NaVBar from '../../../components/navbar/navbar.vue'
  import remarque from '../../../components/Vendes/Remarque.vue'
  export default {
    components: {
      SideBar,
      NaVBar,
      remarque
      },
      data: () => ({
          tab: null,
        items: [
          { icon: "fa fa-file" , tab: 'Informations piéce'},
        ],
      })

  }
</script>