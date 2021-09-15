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
                            <select v-model="PriceType" @change="ChangePriceType()">
                                <option value="P.U HT">P.U HT</option>
                                <option value="P.U TTC">P.U TTC</option>
                            </select>
                        </th>
                        <th class="FailedSimple" >Remis</th>

                        <th class="FailedSimple">Tva</th>
                        <th  class="FailedSimple" >Total TTC</th>
                        <th  class="FailedSimpleBtn">#</th>
                    </tr>
                    <tr v-for="(article,index) in Article" :key="index">
                        <td class="FaildAddImageAndName" v-if="article.Type=='Article'">
                            <img :src="article.ArticleImg" alt="article img"  @click="UploadImg(index)" />
                            <div class="ScrollSelectionerArticel">
                                    <button class="SearchClientButton" @click="GeThisScrollArticle(index)">Sélectioner un cient <i class="fas fa-sort-down"></i></button>
                                    <div class="PlaceClientAndSearch" v-if="scrollSelectArticleClicked === index">
                                    <input type="text">
                                    <ul>
                                        <li class="PlaceClientAndSearch_FirstLi">Sélectioner un cient</li>
                                        <li  v-for="(article,n) in OurArticle" :key="n" @click="GetThisPArticle(article,index),scrollSelectArticleClicked = ''">{{article.ProductName}}</li>    
                                    </ul>
                                    </div>
                            </div>
                        </td>
                        <td :colspan="article.Type=='Article Libre' ? '2' : '1'" v-if="article.Type!='Sous total' && article.Type!='Text libre'">
                            <input class="InputZone" type="text" v-model="article.nameArticle">
                        </td  >
                        <td  class="FailedSimple" v-if="article.Type!='Sous total' && article.Type!='Text libre'">
                            <input :class=" article.Type != 'Article Libre' ? 'InputZone' : '' " type="text" v-model="article.Qté" placeholder="0,00">
                        </td>
                        <td  class="FailedSimple" v-if="article.Type!='Sous total' && article.Type!='Text libre'">
                            <select  class="InputZone" name="pets" id="pet-select" v-model="article.Unité">
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
                        <td  class="FailedSimple" v-if="article.Type!='Sous total' && article.Type!='Text libre'">
                            <input class="InputZone" type="text" v-model="article.Price" placeholder="0,00">
                        </td>
                        <td  class="FailedSimple" v-if="article.Type!='Sous total' && article.Type!='Text libre'" >
                                <div class="Remise InputZone">
                                        <input type="text" placeholder="0,00" v-model="article.RemisePrice"/>
                                        <select name="pets" id="pet-select" v-model="article.RemiseType">
                                            <option value="%">%</option>
                                            <option value="Montant">Montant</option>
                                        </select>
                                    </div>
                        </td>
                        <td  class="FailedSimple" v-if="article.Type!='Sous total' && article.Type!='Text libre'">
                                    <select  class="TVA InputZone" name="pets" id="pet-select" v-model="article.TVA">
                                        <option value="20,00%">20,00%</option>
                                        <option value="14,00%">14,00%</option>
                                        <option value="10,00%">10,00%</option>
                                        <option value="7,00%">7,00%</option>
                                        <option value="0,00%">0,00%</option>
                                    </select>
                        </td>
                        <td  colspan="7" style="text-align: end !important;" class="FailedSimple" v-if="article.Type==='Sous total' && article.Type!='Text libre'">
                            <input style="position:relative !important;width:10% !important" class="InputZone" type="text" value="Sous-total TTC">
                        </td>
                        <td  colspan="8"  v-if=" article.Type=='Text libre'">
                            <input type="text" v-model="article.TextLibre">
                        </td>
                        <td  class="FailedSimple" v-if=" article.Type!='Text libre'">
                            <input  class="InputZone" type="text" placeholder="0,00" v-model="article.TotalTTC" disabled>
                        </td>
                        <td  class="FailedSimpleBtn">
                            <button class="DeleteRow InputZone" @click="DeleteArticle(index)">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                            </button>
                        </td>
                    </tr>
                </table>
                <div class="AddArticleVentes__articles__btns">
                    
                        <v-row justify="space-around">
                            <v-menu
                            v-for="([text, rounded]) in btns"
                            :key="text"
                            :rounded="rounded"
                            offset-y
                            >
                            <template v-slot:activator="{  on }">
                                <v-btn
                                v-on="on"
                                >
                                Ajouter une ligne
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item link>
                                    <v-list-item-title @click="AddNewArticle('Article')">Article</v-list-item-title>
                                </v-list-item>
                                <v-list-item link>
                                    <v-list-item-title @click="AddNewArticle('Article Libre')">Article libre</v-list-item-title>
                                </v-list-item>
                                <v-list-item link>
                                    <v-list-item-title @click="AddSousTotal()">Sous total</v-list-item-title>
                                </v-list-item>
                                <v-list-item link>
                                    <v-list-item-title @click="TextLibre()">text libre</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                        </v-row>
                        <v-btn
                            color="primary"
                            dark
                            large
                            @click="$emit('NewArticlePopup',OurArticle.length)"
                            >
                            Créée un article
                        </v-btn>
                        <v-btn
                            color="success"
                            dark
                            large
                            @click="$emit('ChoiserArticles')"
                            >
                            Choiser les articles
                        </v-btn>
                </div>
                <div class="AddArticleVentes__TableMontant">
                    <table>
                            <tr>
                                <th>Total brut</th>
                                <th>Remise</th>
                                <th>Total TH</th>
                                <th>TVA</th>
                                <th>Transport HT</th>
                                <th>TVA PORT</th>
                                <th>Total TTC</th>
                                
                            </tr>
                            <tr> 
                               <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                                <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                                 <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                            </tr>
                    </table>
                </div>
                <div class="AddArticleVentes__TVA">
                    <p>% Table de TVA</p>
                    <table>
                        <tr>
                            <th>Base HT</th>
                            <th>TVA %</th>
                            <th>TVA montant</th>
                        </tr>
                         <tr>
                             <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled>
                               </td>
                        </tr>
                    </table>
                </div>
        </div>
    </div>
</template>



<script>
export default {
  components: { },
  name: "ArticleVentes",
  emits:['NewArticlePopup'],
  props:['DataNewArticleAdded','DataChoiserArticles'],
  data: () => ({
      Article:[
        {
                Type:'Article',
                ArticleImg:'/img/uploaImg.7d959d34.jpg',
                scrollSelectArticle:false,
                nameArticle:'',
                Qté:'',
                Unité :'Douzaine(s)',
                Price:'',
                TypePrice:'',
                RemisePrice:'',
                RemiseType:'%',
                TVA:"20,00%",
                TotalTTC:'',
          },
        // {
        //         Type:'Article Libre',
        //         Qté:'',
        //         Unité :'Douzaine(s)',
        //         Price:'',
        //         RemisePrice:'',
        //         RemiseType:'%',
        //         TVA:"20,00%",
        //         TotalTTC:'',
        //   },
        // {
        //         Type:'Sous total',
        //         TotalTTC:'',
        //   },
        // {
        //         TextLibre : 'Text libre',
        //         Type:'Text libre',
        //   },
      ],

      PriceType:'P.U HT',
      TotalTTC:'',
      OurArticle:[
          {
              ProductName:"ART1 350g ",
              Unité:'g',
               Price :4.50,
               TVA:'14,00%'
          },
        {
              ProductName:"ART2 350g ",
              Unité:'Jour(s)',
              Price :8.50,
              TVA:'20,00%'
          },
          {
              ProductName:"ART3 350g ",
              Unité:'m',
              Price :44,
               TVA:'20,00%'
          },
        {
              ProductName:"ART4 350g ",
              Unité:'g',
              Price :4.50,
              TVA:'20,00%'
          },
          {
              ProductName:"ART5 350g ",
              Unité:'g',
              Price :4.50,
              TVA:'20,00%'
          },
        {
              ProductName:"ART6 350g ",
              Unité:'g',
              Price :4.50,
              TVA:'20,00%'
          },
          {
              ProductName:"ART7 350g ",
              Unité:'g',
              Price :4.50,
              TVA:'20,00%'
          },
        {
              ProductName:"ART8 350g ",
              Unité:'g',
              Price :4.50
          },
          {
              ProductName:"ART9 350g ",
              Unité:'g',
              Price :4.50
          }
      ],
      IndexImgChange:'',
    scrollSelectArticleClicked:'',
          btns: [
        ['Removed', '0'],
      ],
      colors: ['deep-purple accent-4', 'error', 'teal darken-1'],


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
    GeThisScrollArticle(n){
        this.scrollSelectArticleClicked !== n ? this.scrollSelectArticleClicked = n : this.scrollSelectArticleClicked = ''
    },
    GetThisPArticle(article,n){
        console.log(article.ProductNamel,n)
        this.Article[n].nameArticle = article.ProductName
        this.Article[n].Unité = article.Unité;
        this.Article[n].Price = article.Price;
        this.Article[n].TVA = article.TVA;
    },
    AddNewArticle(TypeArticle){

        const NewArticle ={
                Type:TypeArticle,
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
          this.Article.push(NewArticle)
    },
    AddSousTotal(){
        console.log("sousTotal")
        let SousTotal = {
                Type:'Sous total',
                TotalTTC:'',
          }
        this.Article.push(SousTotal)
    },
    TextLibre(){
            let TextLibre = {
                TextLibre : 'Text libre',
                Type:'Text libre',
          }
            this.Article.push(TextLibre)
    },
    DeleteArticle(row){
        this.Article.splice(row,1); 
    },
    ChangePriceType(){
        this.Article.forEach(element =>{
            if(element.Price){
                if(this.PriceType === "P.U HT"){
                    element.Price = (((100 * element.Price) /(100 +  parseFloat(element.TVA))).toFixed(2))
                }
                if(this.PriceType === "P.U TTC"){
                     element.Price = (((element.Price * parseFloat(element.TVA)/ 100) ) + parseFloat(element.Price)).toFixed(2)
                }
            }
        })
    }
  },
    watch: { 
            DataNewArticleAdded: function (){
                let ArticlePrice = ''
                if(this.PriceType == 'P.U HT' && this.DataNewArticleAdded.TypeVende == 'HT' || this.PriceType == 'P.U TTC' && this.DataNewArticleAdded.TypeVende == 'TTC'){

                    ArticlePrice = this.DataNewArticleAdded.PrixVende
                }
                else if(this.PriceType == 'P.U HT' && this.DataNewArticleAdded.TypeVende == 'TTC'){
                    //// TTC TO HT
                    ArticlePrice = (((100 * this.DataNewArticleAdded.PrixVende) /(100 +  parseFloat(this.DataNewArticleAdded.TVA))).toFixed(2))
                }
                else if(this.PriceType == 'P.U TTC' && this.DataNewArticleAdded.TypeVende == 'HT'){
                    // HT TO TTC
                    ArticlePrice = (((this.DataNewArticleAdded.PrixVende * parseFloat(this.DataNewArticleAdded.TVA)/ 100) ) + parseFloat(this.DataNewArticleAdded.PrixVende)).toFixed(2)
                }

                let ArticleLength = this.Article.length - 1
                if(this.Article[ ArticleLength].nameArticle == ''){
                    this.Article[ ArticleLength].nameArticle = `${this.DataNewArticleAdded.CodeArtcile} ${this.DataNewArticleAdded.LibelléArticle}`
                    this.Article[ ArticleLength].Price =  ArticlePrice
                    this.Article[ ArticleLength].Unité =  this.DataNewArticleAdded.UnitéValorisation
                    this.Article[ ArticleLength].TVA =  this.DataNewArticleAdded.TVA
                }
                else{
                    let NewRowArticle = {
                            Type:'Article',
                            ArticleImg:'/img/uploaImg.7d959d34.jpg',
                            scrollSelectArticle:false,
                            nameArticle: `${this.DataNewArticleAdded.CodeArtcile} ${this.DataNewArticleAdded.LibelléArticle}`,
                            Qté:'',
                            Unité : this.DataNewArticleAdded.UnitéValorisation,
                            Price:ArticlePrice,
                            RemisePrice:'',
                            RemiseType:'%',
                            TVA:this.DataNewArticleAdded.TVA,
                            TotalTTC:'',
                    }
                     this.Article.push(NewRowArticle)

                }
            },
            DataChoiserArticles : function (){
                this.DataChoiserArticles.forEach(element => {
                    let ArticlePrice = ''
                    if(this.PriceType == 'P.U HT'  ){
                        ArticlePrice = element.PrixDeVente
                    }
                    else if(this.PriceType == 'P.U TTC'){
                        // HT TO TTC
                        ArticlePrice = (((element.PrixDeVente * parseFloat(this.DataNewArticleAdded.TVA)/ 100) ) + parseFloat(element.PrixDeVente)).toFixed(2)
                    }
                    let NewRowArticleChoiser = {
                            Type:'Article',
                            ArticleImg:'/img/uploaImg.7d959d34.jpg',
                            scrollSelectArticle:false,
                            nameArticle: `${element.name} ${element.Désignation}`,
                            Qté:'',
                            Unité : element.Unité,
                            Price:ArticlePrice ,
                            RemisePrice:'',
                            RemiseType:'%',
                            TVA:element.TVA,
                            TotalTTC:'',
                    }
                    this.Article.push(NewRowArticleChoiser)
                    console.log(element)
                })
            }
    },
  mounted(){
  }
  
};
</script>
