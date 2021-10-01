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
                            <select v-model="PriceType" @change="GetTotalTTCRow('AllRowMontant'),Calculte_TotatlBrut_And_Remise()" >
                                <option value="P.U HT">P.U HT</option>
                                <option value="P.U TTC">P.U TTC</option>
                            </select>
                        </th>
                        <th class="FailedSimple" >Remise</th>

                        <th class="FailedSimple">Tva</th>
                        <th  class="FailedSimple" >Total TTC</th>
                        <th  class="FailedSimpleBtn">#</th>
                    </tr>
                    <tr v-for="(article,index) in Article" :key="index">
                        <td class="FaildAddImageAndName" v-if="article.Type=='Article'">
                            <img :src="article.ArticleImg" alt="article img"  @click="UploadImg(index)" />
                            <div class="ScrollSelectionerArticel">
                                    <button class="SearchClientButton SearchArticles" @click="GeThisScrollArticle(index)">{{article.nameArticle}}<i class="fas fa-sort-down"></i></button>
                                    <span v-if="DataIsSubmited && article.nameArticle == 'Sélectioner un client' " class="MessageErrorFiled ArticleFailedError">Ce champ est obligatoire .</span>

                                    <div class="PlaceClientAndSearch" v-if="scrollSelectArticleClicked === index">
                                    <input type="text">
                                    <ul>
                                        <li class="PlaceClientAndSearch_FirstLi">Sélectioner un cient</li>
                                        <li  v-for="(article,n) in OurArticle" :key="n" @click="GetThisPArticle(article,index),scrollSelectArticleClicked = '',GetTotalTTCRow(index),Calculte_TotatlBrut_And_Remise()">{{article.ProductName}}</li>    
                                    </ul>
                                    </div>
                            </div>
                        </td>
                        <td :colspan="article.Type=='Article Libre' ? '2' : '1'" v-if="article.Type!='Sous total' && article.Type!='Text libre'">
                            <input class="InputZone" type="text" v-model="article.DétailsArticle">
                            <span v-if="DataIsSubmited && article.DétailsArticle == '' " class="MessageErrorFiled ArticleFailedError">Ce champ est obligatoire .</span>

                        </td  >
                        <td  class="FailedSimple" v-if="article.Type!='Sous total' && article.Type!='Text libre'">
                            <input :class=" article.Type != 'Article Libre' ? 'InputZone' : '' " type="text" v-model="article.Qté" placeholder="0,00" @keyup="GetTotalTTCRow(index),Calculte_TotatlBrut_And_Remise()"  @change="GetTotalTTCRow(index),Calculte_TotatlBrut_And_Remise()">
                            <span v-if="DataIsSubmited && (isNaN(article.Qté) || article.Qté == '0') " class="MessageErrorFiled ArticleFailedError">vous devez spécifier la valeur correcte.</span>
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
                            <input class="InputZone" type="text" v-model="article.Price" placeholder="0,00"  @keyup="GetTotalTTCRow(index),Calculte_TotatlBrut_And_Remise()" @change="GetTotalTTCRow(index),Calculte_TotatlBrut_And_Remise()">
                            <span v-if="DataIsSubmited && (isNaN(article.Price) || article.Price == '0') " class="MessageErrorFiled ArticleFailedError">vous devez spécifier la valeur correcte.</span>
                        </td>
                        <td  class="FailedSimple" v-if="article.Type!='Sous total' && article.Type!='Text libre'" >
                                <div class="Remise InputZone">
                                        <input type="text" placeholder="0,00" v-model="article.RemisePrice"  @keyup="GetTotalTTCRow(index),Calculte_TotatlBrut_And_Remise()">
                                        <select name="pets" id="pet-select" v-model="article.RemiseType" @change="GetTotalTTCRow(index),Calculte_TotatlBrut_And_Remise()">
                                            <option value="%">%</option>
                                            <option value="Montant">Montant</option>
                                        </select>
                                    </div>
                        </td>
                        <td  class="FailedSimple" v-if="article.Type!='Sous total' && article.Type!='Text libre'">
                                    <select  class="TVA InputZone" name="pets" id="pet-select" v-model="article.TVA" @change="GetTotalTTCRow(index) ,Calculte_TotatlBrut_And_Remise()">
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
                            <input  class="InputZone" type="text" placeholder="0,00" v-model="article.TotalTTC" disabled >
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
                                   <input type="text" placeholder="0,00" disabled v-model="TotalBrutGlobal">
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled v-model="RemiseGlobal">
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled v-model="TotalHTGlobal">
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled v-model="TVAtGlobal">
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled v-model="TransportHTGlobal">
                               </td>
                                <td>
                                   <input type="text" placeholder="0,00" disabled v-model="TVAPortGlobal">
                               </td>
                                 <td>
                                   <input type="text" placeholder="0,00" disabled v-model="TotalTTCGlobal">
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
                         <tr  v-for="(Tabletva,n) in Table_TVA" :key="n">
                             <td>
                                   <input type="text" placeholder="0,00" disabled v-model="Tabletva.TableTva_BaseHT">
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled v-model="Tabletva.TableTva_TVA">
                               </td>
                              <td>
                                   <input type="text" placeholder="0,00" disabled v-model="Tabletva.TableTva_TVAMontant">
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
  props:['DataNewArticleAdded','DataChoiserArticles','DataRemisAndPort'],
  data: () => ({
      Article:[
        {
                Type:'Article',
                ArticleImg:'/img/uploaImg.7d959d34.jpg',
                scrollSelectArticle:false,
                nameArticle:'Sélectioner un client',
                DétailsArticle:'',
                Qté:0,
                Unité :'Douzaine(s)',
                Price:0,
                TypePrice:'',
                RemisePrice:0,
                RemiseType:'%',
                TVA:"20,00%",
                TotalTTC:0,
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
    TotalBrutGlobal:0,
    RemiseGlobal:0,
    TotalHTGlobal:0,
    TVAtGlobal:0,
    TransportHTGlobal:0,
    TVAPortGlobal:0,
    TotalTTCGlobal:0,
    Table_TVA : [
        {
            TableTva_BaseHT:0,
            TableTva_TVA:0,
            TableTva_TVAMontant:0,
        },
    ],
    DataIsSubmited :false



  }),
  methods:{
    UploadImg(index){
        this.$refs.ArticelImgProduct.click()
        this.IndexImgChange = index;
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
    GeThisScrollArticle(index){
        this.scrollSelectArticleClicked !== index ? this.scrollSelectArticleClicked = index : this.scrollSelectArticleClicked = ''
    },
    GetThisPArticle(article,index){
        this.Article[index].nameArticle = article.ProductName
        this.Article[index].Unité = article.Unité;
        this.Article[index].Price = article.Price;
        this.Article[index].TVA = article.TVA;
        // let ArticlesDrowDown = document.querySelectorAll('.SearchArticles')

    },
    AddNewArticle(TypeArticle){
        const NewArticle ={
                Type:TypeArticle,
                ArticleImg:'/img/uploaImg.7d959d34.jpg',
                scrollSelectArticle:false,
                nameArticle:'Sélectioner un client',
                DétailsArticle:'',
                Qté:0,
                Unité :'Douzaine(s)',
                PriceType:'P.U HT',
                Price:0,
                RemisePrice:0,
                RemiseType:'%',
                TVA:"20,00%",
                TotalTTC:0,
        }
        this.Article.push(NewArticle)
        /// add new tva table if article is added
        let NewTable_TVA ={
            TableTva_BaseHT:0,
            TableTva_TVA:0,
            TableTva_TVAMontant:0,
        }
        this.Table_TVA.push(NewTable_TVA)
    },
    AddSousTotal(Condition){
        if(Condition !== "Change Sous Total")
        {
            let CalculeSousTotal = 0
            let LengthArticles = (this.Article.length)-1        
            if(this.Article[LengthArticles].Type !== "Sous total"){
                this.Article.forEach(element =>{
                    if(element.Type === 'Article' || element.Type === 'Article Libre'){
                            CalculeSousTotal += (parseFloat(element.TotalTTC))
                    }
                    else if(element.Type === 'Sous total'){
                            CalculeSousTotal -= (parseFloat(element.TotalTTC))
                    }
                })
            }
            let SousTotal = {
                    Type:'Sous total',
                    TotalTTC:CalculeSousTotal,
            }

            this.Article.push(SousTotal)
        }
        else{
            let CalculeSousTotal = 0
            this.Article.forEach(element =>{
                if(element.Type === 'Article' || element.Type === 'Article Libre'){
                        CalculeSousTotal += (parseFloat(element.TotalTTC))
                }
                else if(element.Type === 'Sous total' ){
                    element.TotalTTC = CalculeSousTotal
                    CalculeSousTotal = 0
                }               
            })
            console.log(CalculeSousTotal)
        }

    },
    TextLibre(){
            let TextLibre = {
                TextLibre : 'Text libre',
                Type:'Text libre',
          }
            this.Article.push(TextLibre)
    },
    DeleteArticle(index){
        this.Article.splice(index,1); 
        this.Table_TVA.splice(index,1); 
        this.AddSousTotal('Change Sous Total')
        this.Calculte_TotatlBrut_And_Remise()
        this.Calcule_TableTva_And_Tva_Global_And_TotalHt_And_TottalTTc()
    },
    GetTotalTTCRow(index){
        if(index === "AllRowMontant"){
            if(this.PriceType === "P.U TTC"){
                this.Article.forEach(element =>{
                    if( element.Qté !== '' && element.Price !== ''){
                        let total =(parseFloat(element.Qté)*element.Price).toFixed(2)
                        if(element.RemisePrice !== ""){
                            if(element.RemiseType === "%"){
                                element.TotalTTC =(total - ( total * parseFloat(element.RemisePrice /100))).toFixed(2)
                            }
                            else if(element.RemiseType === "Montant"){
                                element.TotalTTC = (total -  parseFloat(element.RemisePrice )).toFixed(2)
                            }
                        }
                        else{
                            element.TotalTTC = total
                        }
                    }
                    else{
                            element.TotalTTC = 0
                    }

                })
            }
            else if(this.PriceType === "P.U HT"){
                this.Article.forEach(element =>{
                    if( element.Qté !== '' && element.Price !== ''){
                        let total = (parseFloat(element.Qté) * parseFloat(element.Price))
                        let totalPlusTVA = (( total * (parseFloat(element.TVA)/ 100) ) + total).toFixed(2)
                        if(element.RemisePrice !== ""){
                            if(element.RemiseType === "%"){
                                element.TotalTTC =(totalPlusTVA - ( totalPlusTVA * parseFloat(element.RemisePrice /100))).toFixed(2)
                            }
                            else if(element.RemiseType === "Montant"){
                                let RemiseConvertToTTC =  (parseFloat(element.RemisePrice ) + (parseFloat(element.RemisePrice )*(parseFloat(element.TVA)/ 100))).toFixed(2)
                                element.TotalTTC = (totalPlusTVA - RemiseConvertToTTC ).toFixed(2)
                            }
                        }
                        else{
                            element.TotalTTC =totalPlusTVA
                        }
                    }
                    else{
                        element.TotalTTC = 0
                    }
                })
            }
        }
        else{
            if(this.PriceType === "P.U TTC"){
                if(   this.Article[index].Qté !== '' && this.Article[index].Price !== ''){
                    if(this.Article[index].RemiseType === '%' ){
                        let total =  (parseFloat(this.Article[index].Qté) * parseFloat(this.Article[index].Price)).toFixed(2)
                        this.Article[index].TotalTTC =( total - total * parseFloat(this.Article[index].RemisePrice /100) ).toFixed(2)
                    }
                    else if(this.Article[index].RemiseType === 'Montant' ){
                        let total =  (parseFloat(this.Article[index].Qté) * parseFloat(this.Article[index].Price)).toFixed(2)
                        this.Article[index].TotalTTC =( total - (parseFloat(this.Article[index].RemisePrice)) ).toFixed(2)
                    }
                }
                else{
                    this.Article[index].TotalTTC = 0
                }

            }
            else if(this.PriceType === "P.U HT"){
                if( this.Article[index].Qté !== '' && this.Article[index].Price !== ''){
                    if(this.Article[index].RemiseType === '%' ){
                            let total = parseFloat(this.Article[index].Qté) * parseFloat(this.Article[index].Price)
                            this.Article[index].TotalTTC = (( total * (parseFloat(this.Article[index].TVA)/ 100) ) + total).toFixed(2)
                            this.Article[index].TotalTTC =( this.Article[index].TotalTTC - this.Article[index].TotalTTC * parseFloat(this.Article[index].RemisePrice /100) ).toFixed(2)
                    }
                    else if(this.Article[index].RemiseType === 'Montant' ){
                            let total = parseFloat(this.Article[index].Qté) * parseFloat(this.Article[index].Price)
                            this.Article[index].TotalTTC = (( total * (parseFloat(this.Article[index].TVA)/ 100) ) + total).toFixed(2)
                            if(this.Article[index].RemisePrice != ''){
                                let RemiseConvertToTTC =  (parseFloat(this.Article[index].RemisePrice ) + (parseFloat(this.Article[index].RemisePrice )*(parseFloat(this.Article[index].TVA)/ 100))).toFixed(2)
                                this.Article[index].TotalTTC =( this.Article[index].TotalTTC - RemiseConvertToTTC ).toFixed(2)
                            }
                    }
                }
                else{
                    this.Article[index].TotalTTC = 0
                }
            }
        }
        
        this.AddSousTotal('Change Sous Total')
        this.Calcule_TableTva_And_Tva_Global_And_TotalHt_And_TottalTTc()
    },
    Calculte_TotatlBrut_And_Remise(){
        this.TotalBrutGlobal = 0
        /// calcule total global brut 
        this.Article.forEach(element =>{
            //// calcule tota brut if is HT
            if(this.PriceType === 'P.U HT'){
                let totalBrutBeforeRemiseRow = parseFloat(element.Qté * element.Price) //// calcule total row before remove remise

                if(element.RemiseType === "%"){
                    this.TotalBrutGlobal += totalBrutBeforeRemiseRow -(totalBrutBeforeRemiseRow * (element.RemisePrice/100)) /// remove remise from total brut de chaque row if is %
                }
                else if(element.RemiseType === "Montant"){
                    this.TotalBrutGlobal += totalBrutBeforeRemiseRow - element.RemisePrice //// remove remise if is montant
                }
            }
            else if(this.PriceType === 'P.U TTC'){
                let totalBrutBeforeRemiseRow = parseFloat(100 * element.TotalTTC) / (100 + parseFloat(element.TVA)) //// calcule total before remove remise
                this.TotalBrutGlobal +=  totalBrutBeforeRemiseRow 
            }
        })

        //// calcule remise global
        if(this.DataRemisAndPort != ''){
            if(this.DataRemisAndPort.RemiseType === "%"){
                this.RemiseGlobal = (this.TotalBrutGlobal * this.DataRemisAndPort.Remise /100).toFixed(2) /// remise global if is %
            }
            else if(this.DataRemisAndPort.RemiseType ===  "Montant"){
                this.RemiseGlobal = this.DataRemisAndPort.Remise /// remise global if is montant
                /// update tva if is remise global montant
            }
        }

        //// calcle total ht global for
        this.TotalHTGlobal = this.TotalBrutGlobal - this.RemiseGlobal
        //// calcule total ttc global 
        this.TotalTTCGlobal =parseFloat((parseFloat(this.TotalHTGlobal) + parseFloat(this.TVAtGlobal) +parseFloat(this.TransportHTGlobal) + parseFloat(this.TVAPortGlobal))).toFixed(2)
    
    },
    Calcule_TableTva_And_Tva_Global_And_TotalHt_And_TottalTTc(){
        let row = 0
        this.TVAtGlobal = 0
        this.Article.forEach(element =>{
                if(element.Type === 'Article' || element.Type === 'Article Libre'){
                    let BaseHT = parseFloat(100 * element.TotalTTC) / (100 + parseFloat(element.TVA))
                    if(this.DataRemisAndPort != '' && this.DataRemisAndPort?.Remise != '' ){
                        if(this.DataRemisAndPort.RemiseType === "%"){                           
                            this.Table_TVA[row].TableTva_BaseHT = (BaseHT - (BaseHT * (this.DataRemisAndPort.Remise /100) )).toFixed(2)
                        }
                        else if(this.DataRemisAndPort.RemiseType === "Montant"){
                            let DeviseRemiseForEveryRow = this.DataRemisAndPort.Remise /this.Article.length
                            this.Table_TVA[row].TableTva_BaseHT = (BaseHT - DeviseRemiseForEveryRow  ).toFixed(2)
                        }
                    }
                    else{                       
                        this.Table_TVA[row].TableTva_BaseHT = (BaseHT).toFixed(2)
                    }
                    this.Table_TVA[row].TableTva_TVA = parseFloat(element.TVA)
                    this.Table_TVA[row].TableTva_TVAMontant= (this.Table_TVA[row].TableTva_BaseHT * this.Table_TVA[row].TableTva_TVA / 100).toFixed(2)
                    this.TVAtGlobal += parseFloat(this.Table_TVA[row].TableTva_TVAMontant)
                    row++;
                }

        })
        this.Calculte_TotatlBrut_And_Remise()


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
                        ArticlePrice = (((element.PrixDeVente * parseFloat(element.TVA)/ 100) ) + parseFloat(element.PrixDeVente)).toFixed(2)
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
            },
            DataRemisAndPort : function (){
                this.TransportHTGlobal =  this.DataRemisAndPort.Port
                this.TVAPortGlobal = (this.DataRemisAndPort.Port * (parseFloat(this.DataRemisAndPort.PortTVA) /100)).toFixed(2)
                this.Calculte_TotatlBrut_And_Remise()
                this.Calcule_TableTva_And_Tva_Global_And_TotalHt_And_TottalTTc()
            },
            '$store.state.InsertVendreData': function() {
                let InformationArtices = {
                    "Articles" : this.Article,
                    "Total Global":{
                            "Total Brut":this.TotalBrutGlobal,
                            "Remise":this.RemiseGlobal,
                            "Total HT":this.TotalHTGlobal,
                            "TVAt":this.TVAtGlobal,
                            "Transport HT":this.TransportHTGlobal,
                            "TVA Port":this.TVAPortGlobal,
                            "Total TTC ":this.TotalTTCGlobal,
                    },
                    "Table TVA" :this.Table_TVA
                }
                this.$store.commit('GetArticles',InformationArtices)
                this.DataIsSubmited = true;
            },
            '$store.state.Réinitialiser': function() {
                this.$forceUpdate();
                console.log('reinitaliser from articles')
            }

    },
  mounted(){
  }
  
};
</script>
