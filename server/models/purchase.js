const mongoose = require ('mongoose');
const {Schema} = mongoose;

const PurchaseSchema = new Schema({
    name:{type: String, required: true},
    supplier: {type: String, required: true},
    product: {type: String, required: true},
    amount: {type:Number, required: true}
});

module.exports = mongoose.model('Purchase', PurchaseSchema);