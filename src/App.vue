<script setup>
import Users from './components/Users.vue'
import { nextTick, ref } from 'vue'
const count = ref(1);
const increment = async ()=> {
  count.value++
  await nextTick();
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <main>
    <Users></Users>
    <p>{{ count }}</p>
    <button @click="increment">カウントアップ</button>
  </main>
</template>

<style scoped>
header {
  /* line-height: 1.5; */
}

.logo {
  /* display: block; */
  /* margin: 0 auto 2rem; */
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    /* display: flex; */
    /* place-items: flex-start; */
    /* flex-wrap: wrap; */
  }
}
</style>
