import { ref, onMounted, onUnmounted, Ref } from 'vue';

// 判断是否点击当前DOM元素的外部区域
const useClickOutside = (elementRef: Ref<null | HTMLElement>): Ref => {
  const isClickOutSide = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutSide.value = false;
      } else {
        isClickOutSide.value = true;
      }
    }
  };
  onMounted(() => {
    document.addEventListener('click', handler);
  });
  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });
  return isClickOutSide;
};

export default useClickOutside;
