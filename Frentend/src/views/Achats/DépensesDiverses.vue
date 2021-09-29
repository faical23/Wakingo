<template>
  <div class="HomePage">
      <SideBar/>
      <div class="GlobalPage">
            <NaVBar/>
            <div class="NouvelleDevisProforma">
                <div class="NouvelleDevisProforma__Header">
                    <div class="NouvelleDevisProforma__Header__Left">
                       <h2>Gestion des dépenses diverses </h2>
                    </div>
                    <div class="NouvelleDevisProforma__Header__Right">
                        <div class="RouteLink">
                            <router-link to="/" class="RoutlinkZone"> <i class="far fa-home-alt"></i> Tableau de bord</router-link> >
                            <span  class="RoutlinkZone">Gestion des dépenses diverses</span>
                        </div>
                        <div >
                        
                        </div>
                        
                    </div>
                </div>
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
            <v-col cols="4" >
              <h5>Date de la commande :</h5>
              <div class="SearchBydate">
                  <label for="">De</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                  <label for="">Au</label>
                  <input type="date" @change="SearchByFunction()" v-model="SearchByEndDateCommande" >
              </div>

            </v-col>
            <v-col cols="2">
            <h5>Etat:</h5>
              <select name="" id="" @change="SearchByFunction()" v-model="SearchByEtat ">
                <option value="Tous">Tous</option>
                <option v-for="Etat,n in SearchByEtatArray"   :key="n" value="">{{Etat}}</option>

              </select>
            </v-col>
            <v-col cols="3">
            <h5>Ventilation :</h5>
              <select name="" id="" @change="SearchByFunction()" v-model="SearchByClient">
                <option value="Tous">Tous</option>
                <option v-for="(Client,n) in Clients" :key="n"  :value="Client" >{{Client}}</option>
              </select>
            </v-col>
            <v-col class="num" cols="3">
            <h5>Libellé :</h5>
            <input type="text" @keyup="SearchByFunction()" v-model="SearchByNumero">
            </v-col>            
          <!-- </v-row> -->
          
        </v-form>
    </v-content>
  
                      

                </v-card>
                
                
                </div>
                <div class="nouveau-bon">
                    <v-row justify="center">
                      <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="660px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            
                            v-bind="attrs"
                            v-on="on"
                            class="bnt-nv-bon-de-livraison  white--text"
                          >
                           <v-icon class="mdi-plus-thick">
                            mdi-plus-thick
                           </v-icon>
                            Nouvelle dépense diverse
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Nouvelle dépense diverse <span class="enAttente">En attente</span></span>
                          </v-card-title>
                          <hr>
                          <v-card-text>
                            <v-container class="popup-container">
                              <div class="SearchBydate2">
                                <v-col cols="3">
                                  <label for="">Date</label>
                                  <input class="date_input_diverse" type="date" @change="SearchByFunction()" v-model="SearchByStartDateCommande" >
                                </v-col>
                              <v-col cols="6">
                               <label for="Ventilation-select">Ventilation *</label>

                              <select name="Ventilation"  class="Ventilation">
                                  <option value="">Veillez séléctioner</option>
                              </select>
                              </v-col>
                              </div>




                              <div class="depense_second_section">
                                
                                <div class="libellé_dialog">
                                  <v-col cols="5">
                                  <label for="libellé">libellé:</label>
                                  <input  class="libele" type="text" name="libellé" >
                                  </v-col>
                                </div>

                                <div class="fournisseur_projet">
                                  <div>
                                  <v-col cols="3">
                                     <label for="Fournisseur-select">Fourniseur</label>
                                       <select name="Fourniseur"  class="Ventilation">
                                         <option value="">Veillez séléctioner</option>
                                       </select>
                                  </v-col>
                                  </div>
                                  <div>
                                  <v-col cols="5">
                                    <label for="projet-select">projet *</label>
                                       <select name="projet"  class="projet">
                                          <option value="">Veillez séléctioner</option>
                                       </select>
                                  </v-col>
                                  </div>
                                 </div>
                              </div>
                            </v-container>
                              <template>
                                <v-simple-table class="diverse_table">
                                  <template v-slot:default>
                                    <thead>
                                      <tr class="td_grid">
                                        <th class="Té">
                                          Qté.
                                        </th>
                                        <th class="text-left">
                                          <select name="projet"  class="projet">
                                          <option value="">P.U HT</option>
                                          <option value="">P.U TTC</option>
                                       </select>
                                        </th>
                                        <th class="text-left">
                                          TVA
                                        </th>
                                        <th class="text-left">
                                          TTC
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                       <tr class="qte_container">
                                          <td class="Quantité">
                                              <input  class="qte_input" type="text" placeholder="00">
                                              <select class="qte_select">
                                                  <optgroup  class="qte_select" label="Unité">
                                                      <option value="Unité(s)">Unité(s)</option>
                                                      <option value="Douzaine(s)">Douzaine(s)</option>
                                                  </optgroup>
                                                  <optgroup  label="Poids">
                                                      <option value="t">t</option>
                                                      <option value="kg">kg</option>
                                                      <option value="g">g</option>
                                                  </optgroup>
                                                  <optgroup  label="Temps de travail">
                                                      <option value="Jour(s)">Jour(s)</option>
                                                      <option value="Heure(s)">Heure(s)</option>
                                                  </optgroup>
                                                  <optgroup  label="Longueur/distance">
                                                      <option value="Km">Km</option>
                                                      <option value="m">m</option>
                                                      <option value="cm">cm</option>
                                                  </optgroup>
                                                  <optgroup  label="Volume">
                                                      <option value="Liters(s)">Liters(s)</option>
                                                  </optgroup>
                                              </select>
                                              
                                          </td>
                                          <td class="Quantité">
                                              <input type="text" class="prix_input" placeholder="00" >
                                              <input type="text" class="prix_input" placeholder="MADD" disabled>
                                          </td>
                                          <td>
                                              <select class="tva_select">
                                                  <option value="20,00%">20,00%</option>
                                                  <option value="14,00%">14,00%</option>
                                                  <option value="10,00%">10,00%</option>
                                                  <option value="7,00%">7,00%</option>
                                                  <option value="0,00%">0,00%</option>
                                              </select>
                                          </td>
                                          <td class="Quantité">
                                              <input type="text" class="prix_input" placeholder="00">
                                              <input type="text" class="prix_input" placeholder="MAD">
                                          </td>
                                      </tr>
                                    </tbody>
                                  </template>
                                </v-simple-table>
                              </template>
                              <div class="checkbox_popup">
                                 <input type="checkbox">
                                 <p>Deja payé ? </p>
                              </div>
                              
                            <small class="OBLIGATOIR">*Champs obligatoir !</small>
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
                              @click="dialog = false"
                            >
                              Save
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </div>
               
                    
                    </div>
                    <Table :ElementSearched='ElementSearched' :PathPage='PathPage' />
            </div>
          </div>
      <!-- </div> -->
    
  
                
</template>

<script>
  import SideBar from '../../components/SideBar/Index.vue'
  import NaVBar from '../../components/navbar/navbar.vue'
  import Table from '../../components/Tables/Table_F.vue'
  export default {
    name: 'Home',

 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({

       dialog: false,
     
      Clients: [
        'AAAA',
        'BBBB',
        'CCCC',
        'DDDD',
        'AAAA',
        'BBBB',
        'CCCC',
        'DDDD',
        'AAAA',
        'BBBB',
        'CCCC',
        'DDDD'
      ],
      SearchByStartDateCommande: '',
      SearchByEndDateCommande : '',
      SearchByEtat : 'Tous',
      SearchByClient : 'Tous',
      SearchByNumero :'',
      ElementSearched:'',
      PathPage:'',
      SearchByEtatArray : ["En retard","Annulé(e)","Accepté(e)","En attente"]
      
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
        GethPagePath(){
          this.PathPage = this.$router.currentRoute.path
          console.log(this.PathPage)
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
