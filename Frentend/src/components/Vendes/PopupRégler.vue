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
                            <input type="text" disabled>
                    </div>
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Libellé *</h6>
                            <input type="text">
                    </div>
                </div>
                <div class="DateMontantEscopte">
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Date*</h6>
                            <input type="date">
                    </div>
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Montant *</h6>
                            <div class="Montant">
                                <input type="text">
                                <input type="text" placeholder="MAD">
                            </div>
                    </div>
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Escompte * :</h6>
                            <div class="Escompte">
                                <input type="text">
                                <input type="text" placeholder="MAD">
                            </div>
                    </div>
                    <div class="PopupNewArticle_Information__Failed">
                            <h6>Tva/Escompte</h6>
                            <select>
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
                <span>Reste à répartir : 12,00 MAD</span>
                <div>
                <input type="radio" id="huey" name="drone" value="huey"
                        checked>
                <label for="Ne pas ventiler">Ne pas ventiler</label>
                </div>

                <div>
                <input type="radio" id="dewey" name="drone" value="dewey">
                <label for="Générer un avoir">Générer un avoir</label>
                </div>

                <div>
                <input type="radio" id="louie" name="drone" value="louie">
                <label for="Générer un avoir">Générer un avoir</label>
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
                            <select  v-model="ModePiament">
                                <option v-for="(Mode,n) in ModePaimentOption"  :key="n" :value="Mode.Mode">{{Mode.Mode}}</option>
                            </select>
                            <span v-if="SubmitForm && ModePiament== 'Veuillez sélectionner' " class="MessageErrorFiled ArticleErrorPoupFaild">Ce champ est obligatoire.</span>

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
                    <h2>Factures : 345,60 MAD</h2>
                    <h2>Avoirs : 0,00 MAD</h2>
                    <h2>Montant à règler : MAD</h2>
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
                    <tr>
                        <td  class="CheckboxTable"><input type="Checkbox" ></td>
                        <td>Faical Bahsus</td>
                        <td>10/09/2019</td>
                        <td>56.88</td>
                        <td>Facture</td>
                        <td>FAC-JDGET6353</td>
                        <td>300,90</td>
                        <td>MAD</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="Remarque">
            <P>
                <i class="fas fa-comment-dots"></i>
                Remarque
            </P>
            <textarea>Your Remarque</textarea>
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
    SubmitForm:true,
    NuméroFac : 'FAC-12345'
  }),
  methods:{
      EnregistrerNewAcompte(){
        this.SubmitForm = true
        // if(

        // )
        // {
        //     this.$emit('NewAcompteSubmited')
        // ////AXIOS NEW ACOMPTE HER
        // }
      }
    },
      GetDataFromVuex(){
          console.log("work")
    //     let Infomrations =this.$store.state.InformationVentes
    //     let Articles =this.$store.state.InformationsArticles 
    //         this.DateCompte=Infomrations.Informations_Piéce.Date_Devis
    //         this.Libillé=`Acompte sur devis n° ${Infomrations.Informations_Piéce.Numéro}`
    //         this.Solde=Articles.TotalGlobal.TotalTTC
    //         this.MontantRégler=this.Solde * this.Quotité /100
    //         this.ResteRégler= this.Solde-this.MontantRégler
    //         this.DeviseUtilisée =Infomrations.Informations_Financiéres.Devise_utilisée
    //         this.DateEcheance = Infomrations.Informations_Financiéres.DateEcheance
    //   },

  },
  mounted(){
      this.GetDataFromVuex()
  }
};
</script>
