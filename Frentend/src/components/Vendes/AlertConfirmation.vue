<template>

        <div class="AlertConfirmation">
            <p>Confirmation mise à jour</p>
            <p class="Confirmation__text">Confirmation mise à jour Souhaitez-vous mettre à jour la facture avec les informations du fiche client ?</p>
            <div class="btns">
                <button class="Btn__Annuer" @click="$emit('AlertAnnuler')">Annuler</button>
                <button class="Btn__Confirmer" @click="$emit('ConfirmationAlert')">Confirmer</button>
            </div>
        </div>
</template>



<script>
    export default {
    name: 'AlertConfirmation',     
     data: () => ({ 
    }),
    emits:['AlertAnnuler','ConfirmationAlert'],

    

  }
    
</script>
