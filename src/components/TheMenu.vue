<template lang="html">
  <div class="">
    <aside class="menu">
      <br>
      <button v-if="!createStatus" type="button" class="button is-info" @click="newWidget">New Widget</button>
      <br>
      <FormWidget @add="addWidget" @cancel="cancel" @widgetUpdated="updateWidget" :data="dataWidget" :create="createStatus">
        <button v-if="createStatus" type="button" class="button" @click="newWidget">Cancel</button>
      </FormWidget>
      <slot></slot>
    </aside>
  </div>
</template>

<script>
import FormWidget from './widgets/Form'
import FormHotspot from './hotspots/Form'

export default {
  name: 'TheMenu',
  props: ['widgets', 'dataWidget', 'index'],
  data () {
    return {
      active: {
        newWidget: true,
        newHotspot: false
      },
      draft: {},
      createStatus: false
    }
  },
  components: {
    FormWidget,
    FormHotspot
  },
  methods: {
    change (val) {
      for (let prop in this.active) {
        this.active[prop] = false
      }
      this.active[val] = !this.active[val]
    },
    addWidget (val) {
      this.$parent.widgets.push(val)
    },
    updateWidget (val) {
      this.draft = val
      this.$parent.widgets.splice(this.index, 1, val)
    },
    removeWidget () {
      this.$parent.removeWidget()
    },
    newWidget () {
      this.createStatus = !this.createStatus
      if (!this.createStatus) {
        this.$emit('updateData')
      }
    },
    cancel () {
      this.createStatus = false
    }
  }
}
</script>

<style lang="css">
</style>
