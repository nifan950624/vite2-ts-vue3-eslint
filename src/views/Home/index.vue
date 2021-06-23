<template>
  <HelloWorld></HelloWorld>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import HelloWorld from 'components/HelloWorld.vue';

export default defineComponent({
  components: { HelloWorld },
  setup() {
    const listRef = ref<null | Ref>(null);
    const isShow = ref(false);
    const handleClick = () => {
      isShow.value = !isShow.value;
    };

    return {
      isShow,
      listRef,
      handleClick,
    };
  },
});
</script>
<style lang="scss" scoped></style>
