import {ref, Ref} from 'vue';
import { Work } from '../types/work';
export default function useAbout(){
  const work: Ref<Work> = ref({
    projectName: "",
    technology: "",
    introduction: "",
    responsible: "",
    acquiredSkill: "",
  })
  return work;
}