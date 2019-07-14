<template>
  <div class="module-container find df flex-column">
    <Header title="Find"></Header>
    <div class="flex1">{{ msg }}</div>

  </div>
</template>

<script>
/* eslint-disable */
import Header from "../../components/Header";

export default {
  name: 'Find',
  components:{
    Header
  },
  data() {
    return {
      msg: 'Find',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
