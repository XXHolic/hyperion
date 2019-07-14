<template>
  <div class="module-container mine df flex-column">
    <Header title="Mine"></Header>
    <div class="flex1">{{ msg }}</div>

  </div>
</template>

<script>
/* eslint-disable */
import Header from "../../components/Header";

export default {
  name: 'Mine',
  components:{
    Header
  },
  data() {
    return {
      msg: 'Mine',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
