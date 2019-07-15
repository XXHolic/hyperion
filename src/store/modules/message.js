/* eslint-disable */
import api from "../../api/api";

// initial state
const state = {
  data:null,
  msg:'X 信'
};

// getters
const getters = {}

// actions
const actions = {
  async getData({ commit }) {
     let backData = await api.getJSONData();
     commit("setData", backData.data);
  }
};

// mutations
const mutations = {
  setData(state, data) {
    state.data = data.code;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}