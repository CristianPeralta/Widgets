var mongoose = require("mongoose");

var Hotspot = require('../models/Hotspot');

module.exports.create = (req, res) => {
  let data = req.body;

  let hotspot = new Hotspot();

  hotspot.content = data.content;
  hotspot.popupPosition = data.popupPosition;
  hotspot.coords = data.coords;
  hotspot.widgetId = mongoose.Types.ObjectId(data.widgetId);

  hotspot.save((err, hotspot) => {
    if(err){
      console.log(err);
      return res.sendStatus(503)
    }
    return res.json(hotspot);
  });
}


module.exports.getAll = (req, res) => {
  Hotspot.find().then((hotspots, err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(503)
    }
    return res.json(hotspots)
  })
}


module.exports.getOne = (req, res) => {
  let id = req.params.id;
  Hotspot.findOne({_id:id}).then((hotspot, err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(503)
    }
    return res.json(hotspot)
  })
}

module.exports.update = (req, res) => {
  let data = req.body
  let id = data._id
  delete data._id

  Hotspot.findOneAndUpdate({_id: id}, data, (err, hotspot) => {
    if(err){
      console.log(err)
      return res.sendStatus(503)
    }
    return res.json(hotspot)
  })
}

module.exports.delete = (req, res) => {
  let id = req.params.id

  Hotspot.findOneAndRemove({_id: id}, (err, hotspot) => {
    if(err){
      console.log(err)
      return res.sendStatus(503)
    }
    return res.sendStatus(200)
  })
}
