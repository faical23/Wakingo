<template>
  <div class="PopupNewClient PopupNewCompte">
    <div class="PopupNewClient__title">
      <h6>Nouveau compte</h6>
      <svg
      @click="$emit('RemovePopupNewCompte')"
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
    <div class="PopupNewCompte__information">
      <div class="PopupNewClient__Right">
          <div class="IntituléNuméroType" >
                <div class="PopupFaild">
                    <h6>Intitulé du compte * :</h6>
                    <input type="text" v-model="IntituléCompte" placeholder="Intitulé du compte">
                    <span v-if="Submit && IntituléCompte == ''" class="MessageErrorFiled">Ce champ est obligatoire.</span>
                </div>
                <div class="PopupFaild">
                    <h6>Numéro de compte :</h6>
                    <input type="text"  v-model="NuméroCompte">
                </div>
                <div class="PopupFaild">
                    <h6>Type de compte * :</h6>
                    <select  v-model="TypeCompte">
                        <option value="Caisse">Caisse</option>
                        <option value="Banque">Banque</option>
                        <option value="Tiers payant">Tiers payant</option>

                    </select>
                </div>
          </div>
            <P>
                <i class="fas fa-list-alt"></i>
                Détails
            </P>
            <div class="SoldeDate">
                    <div class="PopupFaild">
                        <h6>Solde d'ouverture * :</h6>
                        <div class="InputPrice">
                            <input type="text" v-model="SoldeOuverture" placeholder="0,00">
                            <input type="text" placeholder="MAD" disabled>
                        </div>
                    </div>
                    <div class="PopupFaild">
                        <h6>Date de solde :</h6>
                        <input type="date" v-model="DateSolde">
                    </div>
            </div>
            <div class="DécouvrtDate">
                    <div class="PopupFaild">
                        <h6>Découvert autorisé :</h6>
                        <div class="InputPrice">
                            <input type="text" v-model="DécouvertAautorisé"  placeholder="0,00">
                            <input type="text" placeholder="MAD" disabled>
                        </div>
                    </div>
                    <div class="PopupFaild">
                        <h6>Date d'échéance :</h6>
                        <input type="date" v-model="DateEcheance">
                    </div>
            </div>
            <P>
                <i class="fas fa-phone-alt"></i>
                Coordonnées
            </P>
            <div class="TeleEmail">
                <div class="PopupFaild">
                    <h6>Téléphone :</h6>
                    <input type="text" placeholder="+212619887328" v-model="Téléphone">
                </div>
                <div class="PopupFaild">
                    <h6>E-mail :</h6>
                    <input type="text" placeholder="Exemple@siteweb.ma" v-model="Email">
                </div>
            </div>
            <div class="InformationPersonnele">
                <div class="PopupFaild">
                    <h6>Adresse :</h6>
                    <textarea v-model=" Adresse"></textarea>
                </div>
                <div class="PopupFaild">
                    <div class="PostaleVille">
                        <div  class="PopupFaild">
                            <h6>Code postale :</h6>
                            <input type="text" v-model="CodePostal">
                        </div>
                        <div  class="PopupFaild">
                            <h6>Ville :</h6>
                            <input type="text" v-model="Ville">
                        </div>
                    </div>
                    <div class="PopupFaild Pays">
                        <h6>Pays:</h6>
                        <input type="text" v-model="Pays">
                    </div>
                </div>
            </div>

        <span>* champs obligatoire</span>
      </div>

    </div>
    <div class="PopupNewClient__btns">
      <button class="Btn__Firmer" @click="$emit('RemovePopupNewCompte')">
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
      <button class="Btn__Enregistrer" @click='EnregistrerNewCompte()'>
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
  name: "AlertConfirmation",
  emits:['RemovePopupNewCompte'],
  data: () => ({
      Submit:false,
      IntituléCompte: '',
      NuméroCompte:'',
      TypeCompte:'Caisse',
      SoldeOuverture:'',
      DateSolde:'',
      DécouvertAautorisé:'',
      DateEcheance:'',
      Téléphone:'',
      Email:'',
      Adresse:'',
      CodePostal:'',
      Ville:'',
      Pays:''

  }),
  methods:{
      EnregistrerNewCompte(){
          this.Submit = true
          if(this.IntituléCompte != ''){
              let NewCompte ={
                        IntituléDeCompte: this.IntituléCompte,
                        NumeroCompte:this.NuméroCompte,
                        TypDecompte:this.TypeCompte,
                        SoldeOuverture:this.SoldeOuverture,
                        DateSolde:this.DateSolde,
                        DécouvertAautorisé:this.DécouvertAautorisé,
                        DateEcheance:this.DateEcheance,
                        Téléphone:this.Téléphone,
                        Email:this.Email,
                        Adresse:this.Adresse,
                        CodePostal:this.CodePostal,
                        Ville:this.Ville,
                        Pays:this.Pays
              }
              this.$emit('NewCompteSaved',NewCompte)
              /// AXIOS TO INSERT DATA HER
          }
          else{
              console.log('something error')
          }
      }
  }
};
</script>