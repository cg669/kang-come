// import Cookies from 'js-cookie'
import * as types from '../types'
const app = {
  state: {
    activeNav : '首页'
    
  },
  mutations: {
    SET_ACTIVE_NAV: (state, nav) => {
      state.activeNav = nav
    }
  },
  actions: {
    SetActiveNav: ({ commit }, nav) => {
      commit(types.SET_ACTIVE_NAV, nav)
    }
  }
}

export default app