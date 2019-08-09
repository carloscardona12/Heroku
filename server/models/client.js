const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
    nameC:  { type: String, required: true },
    credit: { type: Number, required: true}
});

module.exports = mongoose.model('Client', ClientSchema);