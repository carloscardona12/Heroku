const mongoose = require ('mongoose');
const {Schema} = mongoose;

const TeamSchema = new Schema({
    teamn: {type: String, required: true},
    number: {type: Number, required:true},
    model: {type: String, required:true},
    size: {type:String, required:true}
  
});

module.exports = mongoose.model('Team', TeamSchema);
