<template>

        <div class="RemarqueSection">
            <div class="RemarqueSection_lines">
                <i class="fas fa-comment-dots"></i>
                <h4>Remarque</h4>
            </div>
            <div class="RemarqueSectionInput">
                    <textarea v-model="Remarque" placeholder="Your Reamarque"></textarea>
            </div>
        </div>
</template>



<script>
    export default {
    name: 'Remarque',     
     data: () => ({ 
         Remarque:''
    }),
    emits:[],
  }
    
</script>
