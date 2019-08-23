const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  plataform: { type: String, required: true },
  price: { type: Number, required: true },
  whattsapp: { type: Number, required: true },
  comentary: { type: String }
}, { timestamps: true })


const Game = mongoose.model('Games', gameSchema)
module.exports = Game