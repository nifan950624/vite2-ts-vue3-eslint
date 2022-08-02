<script setup lang="ts">
import { inject, onMounted, Ref } from 'vue'
import { Map, EventData } from 'mapbox-gl'
const mapRef = inject<Ref<Map>>('mapBox')

onMounted(() => {
  const map = (mapRef as Ref<any>).value
  map.addSource("points", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [114.371059, 30.620799] 
          }
        }
      ]
    }
  });

  map.addLayer({
    id: "circle",
    type: "circle",
    source: "points",
    paint: {
      "circle-color": "#4264fb",
      "circle-radius": 8,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff"
    }
  });

  map.on("click", "circle", (e: EventData) => {
    map.flyTo({
      center: e.features[0].geometry.coordinates
    });
  });
})
</script>
<template>
  <div class="home">
    home
  </div>
</template>


<style lang="scss" scoped>
</style>