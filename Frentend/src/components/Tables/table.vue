<template>
    <v-card class="TableResultTresorerie" id="tableDevis">
        <v-card-title class="table-title">
            <v-icon  class="mdi-clipboard-list-outline" color="white" >
              mdi-file-pdf-outline
            </v-icon>
            Liste des bons de livraison / proforma    
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
        <div class="table-btn-group-tresorerie">
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
        
        <v-btn @click="generatePDF()" :data="ListeDevis">
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
          <div class="searchBar">
            <label for="recherche">Recherche:</label>
            <input type="text">
          </div>
              <v-simple-table class="">
                <template v-slot:default>
                  <thead>
                    <tr>
                       <th class="text-left">
                        <input type="checkbox" v-model="CheckAll" @click="CheckAllRows()">
                    </th>
                    <th  class="text-left" v-for="(HD,n) in HeaderTable" :key="n">{{HD}}</th>
                    </tr>
                  </thead>
                   <tbody>
                     <tr
                    v-for="(item,n) in ListeDevis.slice(0,NumberRowShow)"
                    :key="(item.name,n)"
                    >
                    <!-- <td colspan="7" valign="top" v-if="HeaderTable = ['']">test</td> -->
                    <!-- <td><input type="checkbox" :checked="item.Select" @click="CheckedThisRow(n)"></td>  -->
                    
                   <!-- <td v-if="PathPage.includes('Tresorerie_previsionnelle')">{{ item.solde_initial }}</td>
                   <td v-if="PathPage.includes('Tresorerie_previsionnelle')">{{ item.date }}</td>
                   <td v-if="PathPage.includes('Tresorerie_previsionnelle')">{{ item.Etat }}</td>
                   <td v-if="PathPage.includes('Tresorerie_previsionnelle')">{{ item.Référence }}</td>
                   <td v-if="PathPage.includes('Tresorerie_previsionnelle')">{{ item.Entre_dargent }}</td>
                   <td v-if="PathPage.includes('EcartReglement')">{{ item.solde_initial }}</td>
                   <td v-if="PathPage.includes('Tresorerie_previsionnelle')">{{ item.quantité }}</td>
                   <td v-if="PathPage.includes('Tresorerie_previsionnelle')">{{ item.quantité }}</td> -->
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <p>Affichage de l'élément 1 à {{ NumberRowShow }} sur {{ListeDevis.length}} éléments</p>
        </v-card>
</template>


<script>
  import 'jspdf-autotable';
  //  import axios from 'axios';
   import html2canvas from 'html2canvas';
   import jsPdf from'jspdf';
    import DataTable from '../../../backend/data.json'
  export default {
    props:['ElementSearched','PathPage'],
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
        body:this.listeDevis(),
        
        margin: { left: 0.5, top: 1.25 }
      });
      doc
        .save(`${this.heading}.pdf`);
     
    },

      makePDF(){
        window.html2canvas = html2canvas;
        var doc = new jsPdf();
        doc.html(document.querySelector(".data-table"), {
          callback : function(pdf){
            pdf.save("mypdf.pdf");
            doc.setFontSize(12)
          }
        })
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
     GetDataTable(){
       if(this.PathPage.includes('Tresorerie_previsionnelle')){
         let NewHeader = ['Solde initial', 'Date', 'Type','Référence','Entrées d argent','Sorties d argent','Solde final']
          this.HeaderTable = NewHeader
       }
     }
    },  
      mounted() {
        this.ListeDevis = DataTable.ListeDevis
        console.log(DataTable.ListeDevis)
        this.GetDataTable()
        this.ActionsShowedInRow()
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