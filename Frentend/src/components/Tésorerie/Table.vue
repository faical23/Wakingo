<template>

    <v-card class="tableDevis" id="tableDevis">
        <v-card-title class="table-title" >
            <v-icon  class="mdi-clipboard-list-outline" color="white" >
              mdi-file-pdf-outline
            </v-icon>
            {{TableTitle}}
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
        <div class="table-btn-group" >
            Recherche :
            <input type="text">
        </div>
            <v-simple-table class="TableResultSearch" :style="PathPage.includes('Accomptes') ? 'margin:60px 0px ;' : ''" ref="printTable" id="table_f">
                    <template v-slot:default>
                  <thead>
                    <tr>

                    <th  class="text-left" v-for="(HD,n) in HeaderTable" :key="n">{{HD}}</th>
                      <th class="text-left">
                        #
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr
                    v-for="(item,n) in Trésorie.slice(0,NumberRowShow)"
                    :key="(item.name,n)"
                    >

                        <td style="color:#3c8dbc;cursor:pointer">{{item.IntituléDeCompte}}</td>
                        <td>{{item.NumeroCompte}}</td>
                        <td>{{item.TypDecompte}}</td>
                        <td>{{item.SoldeOuverture}}</td>

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
            <p style="padding:10px">Affichage de l'élément 1 à {{ NumberRowShow }} sur {{Trésorie.length}} éléments</p>
            <v-row>
                <p style="padding:20px"> <i class="fas fa-info-circle"></i> Pour consulter l’activité d'un compte, localisez-le puis sélectionnez-le en cliquant sur l'intitulé du compte</p>
            </v-row>   

    </v-card>
</template>


<script>
  import 'jspdf-autotable';
  import jsPdf from'jspdf';
  import DataTable from '../../../backend/TrésorieData.json';
  import printJS from 'print-js';
  export default {
    props:['PathPage','NewCompteAdded'],
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
      Trésorie:[],
      NumberRowShow:10,
      CheckAll:false,
      ElementSelected : '',
      TableTitle:''
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
    generatePDF() {
      const columns = [
        { title: "Date de Devis"},
         {title:"Numéro", body: "Numéro",}, 
         {title:"Client",value: 'client',}, 
         {title:"Total",value: 'Total',}, 
         {title:"projet",value: 'projet',}, 
         {title:"Référence",value: 'Référence',}, 
         {title:"Etat",value: 'etat',}, 
         {title:"#" ,value:"iron"},
      ];
      const doc = new jsPdf({
        orientation: "portrait",
        unit: "in",
        format: "letter"
      });
      // text is placed using x, y coordinates
      doc.setFontSize(16).text(this.heading, 0.5, 1.0);
      // create a line under heading 
      doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);
      // Using autoTable plugin
      doc.autoTable({
        columns: columns,
        body: this.ListeDevis,
        margin: { left: 0.5, top: 1.25 }
      });
      doc
        .save(`${this.heading}.pdf`);
       
     
    },

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
      //// HER WE CAN UPDATE ACTIONS DROPDOWN FOR EVERY PATH PAGE
      ActionsShowedInRow(){
          if(this.PathPage.includes('ComptesTresorerie')){
              let Actions =[
                {
                  Name:'Consulter',
                  Icons :'fas fa-eye'
                },
                        {
                  Name:'Edit',
                  Icons :'fas fa-edit'
                },
                        {
                  Name:'Supprimer',
                  Icons :'fas fa-trash-alt'
                }
              ]
              this.ActionsRow = Actions
          }

      },
      //// GET DATA TABLE
      GetDataTable(){
          if(this.PathPage.includes('ComptesTresorerie')){
              let NewHeaderTable = ['Intitulé du compte','Numéro de compte','Type de compte','Solde']
              this.HeaderTable = NewHeaderTable
              this.TableTitle = 'Liste des comptes'
          }
        console.log("wooork")
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
        this.Trésorie = DataTable.Trésorie
        this.ActionsShowedInRow()
        this.GetDataTable()
    },
    watch:{
        ElementSearched : function(){
            console.log(this.ElementSearched)
        },
        NewCompteAdded: function(){
          this.Trésorie.push(this.NewCompteAdded)
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