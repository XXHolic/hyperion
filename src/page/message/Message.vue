<template>
  <div class="module-container message df flex-column">
    <Header title="Message"></Header>
    <div class="flex1">{{ msg }}</div>

  </div>
</template>

<script>
/* eslint-disable */
import Header from "../../components/Header";

export default {
  name: 'Message',
  components:{
    Header
  },
  data() {
    return {
      msg: 'Message',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
