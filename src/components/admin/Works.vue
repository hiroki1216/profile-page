<script setup>
import Input from '@/components/common/Input.vue'
import Textarea from '@/components/common/Textarea.vue'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import useWork from '../../composable/useWork.ts'
const labelProjectName = 'プロジェクト名'
const labelTechnology = '使用技術'
const labelIntroduction = 'プロジェクト詳細'
const labelResponsible = '担当領域'
const labelAcquiredSkill = '身につけたスキル'
const submitType = 'submit'
const submitName = '保存'
const work = useWork();
const onUpdateProjectName  = (value)=>{
    work.value.projectName = value.target.value;
}
const onUpdateTechnology = (value)=>{
    work.value.technology = value.target.value;
}
const onUpdateIntroduction = (value)=>{
    work.value.introduction = value.target.value;
}
const onUpdateResponsible  = (value)=>{
    work.value.responsible = value.target.value;
}
const onUpdateAcquiredSkill = (value)=>{
    work.value.acquiredSkill = value.target.value;
}
</script>
<template>
    <body>
        <h2>Works編集画面</h2>
        <form action="" method="post">
            <Input 
                :label-name="labelProjectName" 
                :input-value="work.projectName"
                @input = "onUpdateProjectName"
            ></Input>
            <Input 
                :label-name="labelTechnology" 
                :input-value="work.technology"
                @input = "onUpdateTechnology"
            ></Input>
            <Textarea 
                :label-name="labelIntroduction" 
                :textarea-value="work.introduction"
                @input = "onUpdateIntroduction"
            ></Textarea>
            <Input 
                :label-name="labelResponsible" 
                :input-value="work.responsible"
                @input = "onUpdateResponsible"
            ></Input>
            <Input 
                :label-name="labelAcquiredSkill" 
                :input-value="work.acquiredSkill"
                @input = "onUpdateAcquiredSkill"
            ></Input>
            <PrimaryButton 
                :type="submitType" 
                :name="submitName" 
            ></PrimaryButton>
        </form>
    </body>
</template>
<style scoped>
    body{
        max-width: 1280px;
        margin: 0 auto;
    }
    h2{
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-decoration:underline;
    }
</style>