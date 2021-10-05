<template>
  <div class="PopupNewClient PopupNewCompte">
    <div class="PopupNewClient__title">
      <h6>Nouveau transfert</h6>
      <svg
      @click="$emit('RemivePopupTransfert')"
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
        <div class="Date_De_A">
            <div class="InputFaild">
                <h6>Date de transfert* :</h6>
                <input type="date" v-model="DateTransfert">
            </div>
            <div class="InputFaild">
                <h6>De* :</h6>
                <select v-model="De">
                    <option value="Veuillez sélectionner">Veuillez sélectionner</option>
                    <option v-for="de in De_Data" :key="de" :value="de">{{de}}</option>
                </select>
                <span v-if="Submit && De == 'Veuillez sélectionner'"  class="MessageErrorFiled">Ce champ est obligatoire.</span>
            </div>
            <div class="InputFaild">
                <h6>A* :</h6>
                <select v-model="A">
                    <option value="Veuillez sélectionner">Veuillez sélectionner</option>
                    <option v-for="A in A_Data" :key="A" :value="A">{{A}}</option>
                </select>
                <span  v-if="Submit && A == 'Veuillez sélectionner'"  class="MessageErrorFiled">Ce champ est obligatoire.</span>
            </div>

        </div>
        <div class="Montant_Mode_Référence">
            <div class="InputFaild PriceZone">
                <h6>Montant* :</h6>
                <div class="Price">
                    <input type="text" v-model="Montant">
                    <input type="text" placeholder="MAD" disabled>
                </div>
            </div>
            <div class="InputFaild Mode">
                <h6>Mode* :</h6>
                <select v-model="Mode">
                    <option value="Veuillez Séle">Veuillez Séle</option>
                    <option v-for="Mode in Mode_Data" :key="Mode" :value="Mode">{{Mode}}</option>
                </select>
                <span  v-if="Submit && Mode == 'Veuillez Séle'"  class="MessageErrorFiled">Ce champ est obligatoire.</span>
            </div>
            <div class="InputFaild">
                <h6>Référence* :</h6>
                <input type="text" v-model="Réference">
            </div>
        </div>
        <span>* champs obligatoire</span>
    </div>
    <div class="PopupNewClient__btns">
      <button class="Btn__Firmer" @click="$emit('RemivePopupTransfert')">
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
  emits: ["RemovePopupNewCompte"],
  data: () => ({
    Submit: false,
    DateTransfert:'',
    De:'Veuillez sélectionner',
    A:'Veuillez sélectionner',
    Montant:'',
    Mode:'Veuillez Séle',
    Réference:'',
    De_Data:["Caisse",'Banque','Affacturage',`Compte courant d'associés`,'caisse kpub'],
    A_Data:["Caisse",'Banque','Affacturage',`Compte courant d'associés`,'caisse kpub'],
    Mode_Data:["Virement",'Chèque','Traite','Espèces','Affacturage','Autres']

  }),
  methods: {
    EnregistrerNewCompte() {
      this.Submit = true;
      if (this.De != "Veuillez sélectionner" && this.A != "Veuillez sélectionner"  && this.Mode != "Veuillez Séle" ) {
        let NewTransfert = {
                Date:this.DateTransfert,
                De:this.De,
                A:this.A,
                Montant:this.Montant,
                Mode:this.Mode,
                Référence:this.Réference,
                Etat:"En attente"
        };
        this.$emit("NewTransfert", NewTransfert);
        /// AXIOS TO INSERT DATA HER
      } else {
        console.log("something error");
      }
    },
  },
};
</script>
