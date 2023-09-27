<template>
  <div>
    <div class="counter">
      <h2 :style="{color:$store.state.textColor}">{{ $store.state.counter }}</h2>
    </div>
    <div class="square">
      {{ $store.state.counter }}
      <sup>{{ $store.state.counter }}</sup>
      = {{ $store.getters.counterSquare }}
    </div>
    <div class="btn">
      <button @click="$store.dispatch('increaseCounter')" class="btn">+</button>
      <button @click="$store.dispatch('decreaseCounter')" class="btn">-</button>
    </div>
    <div class="textFiled">
      <input type="text" v-model="colorCode"/>
    </div>
  </div> 

  <!-- <RouterView /> -->
</template>

<script>
export default{
  name:'App',
  computed:{
    colorCode:{
      get(val){
        return this.$store.state.textColor
      },
      set(newValue) {
        this.$store.dispatch('setTextColorAction',newValue)
      }
    }
  }
}
</script>

<style scoped>
.counter {
  font-size: 4rem;
}

.button {
  display: flex;
}
.btn {
  padding: 0.5rem;
  margin-right: 4px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
