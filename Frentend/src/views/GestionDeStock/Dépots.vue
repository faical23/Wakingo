<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
          <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Gestion des dépôts</h2>
                    </div>
                    
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Gestion des dépôts</span>
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
                            Ajouter un dépot
                        </v-btn>
                    </router-link>
                        <div >
                        </div>
                    <div>
                    </div>
                    </div>
                </div>
                <div  class="alert_commerciaux_div">
                <v-alert v-if="successAlert == true" :value="successAlert " type="success"> 
                    <!--  -->
                    Le dépot a bien été ajouté!
                </v-alert>
                <v-alert v-if="failAlert == true" type="error">
                    We're so sorry , something went wrong , please check you informations and try again , thank you!
                </v-alert>
                </div>
                        <v-row>
                            <v-dialog
                                v-model="dialog"
                                persistent
                                max-width="788px"
                                
                                class="depot">
                                <v-card class="depot" >
                                    <v-card-title class="text-h5">
                                        <h5>Nouveau dépôt</h5>
                                    </v-card-title>
                                    <hr>
                                    <v-card-text>
                                        <v-container class="commerciaux_container">
                                            <div class="code_commercial">
                                                <div class="code_commercial_div">
                                                    <label for="">Code * :</label><br>
                                                    <input type="text" :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' " placeholder="VE1" v-model="code_vendeur">
                                                </div>
                                                <div>
                                                    <label for="">Libellé * :</label><br>
                                                    <input :style="add && (libelle == '') ? 'border-color: #dd4b39;' : '' " type="text" class="libelle_commerciaux" v-model="libelle">
                                                    <small v-if="add  && (libelle == '')" class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                                                </div>
                                            </div>
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
                                                    <v-card flat>
                                                    <v-card-text>
                                                        <!-- IF TAB SELECTED IS INFORMATIONS GENERAL SHOW : -->
                                                        <div class="information_general_depot" v-if="item.tab == 'Informations général'">
                                                            <div class="cordonee_depot_title">
                                                                <i class="fas fa-map-signs"></i>
                                                                <h5>Adresse et Coordonnées</h5>
                                                            </div>
                                                            <hr>
                                                            <div class="depot_text_area">
                                                                <label for="">Adresse :</label><br>
                                                                <textarea :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' " name="" id="" cols="86" rows="7"></textarea>
                                                            </div>
                                                            <div class="depot_flex_div">
                                                                <div >
                                                                <label for="">Code postale :</label><br>
                                                                <input :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' "  type="text" placeholder="0000">
                                                                </div>
                                                                <div>
                                                                <label for="">Ville :</label><br>
                                                                <input :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' "  type="text">
                                                                </div>
                                                                <div>
                                                                <label for="">Pays :</label><br>
                                                                <input :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' "  type="text">
                                                                </div>
                                                            </div >
                                                            <div class="cordonee_depot_title">
                                                                <i class="fas fa-user-circle"></i>
                                                                <h5>Responsable</h5>
                                                            </div>
                                                            <hr>
                                                            <div class="depot_flex_div_2">
                                                                <div class="name">
                                                                    <label for="" >Nom :</label><br>
                                                                    <input type="text"  v-model="user" :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' " >
                                                                </div>
                                                                <div>
                                                                    <label for="">Fonction :</label><br>
                                                                    <input type="text" :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' " >
                                                                </div>
                                                            </div>
                                                            <div class="depot_flex_div">
                                                                <div >
                                                                <label for="">Téléphone :</label><br>
                                                                <input v-model="Portable" :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' "  type="text" placeholder="0600000000">
                                                                </div>
                                                                <div>
                                                                <label for="">Mobile :</label><br>
                                                                <input  v-model="Portable" :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' "  type="text">
                                                                </div>
                                                                <div>
                                                                <label for="">E-mail :</label><br>
                                                                <input :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' "  type="text">
                                                                </div>
                                                            </div >
                                                            <div class="cordonee_depot_title">
                                                                <i class="fas fa-pencil"></i>
                                                                <h5>Observations :</h5>
                                                            </div>
                                                            <hr>
                                                            <div class="depot_text_area">
                                                                <textarea :style="add && (libelle == '') ? 'border-color: #3c763d;' : '' " name="" id="" cols="86" rows="7"></textarea>
                                                            </div>
                                                        </div>
                                                         <!-- IF TAB SELECTED IS INFORMATIONS GENERAL SHOW : -->
                                                         <div class="Emplacements" v-if="item.tab == 'Emplacements'">
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
                                            <div>
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
                              @click='NouveauDepot()'
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
                       <h5>Liste des dépôts</h5>
                   </v-card-title>
                       <hr>
                <Table :PathPage='PathPage' :NouveauDepot='DataNouveauDepot'/>
                 </v-card>
                 
                </div>
            </div>
          </div>
      </div>
    
  
                
</template>

<script>
  import Table from '../../components/Tables/Table_F.vue'
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  export default {
    components: {
      SideBar,
      NaVBar,
      Table
      },
      
    data: () => ({
        dialog:false,
        add:false,
        code_vendeur:'',
        libelle:'',
        user:'',
        depot:'',
        commition:'',
        remise:'',
        users:[
         'Karim BEN'
        ],
        test:'test',
        successAlert:false,
        failAlert:false,
        DataNouveauDepot:'',
         tab: null,
        items: [
          { icon: "fas fa-info-circle" , tab: 'Informations général'},
          { icon: "fa fa-map-marker", tab: 'Emplacements'},
        ],
        add_emmplacement:false,
        Portable:'',
        
    
  }),
    methods: {
        add_emmplacement(){
            this.add_emmplacement == true
            console.log(this.add_emmplacement)
        },

        NouveauDepot(){
            this.add = true
            if( this.libelle !== '' ){
                
                let NouveauDepot ={
                    code:this.code_vendeur,
                    libelle:this.libelle,
                    client:this.user,
                    Portable:this.Portable,
                }
                this.DataNouveauDepot = NouveauDepot 
                this.dialog = false
                this.successAlert = true
                }
            else{
                this.failAlert == true
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
        setTimeout(()=>{
          this.successAlert=false
        },5000)
    }

  
  }
</script>   