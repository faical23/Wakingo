<template>
  <div class="PopupNewClient PopupRecetteRecurrente">
    <div class="PopupNewClient__title">
      <p>{{TitlePopup}}</p>
      <svg
      @click="$emit('RemovePopupNouvelleRecette')"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="16px"
        height="16px"
        viewBox="0 0 348.333 348.334"
        style="enable-background: new 0 0 348.333 348.334"
        xml:space="preserve"
      >
        <g>
          <path
            d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
                                c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
                                c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
                                l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
                                L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
          />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
    <div class="PopupNewClient__information">
        <div class="ThreeFirstFaild">
                <div class="PopupNewClient__Right__Filed">
                    <h6>Date début*:</h6>
                    <input type="date" v-model="DateDébut">
                    <P  v-if="Submit && DateDébut == ''" class="MessageErrorFiled">champs obligatoire</P>
                </div>
                <div class="PopupNewClient__Right__Filed">
                    <h6>Date fin :</h6>
                    <input type="date" v-model="DateFin">
                </div>
                <div class="PopupNewClient__Right__Filed">
                    <h6>Fréquence * :</h6>
                    <div class="Fréquence">
                        <input type="text" placeholder="Chaque" disabled>
                        <input type="text" v-model="FréquenceNumber">
                        <select class=FréquenceType v-model="FréquenceType">
                            <option value="Mois">Mois</option>
                            <option value="Jours">Jours</option>
                            <option value="Année">Année</option>
                            <option value="Semaine">Semaine</option>

                        </select>
                    </div>
                    <P v-if="Submit && (FréquenceNumber == '' || isNaN(FréquenceNumber))"  class="MessageErrorFiled">champs obligatoire</P>

                </div>
        </div>
        <div class="PopupNewClient__Right__Filed">
            <h6>Libellé *:</h6>
            <input type="text" v-model="Libellé">
            <P v-if="Submit && Libellé == ''"  class="MessageErrorFiled">champs obligatoire</P>
        </div>
        <div class="VentilationClientProjet">
            <div class="PopupNewClient__Right__Filed">
                <h6>Ventilation *:</h6>
                <select v-model="VentilationSelect">
                    <option value="Veuillez séléctioner">Veuillez séléctioner</option>
                    <option v-for="SingleVentilation,n in VentilationData" :key="n" :value="SingleVentilation">{{SingleVentilation}}</option>
                </select>
                <P v-if="Submit && VentilationSelect == 'Veuillez séléctioner'" class="MessageErrorFiled">champs obligatoire</P>
            </div>
            <div class="PopupNewClient__Right__Filed">
                <h6>Client :</h6>
                <select class="VentilationSelect" v-model="ClientSelect">
                    <option value="Veuillez séléctioner">Veuillez séléctioner</option>
                    <option v-for="SingleClient,n in ClientData" :key="n" :value="SingleClient">{{SingleClient}}</option>
                </select>
            </div>
            <div class="PopupNewClient__Right__Filed">
                <h6>Projet :</h6>
                <select class="ProjetSelect"  v-model="ProjetSelect">
                    <option value="Veuillez séléctioner">Veuillez séléctioner</option>
                    <option v-for="SinglProjet,n in ProjetData" :key="n" :value="SinglProjet">{{SinglProjet}}</option>
                </select>
            </div>

                
        </div>
        <div class="QtéMontantTva">
                <table>
                    <tr>
                        <th class="Qté">Qté</th>
                        <th class='Price'>
                            <select class="HTorTTC" v-model="PriceType" @change="CalculteTTC()">
                                <option value="P.U.HT">P.U.HT</option>
                                <option value="P.U.TTC">P.U.TTC</option>
                            </select>
                        </th>
                        <th class="TVA">TVA</th>
                        <th class="TTC">TTC</th>
                    </tr>
                    <tr>
                        <td class="Qté">
                            <input type="text" placeholder="00" v-model="QtéNumber" @keyup='CalculteTTC()'>
                            <select  class="InputZone" v-model="QtéType" >
                                <optgroup  label="Unité">
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
                            <P v-if="Submit &&  (QtéNumber == '0'|| isNaN(QtéNumber))"  class="MessageErrorFiled">champs obligatoire</P>
                        </td>
                        <td class="Price">
                            <input type="text" placeholder="00" v-model="Price" @keyup='CalculteTTC()'>
                            <input type="text" placeholder="MADD" disabled>
                        </td>
                        <P  v-if="Submit && (Price == '0' || isNaN(Price))" class="MessageErrorFiled">champs obligatoire</P>
                        <td class="TVA">
                            <select  class="TVA InputZone" v-model="Tva" @change='CalculteTTC()'>
                                <option value="20,00%">20,00%</option>
                                <option value="14,00%">14,00%</option>
                                <option value="10,00%">10,00%</option>
                                <option value="7,00%">7,00%</option>
                                <option value="0,00%">0,00%</option>
                            </select>
                        </td>
                        <td class="TTC">
                            <input type="text" placeholder="00" v-model="TotatlTTC">
                            <input type="text" placeholder="MAD">
                        </td>
                    </tr>
                </table>
        </div>
    </div>
    <div class="PopupNewClient__btns">
      <button class="Btn__Firmer" @click="$emit('RemovePopupNouvelleRecette')">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="10px"
          height="10px"
          viewBox="0 0 348.333 348.334"
          style="enable-background: new 0 0 348.333 348.334"
          xml:space="preserve"
        >
          <g>
            <path
              d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
                c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
                c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
                l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
                L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        Fermer
      </button>
      <button class="Btn__Enregistrer" @click='EnregistrerNewClient()'>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="16px"
          height="16px"
          viewBox="0 0 32.296 32.296"
          style="enable-background: new 0 0 32.296 32.296"
          xml:space="preserve"
        >
          <g>
            <path
              style=""
              d="M31.923,9.14L13.417,27.642c-0.496,0.494-1.299,0.494-1.793,0L0.37,16.316
                c-0.494-0.496-0.494-1.302,0-1.795l2.689-2.687c0.496-0.495,1.299-0.495,1.793,0l7.678,7.729L27.438,4.654
                c0.494-0.494,1.297-0.494,1.795,0l2.689,2.691C32.421,7.84,32.421,8.646,31.923,9.14z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        Enregistrer
      </button>
    </div>
  </div>
</template>



<script>
export default {
  name: "NouvelleRecette",
  emits:['RemovePopupNouvelleRecette','GetNouvelleRecurrente'],
  props:['PageName'],
  data: () => ({
    TitlePopup:'',
    Submit:false,
    VentilationData:["111 Capital social ou personnel","148 Emprunts et Autre financement","711 Ventes de marchandises","712 Ventes de biens et services produits","73 Produits financiers","75 Produits non courants","7 Autres produits"],
    ClientData:["ABCD","ABCD","ABCD","ABCD","ABCD","ABCD","ABCD","ABCD","ABCD","ABCD"],
    ProjetData:["ABCD","ABCD","ABCD","ABCD","ABCD","ABCD","ABCD","ABCD","ABCD","ABCD"],
    VentilationSelect:'Veuillez séléctioner',
    ClientSelect:'Veuillez séléctioner',
    ProjetSelect:'Veuillez séléctioner',
    DateDébut:'',
    DateFin:'',
    FréquenceNumber:'',
    FréquenceType:'Mois',
    Libellé:'',
    QtéNumber:0,
    QtéType:'Unité(s)',
    Price:0,
    PriceType:'P.U.HT',
    Tva:'20,00%',
    TotatlTTC:''
  }),
  methods:{
      EnregistrerNewClient(){
          this.Submit = true
          if(
                this.DateDébut != '' && this.FréquenceNumber != '' && this.Libellé != ''
                && this.QtéNumber != 0 && this.Price != 0){
              let Frequence =  `Chaque ${this.FréquenceNumber} ${this.FréquenceType}`
              let NouvelleRécurrente ={
                  DateDébut:this.DateDébut,
                  DateFin:this.DateFin,
                  Fréquence:Frequence,
                  libelle:this.Libellé,
                  Ventiation:this.VentilationSelect,
                  Client:this.ClientSelect,
                  Projet:this.ProjetSelect,
                  QtéNumber:this.QtéNumber,
                  QtéType:this.QtéType,
                  PriceType:this.PriceType,
                  Price:this. Price,
                  Tva:this.Tva,
                  TotatlTTC:this.TotatlTTC,
                  Status:'Active'

                }
            this.$emit('GetNouvelleRecurrente',NouvelleRécurrente)
            /// AXIOS HER TO ADD NOUVELLE RECURRENTE TO THE BACKEND 
            /// BUT U SHOULD TO CHECK FIRST IF WE ARE IN THE DEPENCES PAGE OR RECETTES PAGE
          }
          else{
              console.log("some faild empty")
          }
      },
      CalculteTTC(){
          let TotalHT = this.Price * this.QtéNumber
          if(this.PriceType === "P.U.HT"){
                this.TotatlTTC =(TotalHT + (TotalHT * parseFloat(this.Tva)/ 100)).toFixed(2)
          }
          else if(this.PriceType === "P.U.TTC"){
                this.TotatlTTC =TotalHT

          }
      },
      GetPageName(){
        if(this.PageName == "Recettes Récurrente"){
          this.TitlePopup = "Nouvelle recette récurrente"
        }
        else if(this.PageName == "dépense Récurrente"){
          this.TitlePopup ="Nouvelle dépense récurrente"
        }
      }
  },
  mounted() {
    this.GetPageName()
  }
};
</script>
