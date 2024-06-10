import { defineComponent, onMounted, ref } from 'vue'
import UploadImageComponent from './components/upload-image/UploadImageComponent.vue'
import ImageHistoryComponent from './components/image-history/ImageHistoryComponent.vue'
import axiosClient from '@/core/service/axiosClient'
import type { AxiosResponse } from 'axios'
import type ApiResponseBaseInterface from '@/shared/interfaces/api-base.interface'

const HomeComponent = defineComponent({
  name: 'HomeComponent',
  components: { UploadImageComponent, ImageHistoryComponent },
  setup() {
    const images = ref([])

    onMounted(() => {
      searchLastImages()
    })

    const searchLastImages = () => {
      axiosClient.get('image/list').then((response: AxiosResponse<ApiResponseBaseInterface>) => {
        images.value = response.data.body
      })
    }

    const handleNotify = () => {
      images.value = []
      searchLastImages()
    }

    return {
      images,
      handleNotify
    }
  }
})

export default HomeComponent
