
<template>
  <v-menu
    v-model="dateMenu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    full-width
 
  >
    <template v-slot:activator="{ on }">
        <!-- <p>from</p> -->
      <v-text-field
        :label="label"
        v-icon="mdi-calendar-month"
        readonly
        hide-details
        :value="dateValue"
        v-on="on"
        @focus="focusDate"
        @blur="blurDate"
      ></v-text-field>
    </template>
    <v-date-picker locale="en-in" v-model="dateValue" no-title @input="dateMenu = false"></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      dateMenu: false,
      dateValue: null
    };
  },
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    focusDate() {
      setTimeout(() => {
        if (!this.dateMenu) {
          this.dateMenu = true;
        }
      }, 200);
    },
    blurDate() {
      setTimeout(() => {
        if (this.dateMenu) {
          this.dateMenu = false;
        }
      }, 200);
    }
  }
};
</script>