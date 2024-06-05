import { defineComponent, onMounted, ref } from 'vue'

const HomeComponent = defineComponent({
  name: 'HomeComponent',
  setup() {
    const fileInput = ref<HTMLInputElement | null>(null)
    const loading = ref(false)
    const file = ref(null) as any
    const imgSelected = ref('')
    const enabledUpload = ref(false)
    const urlImgNew = ref('')
    const snackbar = ref(false)
    const textSnackbar = ref('')
    const timeout = ref(4000)

    onMounted(() => {
      imgSelected.value = 'img/img-demo.svg'
    })

    const reserve = () => {
      loading.value = true
      setTimeout(() => (loading.value = false), 2000)
    }

    const clickToInputFile = () => {
      fileInput.value?.click()
      if (fileInput.value) {
        fileInput.value.onchange = () => {
          if (fileInput.value?.files) {
            //primero validamos que pese menos de 2MB
            const size = fileInput.value.files[0].size
            if (size > 2000000) {
              urlImgNew.value = ''
              fileInput.value.value = '' // Reset the input file
              enabledUpload.value = false
              imgSelected.value = 'img/img-demo.svg'
              textSnackbar.value = 'No se permiten archivos mayores a 2MB'
              snackbar.value = true
            } else {
              file.value = fileInput.value.files[0] // Assign the files property of fileInput.value to file.value
              enabledUpload.value = true
              if (file.value) {
                imgSelected.value = URL.createObjectURL(file.value)
              }
            }
          }
        }
      }
    }

    // funcion uploadFile para simular la subida de un archivo
    const uploadFile = async () => {
      if (file.value) {
        loading.value = true

        setTimeout(() => {
          loading.value = false
          enabledUpload.value = false
          urlImgNew.value = imgSelected.value
        }, 2000)
      }
    }

    const copyToClipboard = () => {
      const el = document.createElement('textarea')
      el.value = urlImgNew.value
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      textSnackbar.value = 'URL copiado al portapapeles!'
      snackbar.value = true
    }

    return {
      fileInput,
      loading,
      file,
      reserve,
      clickToInputFile,
      uploadFile,
      imgSelected,
      enabledUpload,
      urlImgNew,
      copyToClipboard,
      snackbar,
      textSnackbar,
      timeout
    }
  }
})

export default HomeComponent
