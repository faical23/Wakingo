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
        <v-btn @click="printForm()"
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

                    <th  class="text-left" v-for="(HD,n) in HeaderTable" :key="n">{{HD}}</th>
                      <th class="text-left">
                        #
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                     <tr
                    v-for="(item,n) in TréserieCaissment.slice(0,NumberRowShow)"
                    :key="(item.name,n)"
                    >
                        <td>{{item.date}}</td>
                        <td>{{item.MoyenPaiment}}</td>
                        <td>{{item.Monatnt}}</td>
                        <td>{{item.Devise}}</td>
                        <td style="color:#3c8dbc;cursor:pointer">{{item.Compte}}</td>
                        <td>{{item.Référence}}</td>
                        <td>{{item.Numéro}}</td>
                        <td>{{item.Etat}}</td>


                    </tr>
                  </tbody>
                </template>

            </v-simple-table>
            <p style="padding:20px;">Affichage de l'élément 1 à {{ NumberRowShow }} sur {{TréserieCaissment.length}} éléments</p>
    </v-card>
</template>


<script>
  import 'jspdf-autotable';
  import jsPdf from'jspdf';
  import DataTable from '../../../backend/TrésotrieEncaissmentData.json';
  import printJS from 'print-js';
  export default {
    props:['ElementSearched','PathPage','NouvelleRecette' , 'NouvellDepenseDevis'],
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
      TréserieCaissment:[],
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
        //   if(this.PathPage.includes('ListeCommandes')){
        //       let Actions =[
        //         {
        //           Name:'Refuser',
        //           Icons :'fas fa-user-times'
        //         },
        //                 {
        //           Name:'Livrer',
        //           Icons :'fas fa-share'
        //         },
        //                 {
        //           Name:'Facturer',
        //           Icons :'fas fa-share'
        //         },
        //                 {
        //           Name:'Annuler',
        //           Icons :'fas fa-ban'
        //         },
        //         {
        //             Name:'dupliquer',
        //             Icons :'fas fa-copy'
        //         },
        //       ]
        //       this.ActionsRow = Actions
        //   }

      },
      //// GET DATA TABLE
      GetDataTable(){
          if( this.PathPage.includes('ListeEncaissements') || this.PathPage.includes('ListeDecaissements') ){
              let NewHeaderTable = ['Date','Moyen de paiment ','Montant','Devise','Compte','Référence','Numéro','Etat']
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
        this.TréserieCaissment = DataTable.Trésorie
        this.ActionsShowedInRow()
        this.GetDataTable()
    },
    watch:{
        ElementSearched : function(){
            console.log(this.ElementSearched)
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