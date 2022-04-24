const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flowersSchema = new Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number,
})

const flowers = mongoose.model('Flowers', flowersSchema)

module.exports = flowers