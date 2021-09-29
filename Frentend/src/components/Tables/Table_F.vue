<template>

    <v-card class="tableDevis" id="tableDevis">
        <v-card-title class="table-title" >
            <v-icon  class="mdi-clipboard-list-outline" color="white" >
              mdi-file-pdf-outline
            </v-icon>
            Liste des commandes clients   
        </v-card-title>
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
          <v-icon  class=" mdi-file-pdf-outline" color="black" >
               mdi-file-pdf-outline
          </v-icon>
        <v-btn
       id="btnSearch" value="Search" @click="GetValue()"
        >
             copier
        </v-btn>
        <export-excel :data="ListeDevis">
            <v-btn>
              exel
           </v-btn>
        </export-excel>
        
        <v-btn @click="printForm()" >
          Pdf

        <v-icon
        class="mdi-file-pdf-outline"
        color="black"
        >mdi-file-pdf-outline</v-icon>
        </v-btn>
        <v-btn @click="printData()"
       >
        imprimer
        </v-btn>
         <v-flex xs12>
            <div id="printSection">
              <!-- <span v-html="printStuff"></span> -->
            </div>
          </v-flex>

        </div>
            <v-simple-table class="TableResultSearch" :style="PathPage.includes('Accomptes') ? 'margin:60px 0px ;' : ''" ref="printTable" id="table_f">
                                <template v-slot:default>
                  <thead>
                    <tr>
                       <th class="text-left">
                        <input type="checkbox" v-model="CheckAll" @click="CheckAllRows()">
                    </th>
                    <th  class="text-left" v-for="(HD,n) in HeaderTable" :key="n">{{HD}}</th>
                      <th class="text-left">
                        #
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr
                    v-for="(item,n) in ListeDevis.slice(0,NumberRowShow)"
                    :key="(item.name,n)"
                    >
                    <td><input type="checkbox" :checked="item.Select" @click="CheckedThisRow(n)"></td> 

                    
                      <td v-if="PathPage.includes('ListeCommandes') || PathPage.includes('ListeDevies') || PathPage.includes('Gestion_des_bons_de_livraison') || PathPage.includes('Reglement')">{{ item.date }}</td>
                      <td v-if="PathPage.includes('Gestion_des_Factures')">{{ item.DateDeFacture }}</td>
                      <td v-if="PathPage.includes('Liste_Des_Avoirs')">{{ item.dateAvoir}}</td>
                      <td  v-if="!PathPage.includes('Recurrentes') && !PathPage.includes('DepensesRecurrents') && !PathPage.includes('Diverses')" ><router-link to= "/Ventes/NouveauDevis/Proforma"> <p v-if="PathPage.includes('Reglement')">réglement n°</p>{{ item.Numéro }}</router-link></td>
                      <td  v-if="!PathPage.includes('Recurrentes') && !PathPage.includes('Diverses') && !PathPage.includes('DepensesRecurrents') ">{{ item.client}}</td>
                      <td v-if="PathPage.includes('ListeCommandes')">{{ item.dateLivraison }}</td> 
                      <td v-if="PathPage.includes('Gestion_des_Factures') || PathPage.includes('Liste_Des_Avoirs') || PathPage.includes('ListeDevies')">{{ item.Total }}</td> 
                      <td v-if="PathPage.includes('ListeDevies')"> {{ item.devis }}</td>
                      <td v-if="PathPage.includes('ListeDevies')"> {{ item.Référence }}</td>
                      <td v-if="PathPage.includes('ListeDevies')"> {{ item.projet }}</td>
                      <td v-if="PathPage.includes('Gestion_des_bons_de_livraison')"> {{ item.quantité }}</td>
                      <td v-if="PathPage.includes('Reglement')"> {{ item.Total }}</td>
                      <td v-if="PathPage.includes('Reglement')"> {{ item.quantité}}</td>
                      <!-- <td v-if="PathPage.includes('ListeCommandes')">{{ item.date }}</td> -->
                      <td v-if="PathPage.includes('Accomptes')">{{item.DateAcompte}}</td>
                      <td v-if="PathPage.includes('Accomptes')">{{item.Libellé}}</td>
                      <td v-if="PathPage.includes('Accomptes')">{{item.Document}}</td>
                      <!-- <td v-if="PathPage.includes('Gestion_des_Factures')">{{ item.DateDeFacture }}</td> -->
                      <!-- <td v-if="PathPage.includes('Liste_Des_Avoirs')">{{ item.dateAvoir}}</td> -->
                      <!-- <td v-if="!PathPage.includes('Accomptes') && !PathPage.includes('Diverses') && !PathPage.includes('Recurrentes')" ><router-link to= "/Ventes/NouveauDevis/Proforma">{{ item.Numéro }}</router-link></td> -->
                      <!-- <td  v-if="!PathPage.includes('Diverses') && !PathPage.includes('Recurrentes')">{{ item.client }}</td> -->
                      <!-- <td v-if="PathPage.includes('Gestion_des_Factures') || PathPage.includes('Liste_Des_Avoirs')">{{ item.Total }}</td>  -->
                      <td v-if="PathPage.includes('Accomptes')">{{item.Monatnt}}</td>
                      <td v-if="PathPage.includes('Accomptes')">{{item.DateEcheance}}</td>
                      <td v-if="PathPage.includes('Diverses')">{{item.dateReccette}}</td>

                      <td v-if="PathPage.includes('Recurrentes') || PathPage.includes('DepensesRecurrents')">{{item.DateDébut}}</td>
                      <td v-if="PathPage.includes('Recurrentes')|| PathPage.includes('DepensesRecurrents')">{{item.DateFin}}</td>
                      <td v-if="PathPage.includes('Diverses') || PathPage.includes('Recurrentes') || PathPage.includes('DepensesRecurrents')" >{{item.Ventiation}}</td>
                      <td v-if="PathPage.includes('Diverses')  || PathPage.includes('Recurrentes')|| PathPage.includes('DepensesRecurrents')">{{item.libelle}}</td>
                      <td v-if="PathPage.includes('Recurrentes')|| PathPage.includes('DepensesRecurrents')">{{item.Fréquence}}</td>
                      <td v-if="PathPage.includes('Recurrentes')|| PathPage.includes('DepensesRecurrents')">{{item.Prochaine_exécution}}</td>
                      <td v-if="PathPage.includes('Diverses')  || PathPage.includes('Recurrentes')">{{item.TotatlTTC}}</td>
                      <td v-if="PathPage.includes('Diverses')  || PathPage.includes('Recurrentes') || PathPage.includes('DepensesRecurrents')">{{item.Status}}</td>



                      <td  v-if="!PathPage.includes('Diverses') && !PathPage.includes('Recurrentes')">
                         <v-chip v-if="item.etat == 'Clôturer(e)'"
                          label
                          class="ma-2"
                          color="blue"
                          text-color="white"
                            
                          >
                            {{ item.etat }}
                          </v-chip>
                         <v-chip v-else
                          label
                          class="ma-2"
                          color="green"
                          text-color="white"
                            
                          >
                          {{ item.etat }}
                          </v-chip>
                      </td>  
                      <td>
                        <v-col cols="2" class="btnnnn">
                          <v-btn class="action-btn">
                              <v-icon
                                color="black"
                                size="15"
                                class="action-icon"
                              >
                                mdi-cog
                              </v-icon>
                            action
                            </v-btn>
                            <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >  
                            </button>
                            <ul class="dropdown-menu"  outlined aria-labelledby="dropdownMenuButton1">
                                <a   v-for="(Action,n) in ActionsRow" :key='n' class="dropdown-item"  @click="ActionsRows(Action.Name,item.Numéro)">
                                  <i :class="Action.Icons"></i>
                                {{Action.Name}}</a>
                            </ul>
                          </v-col>
                      </td>

                    </tr>
                  </tbody>
                </template>

            </v-simple-table>
            <p>Affichage de l'élément 1 à {{ NumberRowShow }} sur {{ListeDevis.length}} éléments</p>
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

    </v-card>
</template>


<script>
  import 'jspdf-autotable';
  import jsPdf from'jspdf';
  import DataTable from '../../../backend/data.json';
  import printJS from 'print-js';
  export default {
    props:['ElementSearched','PathPage','NouvelleRecette'],
    data() {
        
      return{
        toggleSelect: false,
        singleSelect: false,
        isOpen: false,
        selected: [],
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
        ActionsRow:[
          {
            Name:'dupliquer',
            Icons :'fas fa-copy'
          },
                  {
            Name:'Refuser',
            Icons :'fas fa-user-times'
          },
                  {
            Name:'Livrer',
            Icons :'fas fa-share'
          },
                  {
            Name:'Facturer',
            Icons :'fas fa-share'
          },
                  {
            Name:'Annuler',
            Icons :'fas fa-ban'
          },
                  {
            Name:'Aperçu',
            Icons :'fas fa-eye'
          },
                  {
            Name:'Générer un avoir',
            Icons :'fas fa-share'
          },
                  {
            Name:'Détail',
            Icons :'fas fa-external-link-alt'
          }
        ],
      heading: "Liste des bons de livraison / proforma",
      ListeDevis:[],
      NumberRowShow:10,
      CheckAll:false,
      ElementSelected : ''
      }
    },
    methods: {

  
      createPDF () {
    let pdfName = 'mes-enfants'; 
    var doc = new jsPdf();

    doc.fromHTML(document.getElementById('data-table'), 15, 15, {
      'width': 170
    });

    doc.save(pdfName + '.pdf');
        },

      printData(){
        var divToPrint = this.$ref.printTable

       var newWin = Window.open("")
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
      },
      printForm() {
    printJS({
    printable: 'table_f',
    type: 'html',
    targetStyles: ['*'],
    header: 'PrintJS - Print Form With Customized Header'
 })
},
      //// HER WE CAN UPDATE ACTIONS DROPDOWN FOR EVERY PATH PAGE
      ActionsShowedInRow(){
          if(this.PathPage.includes('ListeCommandes')){
              let Actions =[
                {
                  Name:'Refuser',
                  Icons :'fas fa-user-times'
                },
                        {
                  Name:'Livrer',
                  Icons :'fas fa-share'
                },
                        {
                  Name:'Facturer',
                  Icons :'fas fa-share'
                },
                        {
                  Name:'Annuler',
                  Icons :'fas fa-ban'
                },
                {
                    Name:'dupliquer',
                    Icons :'fas fa-copy'
                },
              ]
              this.ActionsRow = Actions
          }
          else if(this.PathPage.includes('Gestion_des_Factures')){
              let Actions =[
                {
                  Name:'Générer un avoir',
                  Icons :'fas fa-share'
                },
                        {
                  Name:'Annuler',
                  Icons :'fas fa-ban'
                },
                {
                    Name:'dupliquer',
                    Icons :'fas fa-copy'
                },
              ]
              this.ActionsRow = Actions
          }
          else if(this.PathPage.includes('Liste_Des_Avoirs')){
              let Actions =[
                {
                  Name:'Détail',
                  Icons :'fas fa-external-link-alt'
                },
                        {
                  Name:'Annuler',
                  Icons :'fas fa-ban'
                },
                {
                    Name:'dupliquer',
                    Icons :'fas fa-copy'
                },
              ]
              this.ActionsRow = Actions
          }
          if(this.PathPage.includes('ListeDevies')){
            let Actions =[
               {
                    Name:'dupliquer',
                    Icons :'fas fa-copy'
                },
            ]
            this.ActionsRow = Actions
          }
          if(this.PathPage.includes('Gestion_des_bons_de_livraison')){
            let Actions =[
               {
                    Name:'dupliquer',
                    Icons :'fas fa-copy'
                },
               {
                    Name:'apercu',
                    Icons :'fas fa-eye'
                },
            ]
            this.ActionsRow = Actions
          }
          if(this.PathPage.includes('Reglement')){
            let Actions =[
              {
                   Name:'Valider',
                   Icons :'fas fa-check'
               },
              {
                   Name:'Editer',
                   Icons :'fas fa-pencil'
               },
                    {
                  Name:'Annuler',
                  Icons :'fas fa-ban'
                },
                {
                    Name:'Supprimer',
                    Icons :'fas fa-trash-alt'
                },
            ]
            this.ActionsRow = Actions
          }  
          else if(this.PathPage.includes('Accomptes')){
              let Actions =[
                {
                  Name:'Valider',
                  Icons :'fas fa-check'
                },
                        {
                  Name:'Annuler',
                  Icons :'fas fa-ban'
                },
                {
                    Name:'Supprimer',
                    Icons :'fas fa-trash-alt'
                },
              ]
              this.ActionsRow = Actions
          }
          else if(this.PathPage.includes('Diverses')){
              let Actions =[
                {
                  Name:'Détail',
                  Icons :'fas fa-external-link-alt'
                },
                {
                  Name:'Annuler',
                  Icons :'fas fa-ban'
                },
                {
                Name:'dupliquer',
                Icons :'fas fa-copy'
                },
                {
                  Name:'Générer un avoir',
                  Icons :'fas fa-trash'
                },
            ]
            this.ActionsRow = Actions
              
          }
          else if(this.PathPage.includes('Recurrentes') || this.PathPage.includes('DepensesRecurrents')){
              let Actions =[
                {
                  Name:'Editer',
                  Icons :'fas fa-edit'
                },
               {
                  Name:'Désactiver',
                  Icons :'fas fa-toggle-on'
                },
                {
                    Name:'Supprimer',
                    Icons :'fas fa-trash-alt'
                },
              ]
              this.ActionsRow = Actions
          }
      },
      //// GET DATA TABLE
      GetDataTable(){
          if(this.PathPage.includes('ListeCommandes')){
              let NewHeaderTable = ['Date de la commande','Numéro','Client','Date de la livraison','Etat']
              this.HeaderTable = NewHeaderTable
          }
          else if(this.PathPage.includes('Gestion_des_Factures')){
              let NewHeaderTable = ['Date de la Facture','Numéro','Client','Total','Etat']
              this.HeaderTable = NewHeaderTable
          }
          else if(this.PathPage.includes('Liste_Des_Avoirs')){
              let NewHeaderTable = [`Date de l'avoir`,'Numéro','Client','Total','Etat']
              this.HeaderTable = NewHeaderTable
          }
          else if(this.PathPage.includes('ListeDevies')){
              let NewHeaderTable = [`Date de devis`,'Numéro','Client','Total', 'Devise' ,'Référence' ,'Projet','Etat']
              this.HeaderTable = NewHeaderTable
          }
          else if(this.PathPage.includes('Gestion_des_bons_de_livraison')){
              let NewHeaderTable = [`Date de livraison`,'Numéro','Client','Quantité livrée','Etat']
              this.HeaderTable = NewHeaderTable
          }
          else if(this.PathPage.includes('Reglement')){
              let NewHeaderTable = [`Date de réglement`,'Numéro','Client','Montant ', 'écart de réglement','Etat']
               this.HeaderTable = NewHeaderTable
          }
          else if(this.PathPage.includes('Accomptes')){
              let NewHeaderTable = [`Date d'acompte`,'Libellé','Document','Client','Montant',`Date d'cheance`,'Etat']
              this.HeaderTable = NewHeaderTable
          }
         else if(this.PathPage.includes('Diverses')){
              let NewHeaderTable = [`Date de la recette`,'Ventilation','Libellé','TotalTTC','Status']
              this.HeaderTable = NewHeaderTable
          }
        else if(this.PathPage.includes('Recurrentes') && this.PathPage.includes('DepensesRecurrents') || this.PathPage.includes('DepensesRecurrents') ){
              let NewHeaderTable = ['Date début','Date fin','Ventilation','Libellé','Fréquence','Prochaine exécution','TotalTTC','Status']
              this.HeaderTable = NewHeaderTable
          }
      },
      ActionsRows(Conditon,Numéro){
        console.log(Conditon,Numéro)
        if(Conditon == 'Refuser'){
                ///AXIOS TO REFUSE
          }
          if(Conditon == 'Livrer'){
                /// got to livrer
            }
              if(Conditon == 'Facturer'){
                ///  go to facturer
            }
              if(Conditon == 'Annuler'){
                ///AXIOS TO ANNULER
            }
              if(Conditon == 'Dupliquer'){
                ///AXIOS TO DUPLIQUER
            }
              if(Conditon == 'Aperçu'){
                ///AXIOS TO DUPLIQUER
            }
            if(Conditon == 'Générer un avoir'){
                ///AXIOS TO DUPLIQUER
            }
            if(Conditon == 'Détail'){
                ///AXIOS TO DUPLIQUER
            }          
      }

      
    },  
      mounted() {
        this.ListeDevis = DataTable.ListeDevis
        this.ActionsShowedInRow()
        this.GetDataTable()
    },
    watch:{
        ElementSearched : function(){
            console.log(this.ElementSearched)
        },
        NouvelleRecette: function(){
          console.log('DATA IS :',this.NouvelleRecette)
          this.ListeDevis.push(this.NouvelleRecette)
          console.log("Old data" ,this.ListeDevis)
        }
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