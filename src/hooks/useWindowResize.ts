import {onMounted, onUnmounted} from 'vue'

const useWindowResize = (handler: (e?: UIEvent) => void): void => {
  onMounted(() => {
    window.addEventListener('resize', handler)
  })

  onUnmounted(() => {
    window.addEventListener('resize', handler)
  })
}

export default useWindowResize
