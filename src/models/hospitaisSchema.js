const mongoose = require ('mongoose');
const schema = mongoose.Schema;

// const { hospitaisSchema } = require('./hospitaisSchema');

const hospitaisSchema = new schema ({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true},
    nome: { type: String, required: true, unique: true},
    local: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    
    
    
});

const hospitalModel = mongoose.model('hospital', hospitaisSchema)

module.exports = hospitalModel;