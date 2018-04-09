import Api from './source/Api'

let _w = 'widgets'
let _h = 'hotspot'

export default {
  widget: {
    create: (params) => {
      return Api().post( _w, params)
    },
    edit: (id) => {
      return Api().get( _w + '/edit/' + id)
    },
    update: (params) => {
      return Api().post( _w + '/update', params)
    },
    remove: (id) => {
      return Api().get( _w + '/delete/' + id)
    },
    list: () => {
      return Api().get(_w)
    }
  }
}
