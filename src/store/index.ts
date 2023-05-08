import { createStore } from 'vuex'
import { RootState } from './Types'
import { basket } from './basket'
import { history } from './history'








export default createStore<RootState>({
  state: {
    version: '0.1'
  },
  modules: {
    basket,
    history
  }
})
