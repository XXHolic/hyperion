<template>
  <div class="module-container address-book df flex-column">
    <Header v-bind:title="msg"></Header>
    <div class="flex1">{{ msg }}</div>

  </div>
</template>

<script>
/* eslint-disable */
import Header from "../../components/Header";

export default {
  name: 'AddressBook',
  components:{
    Header
  },
  data() {
    return {
      msg: '通讯录',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
