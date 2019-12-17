const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hospitaisSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, required: true },
  Local : { type: String, required: true },
  
})


const ospitaisModel = mongoose.model('hospitais', hospitaisSchema);

module.exports = hospitaisModel;