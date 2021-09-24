<template>
  <div class="PopupNewClient Acompte">
    <div class="PopupNewClient__title">
      <p>Remboursement d'avoir</p>
      <svg
      @click="$emit('RemovePopupRembrosment')"
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
        <div class="DateAndLibillé">
            <div class="PopupNewArticle_Information__Failed">
                        <h6>Date * :</h6>
                        <input type="Date" v-model="DateCompte" />
                        <span v-if="SubmitForm && DateCompte == '' " class="MessageErrorFiled ">Ce champ est obligatoire.</span>
            </div>
            <div class="PopupNewArticle_Information__Failed">
                        <h6>Libillé * :</h6>
                        <input type="text" v-model="Libillé" />
                        <span v-if="SubmitForm && Libillé == '' " class="MessageErrorFiled ">Ce champ est obligatoire.</span>
            </div>
        </div>

        <div class="DétailsPaiement">
            <P>
                <i class="fas fa-list-alt"></i>
                Détails du paiement
            </P>
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
        <div class="Remarque">
            <P>
                <i class="fas fa-comment-dots"></i>
                Remarque
            </P>
            <textarea>Your Remarque</textarea>
        </div>
    </div>
    
    <div class="PopupNewClient__btns">
      <button class="Btn__Firmer" @click="$emit('RemovePopupRembrosment')">
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
    DateCompte:'',
    Libillé:'',
    Numero:'',
    DeviseUtilisée :'MAD-Drham Marocain',
    DateEcheance:'',
    ModePiament:'Veuillez sélectionner',
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

    ]

  }),
  methods:{
      EnregistrerNewAcompte(){
        this.SubmitForm = true
        if(
            this.DateCompte!= '' &&
            this.Libillé != '' &&
            this.TrésorerieDestination != 'Veuillez sélectionner' &&
            this.ModePiament != 'Veuillez sélectionner' &&
            this.DateEcheance != ''
        )
        {
            this.$emit('NewRembrosmentSubmited')
            // AXIOS HER
        }
      },
      GetDataFromVuex(){
          console.log("work")
        let Infomrations =this.$store.state.InformationVentes
            this.DateCompte=Infomrations.Informations_Piéce.DateFacture
            this.Libillé=`Remboursement avoir  n° ${Infomrations.Informations_Piéce.Numéro}`
            this.DeviseUtilisée =Infomrations.Informations_Financiéres.Devise_utilisée
            console.log(Infomrations)
      },
        GetTodayDate(){

            var today = new Date();
            var date = `${today.getFullYear()}-0${(today.getMonth()+1)}-${today.getDate()}`
            this.DateEcheance = date;
        },

  },
  mounted(){
      this.GetDataFromVuex()
      this.GetTodayDate();
  }
};
</script>
