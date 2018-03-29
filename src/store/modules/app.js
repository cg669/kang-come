import Cookies from 'js-cookie'

const app = {
  state: {
    // sidebar: {
      
    // },
    
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    ActiveRouter: ({ commit }, route) => {
      commit('ACTIVE_ROUTER', route)
    }
  }
}

export default app