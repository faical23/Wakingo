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
                   <v-row justify="center">
                      <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="660px"
                      >
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
                                  <input class="date_input_diverse" type="date" @change="SearchByFunction()" v-model="date" >
                                  <P v-if="Add && (date == '')" class="MessageErrorFiled">champs obligatoire</P>
                                </v-col>
                              <v-col cols="6">
                               <label for="Ventilation-select">Ventilation *</label>
                               <select name="Ventilation"  class="Ventilation" v-model="Ventilation">
                                  <option value="">Veillez séléctioner</option>
                                  <option v-for="ventilation,V in Ventilations" :key="V" value="ventilations">{{ ventilation }}</option>
                              </select>
                              <P v-if="Add &&  (Ventilation == '')" class="MessageErrorFiled">champs obligatoire</P>
                              </v-col>
                              </div>
                              <div class="depense_second_section">
                                
                                <div class="libellé_dialog">
                                  <v-col cols="5">
                                  <label for="libellé">libellé:</label>
                                  <input  class="libele" type="text" name="libellé" v-model="libellé" >
                                  <P v-if="Add && (libellé == '')" class="MessageErrorFiled">champs obligatoire</P>
                                  </v-col>
                                </div>

                                <div class="fournisseur_projet">
                                  <div>
                                  <v-col cols="3">
                                     <label for="Fournisseur-select">Fourniseur</label>
                                       <select name="Fourniseur"  class="Ventilation" v-model="fournisseur">
                                         <option value="">Veillez séléctioner</option>
                                         <option v-for="fournisseur,F in fournisseurs" :key="F" :value="fournisseurs">{{ fournisseur }}</option>
                                       </select>
                                       <P v-if="Add &&  (fournisseur == '')" class="MessageErrorFiled">champs obligatoire</P>
                                  </v-col>
                                  </div>
                                  <div>
                                  <v-col cols="6">
                                    <label for="projet-select">projet *</label>
                                       <select name="projet"  class="projet" v-model="projet">
                                          <option value="">Veillez séléctioner</option>
                                       </select>
                                       <!-- <P v-if="Add &&  (projet == '')" class="MessageErrorFiled">champs obligatoire</P> -->
                                  </v-col>
                                  </div>
                                 </div>
                              </div>
                            </v-container>
                              <template>
                                <v-simple-table class="diverse_table" style=" margin: 0px 20px;">
                                  <template v-slot:default>
                                    <thead>
                                      <tr class="td_grid">
                                        <th class="Té">
                                          Qté.
                                        </th>
                                        <th class="text-left">
                                          <select name="projet"  class="projet" v-model="typePrix" @change="CalculteTTC()">
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
                                              <input  class="qte_input" type="text" placeholder="00" v-model="qte" @keyup='CalculteTTC()'>
                                              <select class="qte_select" v-model="QtéType">
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
                                              <P v-if="Add &&  (qte == '0'|| isNaN(qte))"  class="MessageErrorFiled">champs obligatoire</P>
                                          </td>
                                          <td class="Quantité">
                                              <input type="text" class="prix_input" placeholder="00" v-model="prix" @keyup='CalculteTTC()'>
                                              <input type="text" class="prix_input" placeholder="MADD" disabled>
                                          </td>
                                          <P v-if="Add && ( prix == '0') "> champs OBLIGATOIR</P>
                                          <td>
                                              <select v-model="Tva" @change='CalculteTTC()' class="tva_select">
                                                  <option value="20,00%">20,00%</option>
                                                  <option value="14,00%">14,00%</option>
                                                  <option value="10,00%">10,00%</option>
                                                  <option value="7,00%">7,00%</option>
                                                  <option value="0,00%">0,00%</option>
                                              </select>
                                          </td>
                                          <td class="Quantité">
                                              <input type="text" class="prix_input" placeholder="00" v-model="TotatlTTC">
                                              <input type="text" class="prix_input" placeholder="MAD" disabled>
                                          </td>
                                          
                                      </tr>
                                    </tbody>
                                  </template>
                                </v-simple-table>
                              </template>
                              <div class="checkbox_popup">
                                 <input type="checkbox">
                                 <p @click="isShow = !isShow">Deja payé ? </p>
                              </div>
                              
                            <small class="OBLIGATOIR">*Champs obligatoir !</small>
                            <div v-show="isShow" class="mode_section">
                              <div class="mode_paiement_div">
                                <i class="fas fa-credit-card"></i>
                                <h4 class="mode">Détails du paiement</h4>
                              </div>
                                <hr>
                                <div class="input_section">
                                  <div>

                                  <label for="Date d'échéance *">Date d'échéance *</label>
                                  <input class="outlined" type="date" name="" id="">
                                  </div>
                                  <div>
                                    <label for="Mode de paiement *">Mode de paiement *</label>
                                  <select class="outlined" name="" id="">
                                    <option value="">Veillez séléctioner</option>
                                  </select>
                                  </div>
                                  <div>
                                    <label for="Trésorerie de destinationx">Trésorerie de destination *</label>
                                  <select class="outlined" name="" id="">
                                    <option value="">Veillez séléctioner</option>
                                  </select>
                                  </div>
                                  <div class="numero">
                                  <label for="">Numéro</label>
                                  <input class="outlined" type="text">
                                  </div>
                                </div>
                            </div>
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
                              @click='NouvelleDepenseDiverse()'
                            >
                              Enregister
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </div>
                     <div class="nouveau-bon2">
                    <v-btn
                            elevation="1"
                            class="bnt-nv-bon-de-livraison  white--text"
                            @click="dialog = true"
                            >
                            <v-icon class="mdi-plus-thick">
                                mdi-plus-thick
                            </v-icon>
                                 Nouvelle dépense diverse
                            </v-btn>
                    <Table :ElementSearched='ElementSearched' :PathPage='PathPage' :NouvellDepenseDevis='DataNouvellDepenseDevis' />
                    </div>
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
    emits:['NouvellDepenseDevis'],

 props: {
   ninja:{
     type: String,
   }
 },
    data: () => ({
       isShow: true,

      Ventilations: [
        '112 frais préliminaire',
        '148 rembourssemeet',
        '66 achats revendus ',
        '66 achats consommé',
        '988 Location ',
        '433 Primes assurances',
        '11 transport',

      ],

      fournisseurs: [
        'Mr. Youssef Elaasiri',
        'Mennara SARL',
        'Mr. Abdel maghribi',
        'Mm. Amina moumen',
        'Agadir SARL',
      ],
     
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
        dialog: false,
        Add:false,
        date:'',
        libellé:'',
        Ventilation:'',
        fournisseur:'',
        projet:'',
        qte:0,
        typePrix:'P.U.HT',
        Tva:'20,00%',
        TTC:'',
        prix:0,
        TotatlTTC:'',
        QtéType:'Unité(s)',
        DataNouvellDepenseDevis:'',



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

      NouvelleDepenseDiverse(){
      this.Add = true
      if(
        this.date !='' &&  this.libellé != '' &&  this.Ventilation != '' &&  this.fournisseur != '' && this.qte != 0 &&  this.prix != 0
      ){ 
        let NouvelleDepense ={
          date:this.date , 
          Ventiation_depense:this.Ventilation,
          Libellé:this.libellé,
          TotatlTTC:this.TotatlTTC,

        }
        this.DataNouvellDepenseDevis = NouvelleDepense 
          console.log(NouvelleDepense)
        // this.$emit('NouvellDepenseDevis',NouvelleDepense)
      }
      else{
        console.log("not working")
      }
    },

     CalculteTTC(){
          let TotalHT = this.prix * this.qte
          if(this.typePrix === "P.U.HT"){
                this.TotatlTTC =(TotalHT + (TotalHT * parseFloat(this.Tva)/ 100)).toFixed(2)
          }
          else if(this.typePrix === "P.U.TTC"){
                this.TotatlTTC =TotalHT

          }
      },  

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
    },
    

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
