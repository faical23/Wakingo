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
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text">
                       	Date du devis
                      </th>
                      <th class="text">
                        Numéro
                      </th>
                      <th class="text-left">
                       Client
                      </th>
                      <th class="text-left">
                        Total	Devise
                      </th>
                      <th class="text-left">
                        Référence
                      </th>
                      <th class="text-left">
                        Projet
                      </th>
                      <th class="text-left">
                        Etat
                      </th>
                      <th class="text-left">
                        #
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in ListeDevis"
                      :key="item.date"
                    >
                      <td>{{ item.date }}</td>
                      <td>
                        <router-link to= "/Ventes/NouveauDevis/Proforma">
                        {{ item.Numéro }}
                        </router-link>
                        </td>
                      <td>{{ item.client }}</td>
                      <td>{{ item.Total }}</td>
                      <td>{{ item.Référence }}</td>
                      <td>{{ item.projet }}</td>
                      <td>
                         <v-chip
                            label
                            class="ma-2"
                            color="blue"
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
                          <v-btn 
                            @click="toggleSelect = !toggleSelect"
                              
                            >
                              <v-icon size="15">mdi-arrow-down-drop-circle</v-icon>
                            </v-btn>
                            <v-select
                              v-if="toggleSelect"
                              :menu-props="{value: toggleSelect}"
                              items="Duplique"
                            >
                              Duplique
                            </v-select>
                          </v-col>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
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
   import axios from 'axios';
   import html2canvas from 'html2canvas';
   import jsPdf from'jspdf';
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
        ListeDevis:[],


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
          axios.get('http://localhost:8888/ListeDevis').then((response) => {
            this.ListeDevis = response.data
            // console.log(this.ListeDevis)
            
            
        })
             
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