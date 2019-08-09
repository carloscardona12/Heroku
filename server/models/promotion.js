const mongoose = require('mongoose');
const { Schema }= mongoose;

const PromotionSchema = new Schema({
    discount: {type:Number, required: true},
    reason: {type: String, required: true}
});


module.exports = mongoose.model('Promotion',PromotionSchema);