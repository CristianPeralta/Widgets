<template lang="html">
  <div class="modal" :class="{'is-active':status}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">New Hotspot</p>
        <button @click="changeStatus" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Text</label>
          <div class="control">
            <input class="input" v-model="form.content.text" type="text" placeholder="Text here!">
          </div>
        </div>

        <div class="field">
          <label class="label">Image URL</label>
          <div class="control">
            <input class="input" v-model="form.content.imageUrl" type="text" placeholder="http://www.example.image.jpg">
          </div>
        </div>

        <div class="field">
          <label class="label">X popup</label>
          <div class="control">
            <input class="input" v-model="form.popupPosition.x" type="text" placeholder="For example 76.8">
          </div>
        </div>

        <div class="field">
          <label class="label">Y popup</label>
          <div class="control">
            <input class="input" v-model="form.popupPosition.y" type="text" placeholder="For example 34.6">
          </div>
        </div>

        <div class="field">
          <label class="label">X Marker</label>
          <div class="control">
            <input class="input" v-model="form.coords.x" type="text" placeholder="For example 65.5">
          </div>
        </div>

        <div class="field">
          <label class="label">Y Marker</label>
          <div class="control">
            <input class="input" v-model="form.coords.y" type="text" placeholder="For example 45.5">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotspotModal',
  props: ['widgetId', 'status'],
  data () {
    return {
      form: {
        widgetId: this.widgetId,
        content: {
          text: '',
          imageUrl: ''
        },
        popupPosition: {
          x: 0,
          y: 0
        },
        coords: {
          x: 0,
          y: 0
        }
      }
    }
  },
  methods: {
    changeStatus () {
      this.status = !this.status
    }
  }
}
</script>

<style lang="css">
</style>
