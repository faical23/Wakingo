<template>

    <v-card class="tableDevis" id="tableDevis">
        <v-card-title class="table-title" >
            <v-icon  class="mdi-clipboard-list-outline" color="white" >
              mdi-file-pdf-outline
            </v-icon>
            Liste des clients 
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
                    v-for="(item,n) in ListeClient.slice(0,NumberRowShow)"
                    :key="(item.name,n)"
                    >
                    <td><input type="checkbox" :checked="item.Select" @click="CheckedThisRow(n)"></td> 
                    <!-- CLIENTS -->
                    <td v-if="PathPage.includes('Liste_Clients')">{{ item.Numero }}</td>
                    <td v-if="PathPage.includes('Liste_Clients')">{{ item.Nom }}</td>
                    <td v-if="PathPage.includes('Liste_Clients')">{{ item.Famille }}</td>
                    <td v-if="PathPage.includes('Liste_Clients')">{{ item.Telephone }}</td>
                    <td v-if="PathPage.includes('Liste_Clients')">{{ item.Portable }}</td>
                    <td v-if="PathPage.includes('Liste_Clients')">{{ item.Email }}</td>
                    <!-- Fournisseurs -->
                    <td v-if="PathPage.includes('Liste_fournisseurs')">{{ item.Numero }}</td>
                    <td v-if="PathPage.includes('Liste_fournisseurs')">{{ item.Nom }}</td>
                    <td v-if="PathPage.includes('Liste_fournisseurs')">{{ item.Famille }}</td>
                    <td v-if="PathPage.includes('Liste_fournisseurs')">{{ item.Telephone }}</td>
                    <td v-if="PathPage.includes('Liste_fournisseurs')">{{ item.Portable }}</td>
                    <td v-if="PathPage.includes('Liste_fournisseurs')">{{ item.Email }}</td>
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
            <!-- <p>Affichage de l'élément 1 à {{ NumberRowShow }} sur {{ListeClient.length}} éléments</p> -->
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
  import DataTable from '../../../backend/client.json';
  import printJS from 'print-js';
  export default {
    props:['ElementSearched','PathPage','NouveauClient', 'NouveauFournisseur'],
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
      ListeClient:[],
      heading: "Liste des Clients",
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
    printable: 'table_client',
    type: 'html',
    targetStyles: ['*'],
    header: 'PrintJS - Print Form With Customized Header'
 })
},
    generatePDF() {
      const columns = [
        
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
          if(this.PathPage.includes('Liste_Clients')){
              let Actions =[
               
                 {
                  Name:'Consulter',
                  Icons :'fas fa-eye'
                },
                        {
                  Name:'Editer',
                  Icons :'fas fa-pen-square'
                },
                        {
                  Name:'Supprimer',
                  Icons :'fas fa-trash'
                },
              ]
              this.ActionsRow = Actions
          }
      },

      GetDataTable(){
          if(this.PathPage.includes('Liste_Clients')){
              let NewHeaderTable = ['Numéro','Nom','Famille','Telephone','Portable','E-mail']
              this.HeaderTable = NewHeaderTable
          }       
          else if(this.PathPage.includes('Liste_fournisseurs')){
              let NewHeaderTable = ['Numéro','Nom','Famille','Telephone','Portable','E-mail']
              this.HeaderTable = NewHeaderTable
          }       
      }

      
    },  
      mounted() {
        this.ListeClient = DataTable.Client
        this.ActionsShowedInRow()
        this.GetDataTable()
    },
    watch:{
        ElementSearched : function(){
            console.log(this.ElementSearched)
        },
        NouveauClient: function(){
          console.log('DATA IS :',this.NouveauClient)
          this.ListeClient.push(this.NouveauClient)
          console.log("Old data" ,this.ListeClient)
        },
        NouveauFournisseur: function(){
          console.log('DATA IS :',this.NouveauFournisseur)
          this.ListeClient.push(this.NouveauFournisseur)
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