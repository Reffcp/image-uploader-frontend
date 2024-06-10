import type ImageDataInterface from '@/shared/interfaces/image-data.interface'
import { defineComponent, ref, type PropType } from 'vue'

const ImageHistoryComponent = defineComponent({
  name: 'ImageHistoryComponent',
  props: {
    data: {
      type: Object as PropType<ImageDataInterface>,
      required: true
    }
  },
  setup(props) {
    const show = ref(false)
    const dataImage = ref(props.data)
    const snackbar = ref(false)
    const textSnackbar = ref('')
    const timeout = ref(4000)

    const copyToClipboard = () => {
      const el = document.createElement('textarea')
      el.value = dataImage.value.imagen_url
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      textSnackbar.value = 'URL copiado al portapapeles!'
      snackbar.value = true
    }

    const convertToKylobytesOrMegabytes = (size: number) => {
      if (size < 1024) {
        return size + 'B'
      } else if (size < 1024 * 1024) {
        return (size / 1024).toFixed(1) + 'KB'
      } else {
        return (size / (1024 * 1024)).toFixed(1) + 'MB'
      }
    }

    const convertDate = (date: string) => {
      const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es-ES', options)
    }

    return {
      show,
      dataImage,
      copyToClipboard,
      timeout,
      snackbar,
      textSnackbar,
      convertToKylobytesOrMegabytes,
      convertDate
    }
  }
})

export default ImageHistoryComponent
