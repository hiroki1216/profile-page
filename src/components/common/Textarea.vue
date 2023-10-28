<script setup>
defineProps({
  labelName: String,
  textareaValue: String,
})
</script>
<template>
  <div class="container">
    <label for="textarea">{{ labelName }}</label>
    <br>
    <textarea id="textarea">{{ textareaValue }}</textarea>
  </div>
</template>
<style scoped>
.container{

}
textarea{
  width: 50%;
  height: 6rem;
  margin-bottom: 2rem;
}
label{
  margin-bottom: 1rem;
}
</style>