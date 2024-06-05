import { defineComponent, ref } from 'vue'

const ImageHistoryComponent = defineComponent({
  name: 'ImageHistoryComponent',
  setup() {
    const show = ref(false)

    return {
      show
    }
  }
})

export default ImageHistoryComponent
