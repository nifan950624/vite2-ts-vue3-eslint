<template>
  <el-container>
    <el-header>
      <el-menu
        router
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/">
          处理中心
        </el-menu-item>
        <el-menu-item index="/detail">
          消息中心
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const activeIndex = ref('/');

    setTimeout(() => {
      activeIndex.value = route.path;
    }, 300);

    return {
      activeIndex,
    };
  },
});
</script>

<style scoped lang="scss"></style>
