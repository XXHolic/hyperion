<template>
  <div class="module-container message df flex-column">
    <Header v-bind:title="msg"></Header>
    <div class="flex1">{{ msg }}</div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from "vuex";
import Header from "../../components/Header";
export default {
  name: "Message",
  components: {
    Header
  },
  computed:mapState('message',{
    msg: state => state.msg,
    data: state => state.data,
  })
  ,
  // data() {
  //   return {
  //     msg: 's',
  //   };
  // },
  created() {
    this.$store.dispatch("message/getData");
  }
  // methods: mapActions('message',['getData'])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
