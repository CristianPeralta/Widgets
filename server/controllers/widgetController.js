var mongoose = require("mongoose");

var Widget = require('../models/Widget');

module.exports.create = (req, res) => {
  let data = req.body;

  let widget = new Widget();

  widget.title = data.title;
  widget.imageUrl = data.imageUrl;
  widget.hotspotStyle = data.hotspotStyle;

  widget.save((err, widget) => {
    if(err){
      console.log(err);
      return res.sendStatus(503)
    }
    return res.json(widget);
  });
}

module.exports.getAll = (req, res) => {
  console.log('get All');
  Widget.find().then((widget, err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(503)
    }
    return res.json(widget)
  })
}

module.exports.getOne = (req, res) => {
  let id = req.params.id;
  Widget.findOne({_id:id}).then((widget, err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(503)
    }
    return res.json(widget)
  })
}

module.exports.update = (req, res) => {
  let data = req.body
  let id = data._id
  delete data._id

  Widget.findOneAndUpdate({_id: id}, data, {new: true}, (err, widget) => {
    if(err){
      console.log(err)
      return res.sendStatus(503)
    }
    return res.json(widget)
  })
}

module.exports.delete = (req, res) => {
  let id = req.params.id
  console.log('deleting');

  Widget.findOneAndRemove({_id: id}, (err, widget) => {
    if(err){
      console.log(err)
      return res.sendStatus(503)
    }
    return res.sendStatus(200)
  })
}
