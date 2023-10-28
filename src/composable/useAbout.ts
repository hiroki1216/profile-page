import {ref, Ref} from 'vue';
import { About } from '../types/about';
export default function useAbout(){
  const about: Ref<About> = ref({
    title: "",
    certification: "",
    introduction: "",
    speciality: "",
    strength: "",
  })
  return about;
}