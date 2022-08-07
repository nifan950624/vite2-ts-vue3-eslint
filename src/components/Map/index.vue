<script setup lang="ts">
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import { defaultConfig } from "./config";
import { ref, onMounted } from "vue";
import {Loading} from "@kjgl77/datav-vue3";
import {ElLoading} from "element-plus";

const props = defineProps<{ options?: Omit<mapboxgl.MapboxOptions, 'container'> }>()
const emit = defineEmits<{
  (e: 'loaded', map: mapboxgl.Map): void
}>()

const mapBox = ref<HTMLElement | null>(null)

mapboxgl.accessToken = defaultConfig.accessToken
const center: mapboxgl.LngLatLike = [114.371059, 30.620799];

onMounted(() => {
  const loading = ElLoading.service({
    lock: true,
    text: '地图加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  const map = new mapboxgl.Map({
    container: mapBox.value as HTMLElement,
    style: "mapbox://styles/nifan950624/cl6ewbv6m002n14pg2tisqwst",
    zoom: 17.5,
    center,
    pitch: 60,
    ...props.options
  });
  const language = new MapboxLanguage({
    defaultLanguage: "zh-Hans"
  });
  map.addControl(language);

  map.on("load", function () {
    let layers = map.getStyle().layers;

    let labelLayerId;
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === "symbol" && (layers[i] as any).layout["text-field"]) {
        labelLayerId = layers[i].id;
        break;
      }
    }

    // 添加3D图层
    map.addLayer(
      {
        id: "3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 15,
        paint: {
          "fill-extrusion-color": "#aaa",

          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "height"]
          ],
          "fill-extrusion-base": [
            "interpolate",
            ["linear"],
            ["zoom"],
            15,
            0,
            15.05,
            ["get", "min_height"]
          ],
          "fill-extrusion-opacity": 0.6
        }
      },
      labelLayerId
    );

    // 关闭 loading
    loading.close()
    emit('loaded', map)
  });
})



</script>
<template>
  <div ref="mapBox" />
</template>
<style lang="scss" scoped>
</style>
