<template>
  <div class="PopupNewClient PopupNewArticle">
    <div class="PopupNewClient__title">
      <p>Nouveau Article rapide</p>
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
    <div class="PopupNewArticle_Information">
            <div class="PopupNewArticle_Information__zone">
                <div class="PopupNewArticle_Information__Failed">
                    <h6>Code de l'article * :</h6>
                    <input type="text" />
                </div>
                 <div class="PopupNewArticle_Information__Failed Libellé ">
                    <h6>Libellé de l'article * :</h6>
                    <input type="text" />
                </div>
            </div>
            <div class="CheckboxZone">
                <input type="checkbox">
                <h6>Activer la gestion des stocks</h6>
            </div>
            <div class="PopupNewArticle_Information__zone PriceArticle">
                <div class="PopupNewArticle_Information__Failed">
                    <h6>Prix d’achat :</h6>
                    <div class="InputPrix">
                        <input type="text" placeholder="0,00"  />
                        <input type="text" placeholder="MAD" disabled />
                        <select value="HT">
                            <option value="HT">HT</option>
                             <option value="TTC">TTC</option>
                        </select>
                    </div>
                </div>
                <div class="PopupNewArticle_Information__Failed">
                    <h6>Prix de vente public :</h6>
                    <div class="InputPrix">
                        <input type="text"  placeholder="0,00" />
                        <input type="text" placeholder="MAD" disabled />
                        <select value="HT">
                            <option value="HT">HT</option>
                             <option value="TTC">TTC</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="PopupNewArticle_Information__zone Catageory">
                <div class="PopupNewArticle_Information__Failed">
                    <h6>Catégorie :</h6>
                    <div class="InputPrix">
                        <select value="Veuillez sélectionner">
                            <option  v-for="(Categ,n) in OurCatégory" :key="n" value="HT">{{Categ.Name}}</option>
                        </select>
                    </div>
                </div>
                <div class="PopupNewArticle_Information__Failed TVA">
                    <h6>TVA :</h6>
                                    <select value="20,00%">
                                        <option value="20,00%">20,00%</option>
                                        <option value="14,00%">14,00%</option>
                                        <option value="10,00%">10,00%</option>
                                        <option value="7,00%">7,00%</option>
                                        <option value="0,00%">0,00%</option>
                                    </select>
                </div>
                <div class="PopupNewArticle_Information__Failed">
                    <h6>Unité de valorisation :</h6>
                            <select value ="Unité(s)">
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
                </div>
            </div>
            <div class="PopupNewArticle_Information__zone Description">
                <div class="DiscriptionZOne">
                    <h5>Description détaillée :</h5>
                    <textarea type="text" placeholder="Description détaillée "></textarea>
                </div> 
            </div>
            <p>* champs obligatoire</p>
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
  emits:['RemovePopupNewArticle'],
  props:[],
  data: () => ({
      OurCatégory:[
          {
              Name:"Veuillez sélectionner"
          },
                    {
              Name:"carte de visite"
          },
                    {
              Name:"carte de visite / Recto Quadri Verso"
          },
                    {
              Name:"carte de visite / Recto/Verso Quadri"
          },
                    {
              Name:"Recto Quadri Verso Noire"
          },
                    {
              Name:"IMPRESSION GRAND FORMAT"
          },
                    {
              Name:"BACHE BRILLANT"
          },
      ]

  }),
  methods:{
      EnregistrerNewArticle(){
    

      },
      GetCodeClientStart(){
      }
  },
  mounted(){
    this.GetCodeClientStart()
  }
  
};
</script>
