/**
 * @Author: Created by wanzhichao on 2016/11/30.
 * @Mail: wanzhichao@jd.com
 */
import Vue from 'vue'
import * as types from '../mutation-type'
import URLS from '../../config/urls'
// init state
const state = {
  homeData: {
    rank: '',
    modify: '',
    repeat: '',
    comment: '',
    strategies: []
  },
  simulateLists: [],
  strategies: {
    java: {
      normalStrategy: [],
      needPc: []
    },
    python: {
      normalStrategy: [],
      needPc: []
    }
  }
}

// getters
const getters = {
  homeInfo (state) {
    return state.homeData
  },
  simulateLists (state) {
    return state.simulateLists
  },
  strategiesList (state) {
    return state.strategies
  }
}

// actions
const actions = {
  getHomeData ({commit}) {
    Vue.http.get(URLS.HOME_URL).then((response) => {
      commit(types.GET_HOME_INFO, response.body)
    }, (response) => {
    })
  },
  getSimulates ({commit}) {
    Vue.http.get(URLS.SIMULATE_URL).then((response) => {
      commit(types.GET_SIMULATES, response.body)
    }, (response) => {
    })
  },
  getStrategies ({commit}) {
    Vue.http.get(URLS.STRATEGY_URL).then((response) => {
      commit(types.GET_STRATEGIES, response.body)
    }, (response) => {
    })
  }
}

// mutations
const mutations = {
  [types.GET_HOME_INFO] (state, ajaxBody) {
    state.homeData = ajaxBody
  },
  [types.GET_SIMULATES] (state, ajaxBody) {
    state.simulateLists = ajaxBody.simulateLists
  },
  [types.GET_STRATEGIES] (state, ajaxBody) {
    state.strategies = ajaxBody
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
