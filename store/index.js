import axios from 'axios'
export const state = () => ({
         counter: 0,
         colorCode: "blue",
       });

export const mutations = {
    increaseCounter(state, randomnumber) {
      state.counter += randomnumber;
    },
    decreaseCounter(state, randomnumber) {
      state.counter -= randomnumber;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    }
  }
export const actions = {
   increaseCounter({ commit }) {
     axios
         .get(
           "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
         )
         .then(res => commit("increaseCounter", res.data))
         .catch(err => console.log(err));
     },
     decreaseCounter({ commit }) {
       axios
         .get(
           "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
         )
         .then(res => commit("decreaseCounter", res.data))
         .catch(err => console.log(err));
     },
     setColorCode({ commit },{ newValue }) {
      commit("setColorCode", newValue);
     }
};

export const getters = {
  getSquaredCounter( state ) {
    return state.counter * state.counter;
  }
}