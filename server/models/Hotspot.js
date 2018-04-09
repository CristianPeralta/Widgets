var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HotspotSchema = new Schema({
  content: {
    text: String,
    imageUrl: String,
  },
  popupPosition: {
    x: String,
    y: String,
  },
  coords: {
    x: String,
    y: String,
  },
  widgetId: {type: mongoose.Schema.Types.ObjectId, ref: 'Widget'},
  createdAt:{ type: Date, default: Date.now}
});

var Hotspot = mongoose.model("Hotspot", HotspotSchema);

module.exports = Hotspot;
