<template>
  <div class="module-container message df flex-column">
    <Header v-bind:title="msg"></Header>
    <div class="flex1">{{ msg }}</div>

  </div>
</template>

<script>
/* eslint-disable */
import Header from "../../components/Header";
const axios = require('axios');

export default {
  name: 'Message',
  components:{
    Header
  },
  data() {
    return {
      msg: 'X 信',
      data: null
    };
  },
  async created() {
    let backData = await this.getJSONData("https://xxholic.github.io/lab/data/hemeraData.json");
    this.data = backData;
    console.info('this',this);
    console.info('this.data',this.data);
    console.info('jsonData',backData);
  },
  methods: {
    getJSONData(url) {
      return new Promise((resolve,reject)=>{
        axios.get(url).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
