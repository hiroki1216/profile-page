<script setup>
import Input from '@/components/common/Input.vue'
import Textarea from '@/components/common/Textarea.vue'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import useAbout from '../../composable/useAbout.ts'
const labelTitle = 'タイトル'
const labelCertification = '資格'
const labelIntroduction = '自己紹介'
const labelSpeciality = '専門分野'
const labelStrength = 'アピールポイント'
const submitType = 'submit'
const submitName = '保存'
const about = useAbout();
const onUpdateTitle = (value)=>{
    about.value.title = value.target.value;
}
const onUpdateCertification = (value)=>{
    about.value.certification = value.target.value;
}
const onUpdateIntroduction = (value)=>{
    about.value.introduction = value.target.value;
}
const onUpdateSpeciality = (value)=>{
    about.value.speciality = value.target.value;
}
const onUpdateStrength = (value)=>{
    about.value.strength = value.target.value;
}
</script>
<template>
    <body>
        <h2>About編集画面</h2>
        <form action="" method="post">
            <Input 
                :label-name="labelTitle" 
                :input-value="about.title"
                @input = "onUpdateTitle"
            ></Input>
            <Input 
                :label-name="labelCertification" 
                :input-value="about.certification"
                @input = "onUpdateCertification"
            ></Input>
            <Textarea 
                :label-name="labelIntroduction" 
                :textarea-value="about.introduction"
                @input = "onUpdateIntroduction"
            ></Textarea>
            <Input 
                :label-name="labelSpeciality" 
                :input-value="about.speciality"
                @input = "onUpdateSpeciality"
            ></Input>
            <Textarea 
                :label-name="labelStrength" 
                :textarea-value="about.strength"
                @input = "onUpdateStrength"
            ></Textarea>
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