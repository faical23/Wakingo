<template>
  <div class="PopupNewClient">
    <div class="PopupNewClient__title">
      <p>Nouveau client rapide</p>
      <svg
      @click="$emit('RemovePopupAddClient')"
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
      <div class="PopupNewClient__Right">
        <div class="PopupNewClient__Right__Filed">
          <h6>Type de client :</h6>
          <div class="Checkbox">
            <div class="Checkbox__single">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="Particulier"
                @click="Particulier = true , entreprise = false"
              />
              <label for="">Particulier</label>
            </div>
            <div class="Checkbox__single">
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="Entreprise"
                checked="checked" 
                 @click="Particulier = false , entreprise = true"
              />
              <label for="">Entreprise</label>
            </div>
          </div>
        </div>
        <div class="PopupNewClient__Right__Filed">
          <h6>Code du client * :</h6>
          <input type="text" v-model="CodeDlient" />
        </div>
        <!-- if is particulier-->
        <div v-if="Particulier" class="PopupNewClient__Right__Filed">
          <h6>Civilité :</h6>
          <select v-model="Civilité">
            <option value="Veuilley sélectionner">Veuilley sélectionner</option>
            <option value="Monsieur">Monsieur</option>
            <option value="Mademoiselle">Mademoiselle</option>
            <option value="Madame">Madame</option>
            <option value="Maître">Maître</option>
            <option value="Docteur">Docteur</option>
            <option value="Professeur">Professeure</option>
          </select>
        </div>
        <div  v-if="Particulier"  class="PopupNewClient__Right__Filed">
          <h6>Prénom :</h6>
          <input type="text" v-model="Prénom" />
        </div>
        <div  v-if="Particulier" class="PopupNewClient__Right__Filed">
          <h6>Nom * :</h6>
          <input type="text" v-model="Nom"/>
        </div>
        <!-- if is entreprise-->
        <div v-if="entreprise"  class="PopupNewClient__Right__Filed">
          <h6>Nom de l'entreprise * :</h6>
          <input type="text" placeholder="Société" v-model=" NomeEntreprise"/>
        </div>
        <div  v-if="entreprise" class="PopupNewClient__Right__Filed">
          <h6>Forme juridique :</h6>
          <select v-model="FormeJuridique">
            <option value="Veuilley sélectionner">Veuilley sélectionner</option>
            <option value="EI - Entreprise individuell">
              EI - Entreprise individuelle
            </option>
            <option
              value="SARL AU - Société à responsabilité limitée à associé unique"
            >
              SARL AU - Société à responsabilité limitée à associé unique
            </option>
            <option value="SARL - Société à responsabilité limitée">
              SARL - Société à responsabilité limitée
            </option>
            <option value="SA - Société anonyme">SA - Société anonyme</option>
            <option value="SNC - Société en nom collectif">
              SNC - Société en nom collectif
            </option>
            <option value="COOP - Coopérativ">COOP - Coopérative</option>
            <option value="ASSO - Association">ASSO - Association</option>
          </select>
        </div>

        <div v-if="entreprise" class="PopupNewClient__Right__Filed">
          <h6>ICE *</h6>
          <input type="text" v-model="ICE"/>
        </div>
        <div class="PopupNewClient__Right__Filed">
          <h6>Famille de client :</h6>
          <select v-model="FamilleClient">
            <option value="Veuilley sélectionner">Veuilley sélectionner</option>
            <option value="Revendeur">Revendeur</option>
            <option value="Client divers">Client divers</option>
          </select>
        </div>
        <span>* champs obligatoire</span>
      </div>
      <div class="PopupNewClient__left">
        <div class="PopupNewClient__Right__Filed">
          <h6>Téléphone :</h6>
          <input type="text" placeholder="+212 (0) 512 34 56 78" v-model="Téléphone" />
        </div>
        <div class="PopupNewClient__Right__Filed">
          <h6>E-mail:</h6>
          <input type="text" placeholder="email@gmail.com"  v-model="Email"/>
        </div>
        <div class="PopupNewClient__Right__Filed">
          <h6>Adresse:</h6>
          <input type="text" v-model="Adresse" />
        </div>
        <div class="PopupNewClient__Right__Filed CodePostalAndVille">
          <div class="CodePostal">
            <h6>Code Postal:</h6>
            <input type="text" v-model="CodePostale"/>
          </div>
          <div class="Ville">
            <h6>Ville:</h6>
            <input type="text" v-model="Ville" />
          </div>
        </div>
        <div class="PopupNewClient__Right__Filed">
          <h6>Pays:</h6>
          <input type="text" v-model="Pays" />
        </div>
      </div>
    </div>
    <div class="PopupNewClient__btns">
      <button class="Btn__Firmer" @click="$emit('RemovePopupAddClient')">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="10px"
          height="10x"
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
  name: "AlertConfirmation",
  emits:['RemovePopupAddClient'],
  data: () => ({
    Particulier: false,
    entreprise: true,

    TypeClient:'',
    CodeDlient:'CLT-59',
    NomeEntreprise:'',
    FormeJuridique:'Veuilley sélectionner',
    ICE :'',
    FamilleClient:'Veuilley sélectionner',
    Téléphone:'',
    Email :'',
    Adresse:'',
    CodePostale:'',
    Ville:'',
    Pays:'',
    Civilité:'Veuilley sélectionner',
    Prénom:'',
    Nom:''

  }),
  methods:{
      EnregistrerNewClient(){
          console.log('ds')
      }
  }
};
</script>
