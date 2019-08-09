const Discount = require('../models/discount');

const discountCtrl = {};

discountCtrl.getDiscounts= async (req, res) => {
    const discounts = await Discount.find();
    res.json(discounts);
}

discountCtrl.createDiscount = async (req,res) => {
    const discount = new Discount({
        percentage: req.body.percentage, 
        reason: req.body.reason
    });
    await discount.save();
    res.json({
        'status': 'Discount saved'
    })
};

discountCtrl.getDiscount = async(req,res) =>{
    const discount = await Discount.findById(req.params.id);
    res.json(discount);
}


discountCtrl.editDiscount = async (req,res) =>{
    const { id } = req.params;
    const discount = {
        percentage: req.body.percentage,
        reason: req.body.reason
    };
    await Discount.findByIdAndUpdate(id, {$set: discount}, {new: true});
    res.json({status: 'Discount Update'});
};

discountCtrl.deleteDiscount = async (req,res) =>{
    await Discount.findByIdAndRemove(req.params.id);
    res.json({status: 'Discount Deleted'});
};

module.exports = discountCtrl;

