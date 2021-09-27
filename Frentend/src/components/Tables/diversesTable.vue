<template>
    <v-card class="tableDevis" id="tableDevis">
        <v-card-title class="table-title">
            <v-icon  class="mdi-clipboard-list-outline" color="white" >
              mdi-file-pdf-outline
            </v-icon>
            Gestion des bons de livraison   
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
                       <th class="text-left">
                        <input type="checkbox" v-model="CheckAll" @click="CheckAllRows()">
                    </th>
                      <th class="text-left">
                      Date de la recette
                      </th>
                      <th class="text-left">
                        Ventilation
                      </th>
                      <th class="text-left">
                       Libellé
                      </th>
                      <th class="text-left">
                        Total TTC
                      </th>
                      <th class="text-left">
                        Statut
                      </th>
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
                      <td>{{ item.date }}</td>
                      <td>
                        <router-link to= "/Ventes/NouveauDevis/Proforma">
                        {{ item.Numéro }}
                        </router-link>
                        </td>
                      <td>{{ item.client }}</td>
                      <td>{{ item.Total }}</td>
                     <td>
                         <v-chip v-if="item.etat == 'Accepté(e)' "
                          label
                          class="ma-2"
                          color="blue"
                          text-color="white"
                            
                          >
                          {{ item.etat }} 
                          </v-chip>
                         <v-chip v-if="item.etat == 'En attente'"
                          label
                          class="ma-2"
                          color="orange"
                          text-color="black"
                            
                          >
                         {{ item.etat }}
                          </v-chip>
                         <v-chip v-if="item.etat == 'Annulé(e)'"
                          label
                          class="ma-2"
                          color="grey"
                          text-color="black"
                            
                          >
                         {{ item.etat }}
                          </v-chip>
                         <v-chip v-if="item.etat == 'En cours' "
                          label
                          class="ma-2"
                          color="green"
                          text-color="white"
                            
                          >
                         {{ item.etat }}
                          </v-chip>
                         <v-chip v-if="item.etat == 'Clôturer(e)'"
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
                            <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >  
                            </button>
                            <ul class="dropdown-menu"  outlined aria-labelledby="dropdownMenuButton1">
                                <a class="dropdown-item"  @click="ActionsRows('Dupliquer')">
                                Dupliquer</a>
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
              <div>
                  <v-select
                  class="select"
                     :items="ListeDevis.etat"
                    label="Pour la séléction"
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
  //  import axios from 'axios';
   import html2canvas from 'html2canvas';
   import jsPdf from'jspdf';
    import DataTable from '../../../backend/data.json'
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
          'Valider',
          'Annuler',
          'Cloturer',
          'Supprimer',
      ],
      duplique: [
        'duplique'
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
        body:this.ListeDevis,
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
      ActionsRows(Conditon,Numéro){
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
          console.log(Conditon,Numéro)
          
      }
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