<template>

    <v-card class="tableDevis" id="tableDevis">
        <v-card-title class="table-title">
            <v-icon  class="mdi-clipboard-list-outline" color="white" >
              mdi-file-pdf-outline
            </v-icon>
            Liste des bons de livraison / proforma    
        </v-card-title>
        <div class="table-btn-group">
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
         <!-- <h1>{{ ListeDevis.id }}</h1> -->
        <v-card-content class="data-table-content">
                <v-data-table
                id="data-table"
                ref="printTable"
                v-model="selected"
                :headers="headers"
                :items="ListeDevis"
                :single-select="singleSelect"
                stripe
                show-select
                class="data-table elevation-1"
            >
           
              <!-- <template slot="items.iron" slot-scope="props"> -->
                <!-- <v-col cols="2" class="btnnnn">
               <v-btn class="action-btn">
                  <v-icon
                    color="black"
                    size="15"
                    class="action-icon"
                  >
                    mdi-cog
                  </v-icon>
                {{ props.item.iron}} 
              </v-btn>
                 <v-select
                  :items="duplique"
                   class="duplique-btn">
                  </v-select> 
              </v-col>
             </template>
              <template v-slot:[`items.etat`]="{ ListeDeviss }">
              <v-chip
                label
                class="ma-2"
                color="red"
                text-color="white"
                 
              >
              {{ ListeDeviss.etat }} 
              </v-chip>
             
             </template>
              -->
            <!-- <template v-slot:[`item.calories`]="{ item }">
               <router-link
                    to= "/Ventes/NouveauDevis/Proforma"
                    > 
                    {{ item.calories }}    
               </router-link>
               </template> -->
             </v-data-table>
            </v-card-content>
            <v-row>
            <v-col cols="2">
              <div>
                  <v-select
                  class="select"
                    :items="items"
                    label="Pour la séléction"
                  ></v-select>
                  </div>
                </v-col>
            <v-col cols="2">
                <v-btn
                color="primary"
                class="btnn"
                >Envoyer</v-btn>
            </v-col> 
            </v-row>   
        </v-card>
</template>


<script>
  import 'jspdf-autotable';
  //  import axios from 'axios';
   import html2canvas from 'html2canvas';
   import jsPdf from'jspdf';
   import DataTable from '../../backend/data.json'
  export default {
    props: {
   
   },
    data() {
        
      return{
        toggleSelect: false,
        singleSelect: false,
        isOpen: false,
        selected: [],
         items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
      ],
      duplique: [
        'duplique'
      ],
    heading: "Liste des bons de livraison / proforma",
           
        headers: [
         {text: 'Date de Devis',value: 'date',},
         {text: 'Numéro',value: 'Numéro',}, 
         {text: 'Client',value: 'client',}, 
         {text: 'Total',value: 'Total',}, 
         {text: 'projet',value: 'projet',}, 
         {text: 'Référence',value: 'Référence',}, 
         {text: 'Etat',value: 'etat',}, 
         {text: '#', value:"iron"}, 
       
        ],
         ListeDevis:[],
         iron:{iron:"action"},

        // action:{value:"action"},
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
        body: this.ListeDevis,
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
    },  
      mounted() {
        this.ListeDevis = DataTable.ListeDevis
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