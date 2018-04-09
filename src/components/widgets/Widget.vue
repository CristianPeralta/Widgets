<template lang="html">
  <div class="">
    <br>
    <button type="button" name="button" @click="addPoint">Add Point</button>
    <button type="button" @click="remove">Delete</button>
    <button type="button" @click="edit">Edit</button>
    <br>
    <img @click="getCoords()" :src ="data.imageUrl" :alt="data.title" :usemap="'#'+ data.title + data._id">
    <map ref="map" :name="data.title + data._id">
    </map>
  </div>
</template>

<script>
import ApiServices from '@/services/ApiServices'
import Form from './Form'

export default {
  name: 'Widget',
  props: ['data', 'index'],
  data () {
    return {
      coords: {
        x: 0,
        y: 0
      },
      option: [
        'numeral',
        'roman',
        'uppercase',
        'lowercase'
      ],
      hotspot: []
    }
  },
  computed: {
    map () {
      return this.$refs.map
    }
  },
  methods: {
    getCoords (e) {
      alert('click')
    },
    addPoint () {

    },
    remove () {
      ApiServices.widget.remove(this.data._id).then((response) => {
        this.$parent.widgets.splice(this.index, 1)
      })
    },
    edit () {
      ApiServices.widget.edit(this.data._id).then((response) => {
        this.$emit('edit', this.data, this.index)
      })
    },
    update () {
      ApiServices.widget.update(this.data._id).then((response) => {
        this.$parent.widgets[this.index] = response.data
      })
    }
  }
};
</script>

<style lang="css">
</style>
