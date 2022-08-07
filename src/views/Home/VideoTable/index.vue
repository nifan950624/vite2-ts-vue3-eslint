<script lang="ts" setup>
import {reactive,inject, Ref} from "vue"
import CellBox from '@/components/CellBox/index.vue'
import {ElMessage} from "element-plus";
import {Map} from "mapbox-gl";

const mapBoxRef = inject<Ref<Map>>('mapBox')
const map = (mapBoxRef as NoUndefinedField<Ref<Map>>).value


const config = reactive({
  headerBGC: 'rgba(120, 173, 171, 0.1)',
  oddRowBGC: 'rgba(120, 173, 171, 0)',
  evenRowBGC: 'rgba(120, 173, 171, 0)',
  header: ['区域', '设备状态', '责任人'],
  data: [
    ['<span style="color:#37a2da;">区域A</span>', '<span style="color:green;">在线</span>', 'xxx'],
    ['<span style="color:#37a2da;">区域B</span>', '<span style="color:grey;">离线</span>', 'xxx'],
    ['<span style="color:#37a2da;">区域C</span>', '<span style="color:green;">在线</span>', 'xxx'],
    ['<span style="color:#37a2da;">区域D</span>', '<span style="color:red;">故障</span>', 'xxx'],
    ['<span style="color:#37a2da;">区域E</span>', '<span style="color:green;">在线</span>', 'xxx'],
    ['<span style="color:#37a2da;">区域F</span>', '<span style="color:green;">在线</span>', 'xxx'],
  ],
  index: false,
  align: ['center'],
})

const handleTableClick = () => {
  map.flyTo({center: [114.371059, 31.620799]})
  ElMessage.warning('视频播放开发中...')
}

</script>

<template>
  <div class="table-wrapper">
    <cell-box height="100%" title="重点区域视频监控">
      <dv-scroll-board
        :config="config"
        style="width:100%;height:100%"
        @click="handleTableClick"
      />
    </cell-box>
    <div />
  </div>
</template>

<style lang="scss">
.table-wrapper {
  width: 100%;
  height: 100%;
}

::v-deep .el-table--scrollable-x .el-table__body-wrapper {
  overflow-x: hidden;
}

</style>
