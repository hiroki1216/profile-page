<script setup>
defineProps({
    type: String,
    name: String,
})
</script>
<template>
  <button type="type">{{ name }}</button>
</template>
<style scoped>
button {
  background-color: #007bff;
  color: #fff; 
  border: none; 
  padding: 10px 20px;
  border-radius: 5px; 
}
button:hover {
  background-color: #0056b3; /* ホバー時の背景色 */
  color: #f0f0f0; /* ホバー時のテキスト色 */
}
</style>