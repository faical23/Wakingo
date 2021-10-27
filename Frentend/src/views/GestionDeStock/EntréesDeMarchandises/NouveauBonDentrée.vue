<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Bon d'entrée : BE4</h2>
                       <p>Cette page vous permet de créer et mettre à jour un bon d'entrée</p>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Les entrées de marchandises > Bon d'entrée : BE4</span>
                        </div>
                        <div >
                        </div>
                        
                    <div>
                         <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    >     
                    <v-btn
                        elevation="1"
                        class="bnt-nv-bon-de-livraison  white--text" 
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
                        class="bnt-nv-bon-de-livraison  white--text" 
                        >
                        <i class="fas fa-undo"></i>
                            Réinialiser
                        </v-btn>
                    </router-link>
                    </div>
                    </div>
                </div>
                <div class="card2">
                    <v-card flat dense >
                  <v-content>
                    <v-form class="recherche_rapide_content" >
                        <div>
                        <v-tabs
                        v-model="tab"
                        background-color="white"
                        class="black--text"
                        >
                        <v-tab
                            v-for="item in items"
                            :key="item.tab"
                        >
                            <i :class="item.icon" style="margin-right:7px"></i>
                            {{ item.tab }}
                        </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                        <v-tab-item
                            v-for="item in items"
                            :key="item.tab"
                        >
                            <v-card flat style="height:auto">
                            <v-card-text>
                                <!-- IF TAB SELECTED IS INFORMATIONS PI2CE SHOW : -->
                                <div class="information_piéce" v-if="item.tab == 'Informations piéce'">
                                    <div>
                                        <label for="">Dépôt *:</label>
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div>
                                        <label for="">Numéro * :</label>
                                        <input type="text">
                                    </div>
                                    <div>
                                        <label for="">Date de la réception * :</label>
                                        <input type="date">
                                    </div>
                                    <div>
                                        <label for="">N° de référence :</label>
                                        <input type="date">
                                    </div>
                                    <div>
                                        <label for="">Responsable :</label>
                                        <select name="" id="">
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                    <!-- IF TAB SELECTED IS INFORMATIONS GENERAL SHOW : -->
                                    <div class="Emplacement" v-if="item.tab == 'Emplacements'">
                                            <!-- hh -->
                                    <div class="ctn">
                                        <div class="depot_second_tab">
                                            <div>
                                                <label for="">Code :</label><br>
                                                <hr>
                                                <input :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' " type="text" v-if="add_emmplacement == true" >
                                            </div>
                                            <div>
                                                <label for="">Libellé :</label><br>
                                                <hr>
                                                <input :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' " type="text" v-if="add_emmplacement == true" >
                                            </div>
                                            <div>
                                                <label for="">Par défaut :</label><br>
                                                <hr>
                                                <input :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' " type="checkbox" v-if="add_emmplacement == true" >
                                            </div>
                                            <div>
                                                <label for="">#</label><br>
                                                <hr>
                                                <v-btn class="x" v-if="add_emmplacement == true"  @click="add_emmplacement = false" style="background-color:red">X</v-btn>
                                            </div>
                                        </div>
                                    </div>
                                        <v-btn class="y" style=" background-color: #00acd6" @click="add_emmplacement = true">
                                            <i class="fas fa-plus"></i>
                                            Ajouter un emplacement
                                            </v-btn> 
                                    </div>
                            </v-card-text>
                            </v-card>
                        </v-tab-item>
                        </v-tabs-items>
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
                        >
                        <i class="fas fa-play-circle"></i>
                            Générer le Relevé
                        </v-btn>
                    </router-link>
                    </div>
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import SideBar from '../../../components/SideBar/Index.vue'
  import NaVBar from '../../../components/navbar/navbar.vue'
  export default {
    components: {
      SideBar,
      NaVBar,
      },
      data: () => ({
          tab: null,
        items: [
          { icon: "fa fa-file" , tab: 'Informations piéce'},
          { icon: "fa fa-cogs", tab: 'Options'},
        ],
      })

  }
</script>