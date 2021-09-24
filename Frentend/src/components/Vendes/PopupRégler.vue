<template>
  <div class="PopupNewClient Régler">
    <div class="PopupNewClient__title">
      <p>Règlement client / Facture n° {{NuméroFac}}</p>
      <svg
      @click="$emit('RemovePopupRegler')"
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
        <p>
            <i class="far fa-credit-card"></i>
             Informations règlement
        </p>
        <div class="InformationsRèglement">
            <div class="SelcetANdInputs">
                <div class="ClientAndLibillé">
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Client * :</h6>
                            <input type="text"  v-model="ClinetName" disabled>
                    </div>
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Libellé *</h6>
                            <input type="text" v-model="Libellé">
                    </div>
                </div>
                <div class="DateMontantEscopte">
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Date*</h6>
                            <input type="date" v-model="DateRéglement">
                    </div>
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Montant *</h6>
                            <div class="Montant">
                                <input type="text" v-model="Montant"  @keyup="RestePartirgenerate(),CheckBoxTableClicked('AnotherCheckBoxAndInout')">
                                <input type="text" placeholder="MAD" disabled>
                            </div>
                            <span v-if="SubmitForm && (Montant == '' || Montant == 0)" style="color:red">Ce champ est obligatoire.</span>

                    </div>
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Escompte * :</h6>
                            <div class="Escompte">
                                <input type="text" v-model="Escompte" @keyup="RestePartirgenerate(),CheckBoxTableClicked('AnotherCheckBoxAndInout')">
                                <input type="text" placeholder="MAD" disabled>
                            </div>
                    </div>
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Tva/Escompte</h6>
                            <select v-model="Tva" @change="RestePartirgenerate(),CheckBoxTableClicked('AnotherCheckBoxAndInout')">
                                <option value="20,00%">20,00%</option>
                                <option value="14,00%">14,00%</option>
                                <option value="07,00%">07,00%</option>
                                <option value="10,00%">10,00%</option>
                                <option value="0,00%">0,00%</option>
                            </select>
                    </div>
                </div>
            </div>
            <div class="CheckboxRadio">
                <span :style="TableClient[0].Clicked ? 'color: red !important' : 'color: #00a65a !important'">{{ResteApartire}}</span>
                <div>
                <input type="radio" id="huey" name="drone" value="huey" :checked="PasVentiler == true" :disabled="DisabledPasVentir == true" @click="PasVentiler = true,GénérerAvoir=false , PertesProfits=false,CheckBoxTableClicked('AnotherCheckBoxAndInout')">
                <label for="Ne pas ventiler">Ne pas ventiler</label>
                </div>

                <div>
                <input type="radio" id="dewey" name="drone" value="dewey" :checked="GénérerAvoir == true"  :disabled="DisabledGénérerAvoir == true"  @click="PasVentiler = false,GénérerAvoir=true , PertesProfits=false,CheckBoxTableClicked('AnotherCheckBoxAndInout')">
                <label for="Générer un avoir">Générer un avoir</label>
                </div>

                <div>
                <input type="radio" id="louie" name="drone" value="louie" :checked="PertesProfits== true"  @click="PasVentiler = false,GénérerAvoir=false , PertesProfits=true,CheckBoxTableClicked('AnotherCheckBoxAndInout')">
                <label for="Générer un avoir">Pertes et profits</label>
                </div>
            </div>
        </div>
         <P>
                <i class="fas fa-list-alt"></i>
                Détails du paiement
            </P>
        <div class="DétailsPaiement">
            <div class="DateModeTrésorie">
                <div class="PopupNewArticle_Information__Failed">
                            <h6>Date d'échéance *:</h6>
                            <input type="Date"  v-model="DateEcheance" />
                            <span v-if="SubmitForm && DateEcheance == '' " class="MessageErrorFiled ArticleErrorPoupFaild">Ce champ est obligatoire.</span>
                </div>
                <div class="PopupNewArticle_Information__Failed">
                            <h6>Mode de paiement * :</h6>
                            <select  v-model="ModePaiment">
                                <option v-for="(Mode,n) in ModePaimentOption"  :key="n" :value="Mode.Mode">{{Mode.Mode}}</option>
                            </select>
                            <span v-if="SubmitForm && ModePaiment== 'Veuillez sélectionner'" class="MessageErrorFiled ArticleErrorPoupFaild">Ce champ est obligatoire.</span>

                </div>
                <div class="PopupNewArticle_Information__Failed">
                            <h6>Trésorerie de destination * :</h6>
                            <select v-model="TrésorerieDestination">
                                <option v-for="(Trésorerie,n) in TrésorerieDestinationOptions" :key="n" :value="Trésorerie.Mode">{{Trésorerie.Mode}}</option>
                            </select>
                            <span v-if="SubmitForm && TrésorerieDestination== 'Veuillez sélectionner' " class="MessageErrorFiled ArticleErrorPoupFaild">Ce champ est obligatoire.</span>
                </div>
            </div>
            <div class="NuméroAndDEvis">
                <div class="PopupNewArticle_Information__Failed">
                            <h6>Numéro:</h6>
                            <input type="text" v-model="Numero"  />

                </div>
                <div class="PopupNewArticle_Information__Failed">
                            <h6>Devise utilisée *</h6>
                            <select class="DeviseUtilisée" v-model="DeviseUtilisée" disabled>
                                        <option value="MAD-Drham Marocain">MAD-Drham Marocain</option>
                                        <option value="EUR-Euro">EUR-Euro</option>
                                        <option value="USD-Dollar américan">USD-Dollar américan</option>
                            </select>
                </div>
            </div>
        </div>
        <p>
            <i class="fas fa-table"></i>
             Echéances factures et Avoir validés non réglés
        </p>
        <div class="EchéancesFactures">
            <div class="FactureAvoirMontant">
                    <h2>Factures : {{Factures}}</h2>
                    <h2>Avoirs :{{Avoirs}} </h2>
                    <h2>Montant à règler : {{MontantRégler}}</h2>
            </div>
            <div class="Table">
                <table>
                    <tr>
                        <th class="CheckboxTable"></th>
                        <th>Client</th>
                        <th>Echéance</th>
                        <th>Montant affecté</th>
                        <th>Type piéce</th>
                        <th>Numéro piéce</th>
                        <th>Solde du</th>
                        <th>Devise</th>
                    </tr>
                    <tr v-for="(Client,n) in TableClient" :key="n">
                        <td  class="CheckboxTable"><input type="Checkbox" @click='ClickFromCheckBoxTable=true;CheckBoxTableClicked("FromTable")' ></td>
                        <td>{{Client.Name}}</td>
                        <td>{{Client.Echéance}}</td>
                        <td><input type="text" v-model="Client.MontantAffecté"></td>
                        <td>{{Client.TypePiéce}}</td>
                        <td>{{Client.NuméroPiéce}}</td>
                        <td>{{Client.SoldDu}}</td>
                        <td>{{Client.Devise}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="Remarque">
            <P>
                <i class="fas fa-comment-dots"></i>
                Remarque
            </P>
            <textarea v-model="Remarque">Your Remarque</textarea>
        </div>
    </div>
    
    <div class="PopupNewClient__btns">
      <button class="Btn__Firmer" @click="$emit('RemovePopupRegler')">
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
        Firmer
      </button>
      <button class="Btn__Enregistrer" @click='EnregistrerNewAcompte()'>
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
  name: "Acompte",
  emits:['RemovePopupAddClient'],
  data: () => ({
    SubmitForm:false,
    NuméroFac : 'FAC-12345',
    ClinetName:'',
    Libellé:'',
    DateRéglement:'',
    Montant:0,
    Escompte:0,
    Tva:"20,00%",
    ResteApartire:'Reste à répartir : 0,00 MAD',
    PasVentiler:true,
    DisabledPasVentir:false,
    GénérerAvoir:false,
    DisabledGénérerAvoir:false,
    PertesProfits:false,
    DateEcheance:'',
    Numero:'',
    DeviseUtilisée:'MAD-Drham Marocain',
    Factures:'0,00 MAD',
    Avoirs:'0,00 MAD',
    MontantRégler:'',
    TableClient:[
      {
        Clicked: false,
        Name:'',
        Echéance:'',
        MontantAffecté:'0,00',
        TypePiéce:'Type',
        NuméroPiéce:'',
        SoldDu:'',
        Devise:''
      }
    ],
    Remarque:'',
    ModePaiment:'Veuillez sélectionner',
      ModePaimentOption:[ 
        {
            Mode:'Veuillez sélectionner'
        },
                {
            Mode:'Virement'
        },
                {
            Mode:'Chèque'
        },
                {
            Mode:'Traite'
        },
                {
            Mode:'Espèces'
        },
                {
            Mode:'Affacturage'
        },
                        {
            Mode:'Autres'
        },

    ],
    TrésorerieDestination:'Veuillez sélectionner',
    TrésorerieDestinationOptions:[
            {
                Mode:'Veuillez sélectionner'
            },
            {
                Mode:'Banque'
            },
            {
                Mode:'Caisee'
            },
            {
                Mode:'Caisee Kbup'
            },
            {
                Mode:'Affacturage'
            },
            {
                Mode:'Compte courant dassociés'
            },

    ],
    ClickFromCheckBoxTable:false,
  }),
  methods:{
      EnregistrerNewAcompte(){
        this.SubmitForm = true
        if(
            this.Montant != 0 && this.Montant != '' &&
            this.DateRéglement!= '' &&
            this.Libellé != '' &&
            this.TrésorerieDestination != 'Veuillez sélectionner' &&
            this.ModePaiment != 'Veuillez sélectionner' &&
            this.DateEcheance != ''
        )
        {
            console.log("Aright")
            this.$emit('NewPopupregler')
        ////AXIOS NEW ACOMPTE HER
        }
      },
      GetDataFromVuex(){
          console.log("work")
        let Infomrations =this.$store.state.InformationVentes
        let Articles =this.$store.state.InformationsArticles 
        console.log(Infomrations)
        console.log(Articles)
        this.ClinetName = Infomrations.Informations_Piéce.Client_Name
        this.NuméroFac  = Infomrations.Informations_Piéce.Numéro
        this.Libellé = `réglement facture n° ${this.NuméroFac}`
        this.DateRéglement = Infomrations.Informations_Piéce.DateFacture
        this.DateEcheance = Infomrations.Informations_Piéce.DateFacture
        this.DeviseUtilisée =Infomrations.Informations_Financiéres.Devise_utilisée
        this.TableClient[0].Name = Infomrations.Informations_Piéce.Client_Name
        this.TableClient[0].Echéance = this.DateEcheance 
        this.TableClient[0].NuméroPiéce = Infomrations.Informations_Piéce.Numéro
        this.TableClient[0].SoldDu = Articles?.TotalGlobal?.TotalTTC
        this.TableClient[0].Devise = this.DeviseUtilisée.slice(0,3)
        this.MontantRégler =this.DeviseUtilisée.slice(0,3)
    },
    RestePartirgenerate(){
    if(this.TableClient[0].Clicked != true ){
      let EscopteTva = parseFloat(this.Escompte) *(parseFloat(this.Tva) /100)
      let reste = parseFloat(this.Montant) + parseFloat(this.Escompte) + EscopteTva
      this.ResteApartire = `Reste à répartir :${reste} MAD`
    }
  },
  CheckBoxTableClicked(From){
    if(From === "FromTable"){
          if(this.TableClient[0].Clicked == false && this.ClickFromCheckBoxTable ){
          let Articles =this.$store.state.InformationsArticles 
          this.Factures= Articles?.TotalGlobal?.TotalTTC;
          this.DisabledGénérerAvoir = true
          if(this.PertesProfits == true){
              this.TableClient[0].MontantAffecté = Articles.TotalGlobal.TotalTTC ;
          }
          else if(this.PasVentiler == true){
            let EscopteTva = parseFloat(this.Escompte) *(parseFloat(this.Tva) /100)
            let reste = parseFloat(this.Montant) + parseFloat(this.Escompte) + EscopteTva
            this.TableClient[0].MontantAffecté = reste ;
          }
          this.TableClient[0].Clicked = true ;
            let EscopteTva = parseFloat(this.Escompte) *(parseFloat(this.Tva) /100)
            let NewResteApartire = parseFloat(this.Montant) + parseFloat(this.Escompte) + EscopteTva
          this.ResteApartire = `Reste à répartir : -${(this.Factures - NewResteApartire).toFixed(2)} MAD`
        }
        else{
          this.DisabledGénérerAvoir = false
          this.TableClient[0].MontantAffecté= '0,00'
          this.Factures= '0,00 MAD'
          this.TableClient[0].Clicked = false
          this.RestePartirgenerate()

        }
    }
    else if(this.TableClient[0].Clicked == true && From === "AnotherCheckBoxAndInout" && this.ClickFromCheckBoxTable){
          let Articles =this.$store.state.InformationsArticles 
          this.Factures= Articles?.TotalGlobal?.TotalTTC;
          this.DisabledGénérerAvoir = true
          if(this.PertesProfits == true){
              this.TableClient[0].MontantAffecté = Articles?.TotalGlobal?.TotalTTC ;
          }
          else if(this.PasVentiler == true){
            let EscopteTva = parseFloat(this.Escompte) *(parseFloat(this.Tva) /100)
            let reste = parseFloat(this.Montant) + parseFloat(this.Escompte) + EscopteTva
            this.TableClient[0].MontantAffecté = reste ;
          }
          let EscopteTva = parseFloat(this.Escompte) *(parseFloat(this.Tva) /100)
          let NewResteApartire = parseFloat(this.Montant) + parseFloat(this.Escompte) + EscopteTva
          this.ResteApartire = `Reste à répartir : -${(this.Factures - NewResteApartire).toFixed(2)} MAD`
          this.TableClient[0].Clicked = true ;
    }


  }
  },

  mounted(){
      this.GetDataFromVuex()
  }
};
</script>
