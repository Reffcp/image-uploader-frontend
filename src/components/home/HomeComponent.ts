import { defineComponent } from 'vue'
import UploadImageComponent from './components/upload-image/UploadImageComponent.vue'
import ImageHistoryComponent from './components/image-history/ImageHistoryComponent.vue'

const HomeComponent = defineComponent({
  name: 'HomeComponent',
  components: { UploadImageComponent, ImageHistoryComponent },
  setup() {
    return {}
  }
})

export default HomeComponent
