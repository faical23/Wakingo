<template>
  <div class="PopupNewClient PopupChoiserArticle">
    <div class="PopupNewClient__title">
      <p>Choiser Les article</p>
      <svg
      @click="$emit('RemovePopupChoiserArticle')"
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
    <div class="PopupNewArticle_Information__Title">
            <h6>Recherche Rapide</h6>
    </div>
    <div class="PopupNewArticle_Information">
        <div class="PopupChoiserArticle__Search">
            <div class="PopupNewArticle_Information__Faild">
                <h6>Numéro :</h6>
                <input type="text">
            </div>
            <div class="PopupNewArticle_Information__Faild">
                <h6>Libellé :</h6>
                <input type="text">
            </div>
            <div class="PopupNewArticle_Information__Faild">
                <h6>Catégorie :</h6>
                        <select  v-model="CategorySearched" >
                            <option value="Tous">Tous</option>
                            <option  v-for="(Catég,n) in Catégory" :key="n" :value="Catég.Name">{{Catég.Name}}</option>
                        </select>
            </div>
            <div class="PopupNewArticle_Information__Faild">
                <h6>Famille :</h6>
                        <select  v-model="FamillySearched">
                            <option value="Tous">Tous</option>
                            <option v-for="(Famille,n) in Familles" :key="n"  :value="Famille.Name">{{Famille.Name}}</option>
                        </select>
            </div>
        </div>
    </div>
    <div class="PopupNewArticle_TableArticles">
                This is articles
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="desserts"
                        :single-select="singleSelect"
                        item-key="name"
                        show-select
                        class="elevation-1"
                    >
                        <template v-slot:top>
                        <v-switch
                            v-model="singleSelect"
                            label="Single select"
                            class="pa-3"
                        ></v-switch>
                        </template>
                    </v-data-table>
    </div>
    <div class="PopupNewClient__btns">
      <button class="Btn__Firmer" @click="$emit('RemovePopupChoiserArticle')">
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
      <button class="Btn__Enregistrer Btn__CHoiserArticles" @click='GetAllThisArticles()'>
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
        Choiser Les Articles
      </button>
    </div>
  </div>
</template>



<script>
export default {
  name: "ChoiserArticle",
  emits:['RemovePopupChoiserArticle','GetAllThisArticles'],
  props:[],
  data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        singleSelect: false,
        selected: [],
        headers: [
          {
            text: 'Code',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Désignation', value: 'Désignation' },
          { text: 'Famille', value: 'Famille' },
          { text: 'Catégorie', value: 'Catégorie' },
          { text: 'Prix de revient', value: 'PriceDeRevient' },
          { text: 'Prix de vente (HT)', value: 'PrixDeVente' },
        ],
        desserts: [
          {
            name: 'ART-24',
            Désignation: 'AAA',
            Famille:'ABCDEFG',
            Catégorie: 'ABCDEFG',
            PriceDeRevient: 0.00,
            PrixDeVente: 3.15,
            Unité:'kg',
            TVA:'14,00%'
          },
          {
            name: 'ART-25',
            Désignation: 'BBB',
            Famille:'ABCDEFG',
            Catégorie: 'ABCDEFG',
            PriceDeRevient: 0.00,
            PrixDeVente: 4.18,
            Unité:'t',
            TVA:'14,00%'
          },
          {
            name: 'ART-26',
            Désignation: 'CCC',
            Famille:'ABCDEFG',
            Catégorie: 'ABCDEFG',
            PriceDeRevient: 0.00,
            PrixDeVente: 11.9,
            Unité:'g',
            TVA:'14,00%'
          },
          {
            name: 'ART-27',
            Désignation: 'DDD',
            Famille:'ABCDEFG',
            Catégorie: 'ABCDEFG',
            PriceDeRevient: 0.00,
            PrixDeVente: 9.56,
            Unité:'Km',
            TVA:'14,00%'
          },
          {
            name: 'ART-28',
            Désignation: 'CCC',
            Famille:'ABCDEFG',
            Catégorie: 'ABCDEFG',
            PriceDeRevient: 0.00,
            PrixDeVente: 33,
            Unité:'m',
            TVA:'14,00%'
          },
          {
            name: 'ART-29',
            Désignation: 'DDD',
            Famille:'ABCDEFG',
            Catégorie: 'ABCDEFG',
            PriceDeRevient: 0.00,
            PrixDeVente: 10,
            Unité:'cm',
            TVA:'14,00%'
          },
          {
            name: 'ART-30',
            Désignation: 'EEE',
            Famille:'ABCDEFG',
            Catégorie: 'ABCDEFG',
            PriceDeRevient: 0.00,
            PrixDeVente: 12,
            Unité:'Unité(s)',
            TVA:'14,00%'
          },
          {
            name: 'ART-31',
            Désignation: 'FFF',
            Famille:'ABCDEFG',
            Catégorie: 'ABCDEFG',
            PriceDeRevient: 0.00,
            PrixDeVente: 20,
            Unité:'g',
            TVA:'14,00%'
          },
        ],
        Catégory:[
            {
                Name:'IMPRESSION GRAND FORMAT'
            },
            {
                Name:'IMPRESSION PETIT FORMAT'
            },
            {
                Name:'carte de visite'
            },
        ],
        Familles:[
            {
                Name:'ARTICLES grand format'
            },
            {
                Name:'Adhésif'
            },
            {
                Name:'BON & CARNET'
            },
            {
                Name:'CARTE DE VISITE'
            },
            {
                Name:'CHEMISES ET COUVERTURE'
            },

        ],
        CategorySearched : 'Tous',
        FamillySearched : 'Tous'
  }),
  methods:{
      GetAllThisArticles(){
          this.$emit('GetAllThisArticles',this.selected)
      },
  },
  mounted(){
  }
  
};
</script>
