const Promotion = require('../models/promotion');

const promotionCtrl = {};

promotionCtrl.getPromotions= async (req, res) => {
    const promotions = await Promotion.find();
    res.json(promotions);
}

promotionCtrl.createPromotion = async (req,res) => {
    const promotion = new Promotion({
        discount: req.body.discount, 
        reason: req.body.reason
    });
    await promotion.save();
    res.json({
        'status': 'Promotion saved'
    })
};

promotionCtrl.getPromotion = async(req,res) =>{
    const promotion = await Promotion.findById(req.params.id);
    res.json(promotion);
}


promotionCtrl.editPromotion = async (req,res) =>{
    const { id } = req.params;
    const promotion = {
        discount: req.body.discount,
        reason: req.body.reason
    };
    await Promotion.findByIdAndUpdate(id, {$set: promotion}, {new: true});
    res.json({status: 'Promotion Update'});
};

promotionCtrl.deletePromotion = async (req,res) =>{
    await Promotion.findByIdAndRemove(req.params.id);
    res.json({status: 'Promotion Deleted'});
};

module.exports = promotionCtrl;

