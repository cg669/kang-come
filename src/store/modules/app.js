// import Cookies from 'js-cookie'

// const app = {
//   state: {
//     sidebar: {
//       opened: !+Cookies.get('sidebarStatus')
//     },
//     route: 'home',
//     isConfirmOrderStatus:false,
//     inventoryCard: {}
//   },
//   mutations: {
//     TOGGLE_SIDEBAR: state => {
//       if (state.sidebar.opened) {
//         Cookies.set('sidebarStatus', 1)
//       } else {
//         Cookies.set('sidebarStatus', 0)
//       }
//       state.sidebar.opened = !state.sidebar.opened
//     },
//     ACTIVE_ROUTER: (state, route) => {
//       state.route = route
//     },
//     SET_CONFIRM_ORDER_STATUS: (state, bool )=> {
//       state.isConfirmOrderStatus = bool
//     },
//     SET_INVENTORY_CARD: (state, cardInfo) => {
//       state.inventoryCard = cardInfo
//     }
//   },
//   actions: {
//     ToggleSideBar: ({ commit }) => {
//       commit('TOGGLE_SIDEBAR')
//     },
//     ActiveRouter: ({ commit }, route) => {
//       commit('ACTIVE_ROUTER', route)
//     },
//     SetConfirmOrderStatus: ({ commit }, bool) => {
//       commit('SET_CONFIRM_ORDER_STATUS',bool)
//     },
//     SetInventoryCard: ({ commit }, cardInfo) => {
//       commit('SET_INVENTORY_CARD',cardInfo)
//     }
//   }
// }

// export default app