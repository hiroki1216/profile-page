<script setup>
defineProps({
    labelName: String,
    inputValue: String,
})
const emits = defineEmits(
    ['input']
)
const updateInput = (value) =>{
    emits('input', value);
}
</script>
<template>
    <div class="container">
        <label for="name1">{{ labelName }}</label>
        <br>
        <input @input="updateInput" type="text" name="name" id="name1" :value="inputValue">
    </div>
</template>
<style scoped>
input{
    width:50%;
    height:2rem;
    margin-bottom: 2rem;
}
label{
    margin-bottom: 1rem;
}
</style>