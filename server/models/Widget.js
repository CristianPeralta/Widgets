var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var WidgetSchema = new Schema({
  title: {type:String, required:'Title is required'},
  imageUrl: String,
  hotspotStyle: String,
  createdAt:{ type: Date, default: Date.now}
});

var Widget = mongoose.model("Widget", WidgetSchema);

module.exports = Widget;
