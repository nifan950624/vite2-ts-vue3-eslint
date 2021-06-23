<template>
  <div class="detail">
    {{ book.title }}
    <el-button class="btn" type="danger" @click="onClick">{{ readersNumber }}</el-button>
  </div>
</template>
<script lang="ts">
import { h, ref, reactive } from 'vue';
interface Book {
  title: string;
}

export default {
  setup() {
    const readersNumber = ref<number>(0);
    const book = reactive<Book>({ title: 'Vue 3 Guide' });
    // 请注意这里我们需要显式调用 ref 的 value
    const onClick = () => {
      readersNumber.value = readersNumber.value + 1;
    };

    return {
      book,
      onClick,
      readersNumber,
    };
  },
};
</script>
<style lang="scss"></style>
