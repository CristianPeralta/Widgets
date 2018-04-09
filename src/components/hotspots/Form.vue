<template lang="html">
  <section class="modal-card-body">
    <div class="field">
      <label class="label">Text</label>
      <div class="control">
        <textarea name="name" v-model="form.content.text" rows="8" cols="80" placeholder="Type here!"></textarea>
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
</template>

<script>
export default {
  name: 'Form',
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
