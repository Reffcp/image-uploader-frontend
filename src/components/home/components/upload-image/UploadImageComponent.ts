import { defineComponent, onMounted, ref } from 'vue'
import FormData from 'form-data'
import type ApiResponseBaseInterface from '@/shared/interfaces/api-base.interface'
import axiosClient from '@/core/service/axiosClient'
import type { AxiosResponse } from 'axios'

const UploadImageComponent = defineComponent({
  name: 'UploadImageComponent',
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

    const upload = () => {
      loading.value = true
      const form = new FormData()
      form.append('image', file.value as File)

      axiosClient
        .post('image/upload', form)
        .then((response: AxiosResponse<ApiResponseBaseInterface>) => {
          loading.value = false
          urlImgNew.value = response.data.body.imagen_url
          enabledUpload.value = false
        })
        .catch((error) => {
          loading.value = false
          console.error('Error uploading image:', error)
        })
    }

    const clickToInputFile = () => {
      fileInput.value?.click()
      if (fileInput.value) {
        fileInput.value.onchange = () => {
          if (fileInput.value?.files) {
            //primero validamos que pese menos de 2MB
            const size = fileInput.value.files[0].size
            if (size > import.meta.env.VITE_MAX_SIZE_FILE) {
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
      upload,
      clickToInputFile,
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

export default UploadImageComponent
