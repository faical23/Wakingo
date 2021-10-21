<template>

    <v-card class="tableDevis" id="tableDevis">
       
        <div class="TableAffiche">
            <p>Affiche</p>
            <select name="" id="" v-model="NumberRowShow">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <p>élément</p>
        </div>
        <div class="table-btn-group" v-if="!PathPage.includes('Accomptes')" >
          

        </div>
            <v-simple-table class="TableResultSearch" :style="PathPage.includes('Accomptes') ? 'margin:60px 0px ;' : ''" ref="printTable" id="table_f">
                    <template v-slot:default>
                  <thead>
                    <tr>
                       <th class="text-left">
                        <input type="checkbox" v-model="CheckAll" @click="CheckAllRows()">
                    </th>
                    <th  class="text-left" v-for="(HD,n) in HeaderTable" :key="n">{{HD}}</th>
                      <th class="text-left" v-if="PathPage.includes('famille_foursnisseur') ||  PathPage.includes('famille_client')">Libellé</th>
                      <th v-if="PathPage.includes('famille_client')"> Grille de tarif</th>
                      <th class="text-left" v-if="PathPage.includes('famille_foursnisseur') || PathPage.includes('famille_client')">Echéancier de paiement</th>
                      <th class="text-left" v-if="PathPage.includes('famille_foursnisseur') || PathPage.includes('famille_client')  ">Mode de paiementpréféré</th>
                      <th class="text-left" v-if="PathPage.includes('FamilleArticle')">Code</th>
                      <th class="text-left" v-if="PathPage.includes('FamilleArticle')">Libellé</th>
                      <th class="text-left" v-if="PathPage.includes('FamilleArticle')">Fournisseur</th>
                      <th class="text-left" v-if="PathPage.includes('FamilleArticle')">Suivie Stock</th>
                      <th class="text-left" v-if="PathPage.includes('CategorieArticle')">Libellé</th>
                      <th class="text-left" v-if="PathPage.includes('CategorieArticle')">Déscription</th>
                      <th class="text-left" v-if="PathPage.includes('CategorieArticle')">Categorie mere</th>
                      <th class="text-left" v-if="PathPage.includes('marque')">Libellé</th>
                      <th class="text-left">
                        #
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr
                    v-for="(item,n) in ListeClient.slice(0,NumberRowShow)"
                    :key="(item.name,n)"
                    >
                    <!-- Fournisseurs -->
                    <td><input type="checkbox" :checked="item.Select" @click="CheckedThisRow(n)"></td> 
                    <td v-if="PathPage.includes('famille_foursnisseur')"> {{ item.libelle }}</td>
                    <td v-if="PathPage.includes('famille_foursnisseur')"> {{ item.echeance }}</td>
                    <td v-if="PathPage.includes('famille_foursnisseur')"> {{ item.modePaiement }}</td>
                    <!-- CLIENTS --> 
                    <td v-if="PathPage.includes('famille_client')"> {{ item.libelle }}</td>
                    <td v-if="PathPage.includes('famille_client')"> {{ item.tarif }}</td>
                    <td v-if="PathPage.includes('famille_client')"> {{ item.echeance }}</td>
                    <td v-if="PathPage.includes('famille_client')"> {{ item.modePaiement }}</td>
                    <!-- ARTICLE -->
                    <td v-if="PathPage.includes('FamilleArticle')"> {{ item.code }}</td>
                    <td v-if="PathPage.includes('FamilleArticle')"> {{ item.libelle }}</td>
                    <td v-if="PathPage.includes('FamilleArticle')"> {{ item.fournisseur }}</td>
                    <td v-if="PathPage.includes('FamilleArticle')"> {{ item.suiviStock }}</td>
                    <!-- CATEGORIE article -->
                    <td v-if="PathPage.includes('CategorieArticle')"> {{ item.libelle }}</td>
                    <td v-if="PathPage.includes('CategorieArticle')"> {{ item.description }}</td>
                    <td v-if="PathPage.includes('CategorieArticle')"> {{ item.categorie }}</td>
                    <!-- Marque -->
                    <td v-if="PathPage.includes('marque')"> {{ item.marque }}</td>



                      <td>
                        <v-col cols="2" class="btnnnn">
                            <router-link v-if="PathPage.includes('client')" to="/Contacts/Liste_Clients">
                          <v-btn class="list-btn">
                              <i class="fas fa-list">
                              </i>
                            </v-btn>
                            </router-link> 
                            <router-link v-else to="/Contacts/Liste_fournisseurs">
                          <v-btn class="list-btn">
                              <i class="fas fa-list">
                              </i>
                            </v-btn>
                            </router-link> 
                            <router-link v-if="PathPage.includes('FamilleArticle')" to="/Contacts/Liste_fournisseurs">
                          <v-btn class="eye-btn">
                              <i class="fas fa-eye">
                              </i>
                            </v-btn>
                            </router-link> 
                          <v-btn class="edit-btn" @click="dialog = true">
                              <v-icon>
                                  mdi-pen
                              </v-icon>
                            </v-btn>
                          <v-btn class="delete-btn">
                               <v-icon>
                                  mdi-delete
                              </v-icon>
                            </v-btn>
                            </v-col>
                            <!-- edit falmille client et famille Fournisseur -->
                               <v-row justify="center" v-if="PathPage.includes('famille_client') || PathPage.includes('famille_fournisseur')">
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
                                    <input type="text">
                                    <label for="">Grille de tarif :</label>
                                    <select name="" id="">
                                        <option value="">Veillez selectionner</option>
                                    </select>
                                    <label for="">Échéancier de paiement :</label>
                                    <select name="" id="">
                                        <option value="">Veillez selectionner</option>
                                    </select>
                                    <label for="">Mode de paiement préféré :</label>
                                    <select name="" id="">
                                        <option value="">Veillez selectionner</option>
                                    </select>
                                    <label for="">Mode de livraison préféré :</label>
                                    <select name="" id="">
                                        <option value="">Veillez selectionner</option>
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
                              @click='NouvelleFamilleClient()'
                            >
                              Enregister
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                    <!-- edit famille article -->
                    <v-row v-else-if="PathPage.includes('FamilleArticle')" justify="center">
                      <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="700px"
                      >
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Nouvelle famille d'article </span>
                          </v-card-title>
                          <hr>
                          <v-card-text>
                           <v-container class="dialoguecontainer">
                                <div class="code_famille_article">
                                  <div class="CODE">
                                    <label for="">Code * :</label><br>
                                    <input type="text" placeholder="FA10">
                                  </div>
                                  <div>
                                    <label for="">Libellé * :</label><br>
                                    <input type="text" >
                                  </div>
                                </div>
                                <label for="">Description :</label><br>
                                <textarea name="" id="" cols="40" rows="7"></textarea>
                                <div class="Complement">
                                  <div class="titre_complement">
                                    <i class="fas fa-info-circle"></i>
                                    <h5>Complément</h5>
                                  </div>
                                  <hr>
                                  <div class="info_area_famille_article_container">
                                  <div class="info_area_famille_article">
                                    <div class="marge">
                                      <label for="">Marge :</label>
                                      <div class="disabled_area">
                                        <input class="ONE" type="text" placeholder="00.00">
                                        <input class="TWO" type="text" placeholder="%">
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div class="Garantie">
                                      <label for="">Garantie :</label>
                                      <div class="disabled_area">
                                        <input  class="ONE"  type="text" placeholder="00">
                                        <input class="TWO" type="text" placeholder="Mois">
                                      </div>
                                    </div>
                                  </div>
                                  <div class="tva_famille_article">
                                    <label for=""> TVA :</label>
                                    <select name="" id="">
                                      <option value="">10%</option>
                                      <option value="">20%</option>
                                      <option value="">30%</option>
                                    </select>
                                  </div>
                                  </div>
                                <div class="fournisseur_principal">
                                  <label for="">Fournisseur proncipal :</label>
                                  <select name="" id="">
                                    <option value="">Veuillez séléctionner</option>
                                  </select>
                                </div>
                               </div>  <!-- complement div -->
                               <div class="gestion_du_stock">
                                 <div class="titre_gestion_stock">
                                   <i class="fas fa-archive"></i>
                                   <h5>Gestion du stock</h5>
                                 </div>
                                 <hr>
                                 <div class="activer_gs">
                                   <input type="checkbox">
                                   <label for="">Activer la gestion des stocks</label>
                                 </div>
                                 <label for="">Dépot princiaple :</label><br>
                                 <select name="" id="">
                                   <option value="">veuillez séléctionner</option> 
                                   <option value="">dépot principal</option> 
                                 </select>
                               </div>
                                <small>* champs obligatoire</small>
                                
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
                          <!-- marque  -->
                           <v-row v-else-if="PathPage.includes('marque')" justify="center">
                      <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="700px"
                      >
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Nouvelle Catégories d'articles </span>
                          </v-card-title>
                          <hr>
                          <v-card-text>
                           <v-container class="dialoguecontainer">
                                <div class="code_famille_article">
                                  <div>
                                    <label for="">Libellé * :</label><br>
                                    <input class="marque" v-model="Libellé" type="text" >
                                  <small v-if="enregistrer && (Libellé == '')"  class="MessageErrorFiledClient">Ce champ est obligatoire.</small>
                                  </div>
                                  </div>
                                <small>* champs obligatoire</small>
                                
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
                              @click='NouvelleMarque()'
                            >
                              Enregister
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                      </td>
                    </tr>
                  </tbody>
                </template>

            </v-simple-table>
            <p>Affichage de l'élément 1 à {{ NumberRowShow }} sur {{ListeClient.length}} éléments</p>
            <v-row>
            <v-col cols="2">
              <div class="DrowDownEnvoyer">
                  <v-select
                  class="select"
                     :items="items"
                    label="Pour la séléction"
                    item-text="name"
                    v-model="ElementSelected"


                  ></v-select>
                  </div>
                </v-col>
            <v-col cols="2">
                <v-btn
                color="primary"
                class="btnn"
                @click="EnvoyerElement()"
                >Envoyer</v-btn>
            </v-col> 
            </v-row>   
        <!-- </v-col> -->
    </v-card>
</template>


<script>
 
  import DataTable from '../../../backend/data.json';
  export default {
    props:['ElementSearched','PathPage','NouveauFamilleFournisseur','NouveauFamilleClient' , 'NouveauFamilleArticle','NouveauCategorieArticle' , 'NouvelleMarque'],
    data() {
        
      return{
        toggleSelect: false,
        singleSelect: false,
        isOpen: false,
        selected: [],
        dialog:false,
        items: [
          'Valider',
          'Annuler',
          'Cloturer',
          'Supprimer',
        ],
        duplique: [
          'duplique'
        ],
        HeaderTable:[],
      ListeClient:[],
      heading: "Liste des Clients",
      ListeDevis:[],
      NumberRowShow:10,
      CheckAll:false,
      ElementSelected : ''
      }
    },
    methods: {

      CheckedThisRow(n){
          this.ListeDevis[n].Select ? this.ListeDevis[n].Select = false : this.ListeDevis[n].Select = true
      },
      CheckAllRows(){
          if(this.CheckAll == false)
          {
            // this.CheckAll == true
            this.ListeDevis.forEach(element =>{
                  element.Select = true
              })
              this.CheckAll == true

          }
          else{
                this.ListeDevis.forEach(element =>{
                    element.Select = false
                    console.log(element.Select)
                })
                this.CheckAll == false
          }
      },
      EnvoyerElement(){
          console.log(this.ElementSelected)
          let MakeActionsInthisRows = [];
          this.ListeDevis.forEach(element =>{
              if(element.Select == true){
                  MakeActionsInthisRows.push(element.Numéro)
              }
          })
          /// AXIOS TO DO ACTION HEER
          console.log(MakeActionsInthisRows)
          

      },

      GetDataTable(){
          if(this.PathPage.includes('Famille_Article')){
              let NewHeaderTable = ['Libellé','Grille de tarif','Echéancier de paeiment','Mode de paiement préféré']
              this.HeaderTable = NewHeaderTable
              console.log('WTF !!!!!!')
          }   
          else{
              console.log('nothing !!!!!!')
          }    
               
              console.log(this.HeaderTable)
      }

      
    },  
      mounted() {
        this.ListeClient = DataTable.ListeDevis
        this.ActionsShowedInRow()
        this.GetDataTable()
    },
    watch:{
        ElementSearched : function(){
            console.log(this.ElementSearched)
        },
        NouveauFamilleFournisseur: function(){
          console.log('DATA IS :',this.NouveauFamilleFournisseur)
          this.ListeClient.push(this.NouveauFamilleFournisseur)
          console.log("Old data" ,this.ListeClient)
        },
        NouveauFamilleClient: function(){
          console.log('DATA IS :',this.NouveauFamilleClient)
          this.ListeClient.push(this.NouveauFamilleClient)
          console.log("Old data" ,this.ListeClient)
        },
        NouveauFamilleArticle: function(){
          console.log('DATA IS :',this.NouveauFamilleArticle)
          this.ListeClient.push(this.NouveauFamilleArticle)
          console.log("Old data" ,this.ListeClient)
        },
        NouveauCategorieArticle: function(){
          console.log('DATA IS :',this.NouveauCategorieArticle)
          this.ListeClient.push(this.NouveauCategorieArticle)
          console.log("Old data" ,this.ListeClient)
        },
        NouvelleMarque: function(){
          console.log('DATA IS :',this.NouvelleMarque)
          this.ListeClient.push(this.NouvelleMarque)
          console.log("Old data" ,this.ListeClient)
        },
       
    }
  }

</script>






<style >
.btnn{
    margin-top: 22px;
}

.select{
    margin-left: 10px;
}
</style>