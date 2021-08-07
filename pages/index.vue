<template>
  <div class="container">
    <div class="home-page">
      <TheHeader />
      <NuxtLogo />
      <h2 class="counter" :style="{ color: this.colorCode}">
        {{ $store.state.counter }}
      </h2>
      <div>
        {{ $store.state.counter }}
        <sup>2</sup> =
        {{ $store.getters.getSquaredCounter }}
      </div>

      <div>
        <button @click="$store.dispatch('increaseCounter')" :style="{color :colorCode}">+</button>
        <button @click="$store.dispatch('decreaseCounter')" :style="{color: colorCode}">-</button>
      </div>
      <input type="text" v-model="colorCode" placeholder="Enter Counter Color!!">
    </div>
  </div>
</template>

<script>
import NuxtLogo from "@/components/NuxtLogo.vue";
import TheHeader from "@/components/Header.vue";
import axios from "axios";
export default {
  computed: {
    colorCode:{
      get() {
        return this.$store.state.colorCode;
      },
      set( newValue) {
        this.$store.commit('setColorCode', newValue);
      }
    }
  },
  components: {
    NuxtLogo,
    TheHeader
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
.container {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200px;
}
.home-page {
  justify-content: center;
  text-align: center;
  box-shadow: 3px;
  width: 100%;
  height: 200px;
}
button {
  cursor: pointer;
  display: inline-block;
  background: rgb(39, 26, 26);
  color: white;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
  margin: 30px;
}

button:focus {
  outline: none;
}

button:hover {
  transform: scale(0.98);
}
html,
body {
  font-family: Arial, Helvetica, sans-serif;
}
.counter {
  margin: 20px;
}
</style>
