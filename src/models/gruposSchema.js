const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gruposSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  local: { type: String, required: true },
  especialidade: { type: String }
})

const gruposModel = mongoose.model('grupos', gruposSchema);

module.exports = { gruposModel, gruposSchema };