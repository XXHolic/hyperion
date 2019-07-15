/* eslint-disable */
const axios = require("axios");

export default {
  getJSONData() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://xxholic.github.io/lab/data/hemeraData.json")
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
