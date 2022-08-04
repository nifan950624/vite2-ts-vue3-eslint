<script setup>

</script>

<template>
  <div class="left-container">
    <dv-decoration7
      class="title"
      :color="['#5bbef0']"
    >
      废气管理
    </dv-decoration7>
    <div class="flex-box main">
      <div class="flex-box cell-1">
        <dv-border-box4 :color="['#5bbef0','#fff']" />
      </div>    
      <div class="flex-box cell-2">
        <dv-border-box-13 :color="['#5bbef0']" />
      </div>    
      <div class="flex-box cell-3">
        <dv-border-box4
          :color="['#5bbef0','#fff']"
          :reverse="true"
        />
      </div>    
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-container {
    display: flex;
    flex-direction: column;

    .title {
        height: 28px;
        font-size: 24px;
    }

    .main {
        display: flex;
        flex-direction: column;
    }
}

.flex-box {
    flex: 1;
}
</style>