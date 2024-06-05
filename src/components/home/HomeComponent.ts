import { defineComponent, ref } from 'vue'

const HomeComponent = defineComponent({
  name: 'HomeComponent',
  setup() {
    const fileInput = ref<HTMLInputElement | null>(null)
    let loading = ref(false)
    let file = ref(null)
    const rules = [
      (value: any) => {
        return (
          !value ||
          !value.length ||
          value[0].size < 2000000 ||
          'Avatar size should be less than 2 MB!'
        )
      }
    ]

    const reserve = () => {
      loading.value = true

      setTimeout(() => (loading.value = false), 2000)
    }

    const clickToInputFile = () => {
      console.log(fileInput.value);
      
      fileInput.value?.click()
    }

    // funcion uploadFile para simular la subida de un archivo
    const uploadFile = async (file: any) => {
      console.log(file);
      
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('https://via.placeholder.com/150')
        }, 2000)
      })
    }



    return {
      fileInput,
      loading,
      file,
      rules,
      reserve,
      clickToInputFile,
      uploadFile
    }
  }
})

export default HomeComponent
