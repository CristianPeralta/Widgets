<template lang="html">
  <div class="">

    <div class="columns">
      <div class="column is-one-fifth">
        <TheMenu @updateData="loadWidget" :dataWidget="currenntWidget" :index="currenntWidgetIdx ">
        </TheMenu>
        <br><br>
      </div>
      <div class="column is-four-fifth">
        <Carousel :data="widgets"></Carousel>
        <!-- <Widget @edit="editWidget" v-for="(item, index) in widgets" :key="index" :data="item" :index="index"></Widget> -->
      </div>
    </div>
  </div>
</template>

<script>
import ApiServices from '@/services/ApiServices'
import Carousel from './Carousel'
import TheMenu from './TheMenu'

export default {
  name: 'Home',
  data () {
    return {
      widgets: [],
      currenntWidget: {},
      currenntWidgetIdx: 0,
      editWidgetData: {},
      editWidgetIndex: '',
      slides: 5,
      active: 1
    }
  },
  components: {
    TheMenu,
    Carousel
  },
  created () {
    this.getWidgets()
  },
  methods: {
    getWidgets () {
      ApiServices.widget.list(this.form).then((response) => {
        response.data.map((val) => {
          this.widgets.push(val)
        })
      })
    },
    addWidget (val) {
      this.widgets.push(val)
    },
    newHotspot (id) {
      this.modalHots = true
      this.currenntWidget = id
    },
    editWidget (data, index) {
      this.editWidgetData = data
      this.editWidgetIndex = index
    },
    removeWidget () {
      if (this.currenntWidget) {
        ApiServices.widget.remove(this.currenntWidget._id).then((response) => {
          this.widgets.splice(this.currenntWidgetIdx, 1)
        })
      }
    },
    getWidgetById (id) {
      return new Promise ((resolve) => {
        this.widgets.map((val, idx) => {
          if (val._id == id) {
            resolve(idx)
          }
        })
      })
    },
    move(amount) {
      let newActive
      const newIndex = this.active + amount
      if (newIndex > this.slides) newActive = 1
      if (newIndex === 0) newActive = this.slides
      this.active = newActive || newIndex
    },
    jump(index) {
      this.active = index
    },
    addSlide() {
      this.slides = this.slides + 1
    },
    removeSlide() {
      this.slides = this.slides - 1
    },
    loadWidget () {
      let draft = this.currenntWidget
    }
  }
}
</script>

<style lang="css">
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css";
</style>
