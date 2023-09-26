import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        counter:0
    },

    mutations:{
        increaseCounter(state, res){
            state.counter += res
          },
          decreaseCounter(state, res){
            state.counter -= res
          }
    },

    // asy code only 
    actions:{
        increaseCounter({commit}){
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
            .then(res => {
                commit('increaseCounter',res.data)
            })
          },

          decreaseCounter({commit}){
            axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
            .then(res => {
                commit('decreaseCounter',res.data)
            })
          }
    },

    getters: {

    },

    modules:{

    }
})

export default store
