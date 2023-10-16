<script setup>
import { nextTick, ref } from 'vue'
import Header from './pages/Header.vue'
const count = ref(1);
const increment = async ()=> {
  count.value++
  await nextTick();
}
</script>

<template>
  <Header></Header>
  <main>
    <p>{{ count }}</p>
    <button @click="increment">カウントアップ</button>
  </main>
</template>

<style scoped>
</style>
