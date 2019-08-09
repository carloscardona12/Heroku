const mongoose = require('mongoose');
const { Schema }= mongoose;

const DiscountSchema = new Schema({
    percentage: {type:Number, required: true},
    reason: {type: String, required: true}
});


module.exports = mongoose.model('Discount',DiscountSchema);