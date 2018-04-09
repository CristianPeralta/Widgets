<template lang="html">
  <div class="slider">
    <transition-group tag="div" :name="transitionName" class="slides-group">
      <div v-if="show" :key="current" class="slide white">
        <img :src="data[current].imageUrl" alt="">
      </div>
    </transition-group>
    <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
      &#10094;
    </div>
    <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
      &#10095
    </div>
  </div>
</template>

<script>
import ApiServices from '@/services/ApiServices'

export default {
  name: 'Carousel',
  props: ['data'],
  data () {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false
    }
  },
  watch: {
    data (val) {
      if (val.length>0) {
        this.show = true;
        this.edit()
      }
    },
    current () {
      this.edit()
    }
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.data.length;
      this.current = (this.current + dir % len + len) % len;
    },
    edit () {
      this.$parent.currenntWidget = this.data[this.current]
      this.$parent.currenntWidgetIdx = this.current
    }
  },
  mounted () {
    this.$parent.currenntWidget = this.data[this.current]
  }
}
</script>

<style lang="css">
@import "../assets/css/slider.css";
</style>
