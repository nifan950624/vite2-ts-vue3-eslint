<template>
  <h1>{{ msg }}</h1>
  <el-button type="primary" @click="inCrement"> count is: {{ count }}</el-button>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '../store';

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const store = useStore(key);
    const count = computed(() => store.state.count);

    return {
      count,
      inCrement: () => store.commit('increment'),
    };
  },
});
</script>
