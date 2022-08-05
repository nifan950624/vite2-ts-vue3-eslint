<script setup lang="ts">
import { Map as MapInterface } from "mapbox-gl"
import Model from '@/components/Model/index.vue'
import Map from '../Map/index.vue'
import { ref, provide, Ref } from 'vue'

type MapBox = MapInterface | null

const mapBox = ref<MapBox>(null)
const primaryColor = ref<string>('#138b72')
// 供给 mapBox
provide<Ref<MapBox>>('mapBox', mapBox)
provide<Ref<string>>('primaryColor', primaryColor)

const onMapLoaded = (map: MapInterface) => {
  mapBox.value = map
}
</script>
<template>
  <div class="layout-container">
    <!--    <Map-->
    <!--      class="map"-->
    <!--      @loaded="onMapLoaded"-->
    <!--    />-->
    <div
      class="content"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .map {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .content {
        position: relative;
        z-index: 1;
    }
}
</style>
