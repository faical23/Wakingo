<template>
    <div class="AddArticleVentes">
        <div class="AddArticleVentes__lines">
            <i class="fas fa-list-alt"></i>
            <h4>Lignes</h4>
        </div>
        <div class="AddArticleVentes__articles">
                <input type="file" hidden ref="ArticelImgProduct"  @change="ChangeArticleImg()">
                <table>
                    <tr>
                        <th class="FailedArticle">Article</th>
                        <th class="FailedTailsArticle">Détails de l'article</th>
                        <th class="FailedSimple">Qté.</th>
                        <th class="FailedSimple" >Unité.</th>
                        <th class="FailedSimple" >
                            <select v-model="PriceType">
                                <option value="P.U HT">P.U HT</option>
                                <option value="P.U TTC">P.U HT</option>
                            </select>
                        </th>
                        <th class="FailedSimple" >Remis</th>

                        <th class="FailedSimple">Tva</th>
                        <th  class="FailedSimple" >Total TTC</th>
                        <th  class="FailedSimpleBtn">#</th>
                    </tr>
                    <tr v-for="(article,n) in Article" :key="n">
                        <td class="FaildAddImageAndName">
                             <!-- <input type="file" hidden ref="ArticelImg" @change="ChangeArticleImg(n)"> -->
                            <img :src="article.ArticleImg" alt="article img"  @click="UploadImg(n)" />
                            <div class="ScrollSelectionerArticel">
                                    <button class="SearchClientButton" @click='scrollSelectArticle == true ? scrollSelectArticle = false :  scrollSelectArticle = true' >Sélectioner un cient <i class="fas fa-sort-down"></i></button>
                                    <div class="PlaceClientAndSearch" v-if="scrollSelectArticle">
                                    <input type="text">
                                    <ul>
                                        <li class="PlaceClientAndSearch_FirstLi">Sélectioner un cient</li>
                                        <li  v-for="(article,n) in OurArticle" :key="n" @click='GetThisPArticle(article),scrollSelectArticle = false'>{{article.ProductNamel}}</li>    
                                    </ul>
                                    </div>
                            </div>
                        </td>
                        <td>
                            <input type="text" v-model="nameArticle">
                        </td  >
                        <td  class="FailedSimple">
                            <input type="text" v-model="Qté" placeholder="0,00">
                        </td>
                        <td  class="FailedSimple">
                            <select name="pets" id="pet-select" v-model="Unité">
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
                        </td>
                        <td  class="FailedSimple">
                            <input type="text" v-model="Price" placeholder="0,00">
                        </td>
                        <td  class="FailedSimple" >
                                <div class="Remise">
                                        <input type="text" placeholder="0,00" v-model="RemisePrice"/>
                                        <select name="pets" id="pet-select" v-model="RemiseType">
                                            <option value="%">%</option>
                                            <option value="Montant">Montant</option>
                                        </select>
                                    </div>
                        </td>
                        <td  class="FailedSimple">
                                    <select class="TVA" name="pets" id="pet-select" v-model="TVA">
                                        <option value="20,00%">20,00%</option>
                                        <option value="14,00%">14,00%</option>
                                        <option value="10,00%">10,00%</option>
                                        <option value="7,00%">7,00%</option>
                                        <option value="0,00%">0,00%</option>
                                    </select>
                        </td>
                        <td  class="FailedSimple">
                            <input type="text" placeholder="0,00" v-model="TotalTTC" disabled>
                        </td>
                        <td  class="FailedSimpleBtn">
                            <button class="DeleteRow">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                            </button>
                        </td>
                    </tr>
                </table>
        </div>
    </div>
</template>



<script>
export default {
  components: { },
  name: "ArticleVentes",
  emits:[],
  props:[],
  data: () => ({
      Article:[
          {
                ArticleImg:'/img/uploaImg.7d959d34.jpg',
                scrollSelectArticle:false,
                nameArticle:'',
                Qté:'',
                Unité :'Douzaine(s)',
                PriceType:'P.U HT',
                Price:'',
                RemisePrice:'',
                RemiseType:'%',
                TVA:"20,00%",
                TotalTTC:'',
          },
        {
                ArticleImg:'/img/uploaImg.7d959d34.jpg',
                scrollSelectArticle:false,
                nameArticle:'',
                Qté:'',
                Unité :'Douzaine(s)',
                PriceType:'P.U HT',
                Price:'',
                RemisePrice:'',
                RemiseType:'%',
                TVA:"20,00%",
                TotalTTC:'',
          },
        {
                ArticleImg:'/img/uploaImg.7d959d34.jpg',
                scrollSelectArticle:false,
                nameArticle:'',
                Qté:'',
                Unité :'Douzaine(s)',
                PriceType:'P.U HT',
                Price:'',
                RemisePrice:'',
                RemiseType:'%',
                TVA:"20,00%",
                TotalTTC:'',
          }
      ],
      ArticleImg:'/img/uploaImg.7d959d34.jpg',
      scrollSelectArticle:false,
      nameArticle:'',
      Qté:'',
      Unité :'Douzaine(s)',
      PriceType:'P.U HT',
      Price:'',
      RemisePrice:'',
      RemiseType:'%',
      TVA:"20,00%",
      TotalTTC:'',
      OurArticle:[
          {
              ProductNamel:"ART256A3 350g 1",
              Unité:'g',
              Price :4.50
          },
        {
              ProductNamel:"ART256A3 350g 2",
              Unité:'Jour(s)',
              Price :8.50
          },
          {
              ProductNamel:"ART256A3 350g 3",
              Unité:'g',
              Price :44
          },
        {
              ProductNamel:"ART256A3 350g 4",
              Unité:'g',
              Price :4.50
          },
          {
              ProductNamel:"ART256A3 350g 5",
              Unité:'g',
              Price :4.50
          },
        {
              ProductNamel:"ART256A3 350g 2",
              Unité:'g',
              Price :4.50
          },
          {
              ProductNamel:"ART256A3 350g 3",
              Unité:'g',
              Price :4.50
          },
        {
              ProductNamel:"ART256A3 350g 4",
              Unité:'g',
              Price :4.50
          },
          {
              ProductNamel:"ART256A3 350g 5",
              Unité:'g',
              Price :4.50
          }
      ],
      IndexImgChange:''


  }),
  methods:{
    UploadImg(n){
        this.$refs.ArticelImgProduct.click()
        this.IndexImgChange = n;
        console.log(this.IndexImgChange)
    },
    GetArticleImg(){
        let img = require('../../assets/img/uploaImg.jpg')
        console.log(img)
        return this.img
    },
    ChangeArticleImg(){
        let file = this.$refs.ArticelImgProduct.files[0]
        this.Article[this.IndexImgChange ].ArticleImg = URL.createObjectURL(file);
    },
    GetThisPArticle(article){
        this.nameArticle = article.ProductNamel;
        this.Unité = article.Unité;
        this.Price = article.Price;
    }
  },
  mounted(){
  }
  
};
</script>
