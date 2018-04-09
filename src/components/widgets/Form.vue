<template lang="html">
  <div class="">
    <div v-if="!create">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-model="form.title" class="input" type="text" placeholder="The Title">
          </div>
        </div>

        <div class="field">
          <label class="label">Image URL</label>
          <div class="control">
            <input v-model="form.imageUrl" class="input" type="text" placeholder="http://www...">
          </div>
        </div>

        <div class="field">
          <label class="label">Style</label>
          <div class="control">
            <div class="select">
              <select v-model="form.hotspotStyle">
                <option value="numeral"> 1 2 3 ...</option>
                <option value="numeral-roman"> I II III ...</option>
                <option value="alphabetic-lowercase"> one two three ...</option>
                <option value="alphabetic-uppercase"> ONE TWO THREE ...</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button @click="update" class="button is-link">Save</button>
            <button @click="remove" class="button is-danger">Delete</button>
          </div>

        </div>
    </div>
    <div v-else class="">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-model="newForm.title" class="input" type="text" placeholder="The Title">
          </div>
        </div>

        <div class="field">
          <label class="label">Image URL</label>
          <div class="control">
            <input v-model="newForm.imageUrl" class="input" type="text" placeholder="http://www...">
          </div>
        </div>

        <div class="field">
          <label class="label">Style</label>
          <div class="control">
            <div class="select">
              <select v-model="newForm.hotspotStyle">
                <option value="numeral"> 1 2 3 ...</option>
                <option value="numeral-roman"> I II III ...</option>
                <option value="alphabetic-lowercase"> one two three ...</option>
                <option value="alphabetic-uppercase"> ONE TWO THREE ...</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button @click="send" class="button is-link">Submit</button>
            <slot></slot>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import ApiServices from '@/services/ApiServices'
import HotspotModal from '../hotspots/HotspotModal'

export default {
  name: 'NewWidget',
  props: ['data', 'modalStatus', 'create'],
  components: {
    HotspotModal
  },
  data () {
    return {
      form:{
        title: '',
        imageUrl: '',
        hotspotStyle: ''
      },
      newForm:{
        title: '',
        imageUrl: '',
        hotspotStyle: ''
      }
    }
  },
  watch :{
    data (val) {
      if (val) {
        this.form = {
          title: val.title,
          imageUrl: val.imageUrl,
          hotspotStyle: val.hotspotStyle
        }
      }
    },
    create (val) {

    }
  },
  methods: {
    send () {
      ApiServices.widget.create(this.newForm).then((response) => {
          this.$emit('add', response.data)
          this.form = {
            title: '',
            imageUrl: '',
            hotspotStyle: ''
          }
      })
    },
    update () {
      ApiServices.widget.update({
        _id: this.data._id,
        title: this.form.title,
        imageUrl: this.form.imageUrl,
        hotspotStyle: this.form.hotspotStyle
      }).then((response) => {
          this.$emit('widgetUpdated', response.data)
          this.form = {
            title: '',
            imageUrl: '',
            hotspotStyle: ''
          }
      })
    },
    remove () {
      this.$parent.removeWidget()
    },
    cancel () {

    }
  }
}
</script>

<style lang="css">
</style>
