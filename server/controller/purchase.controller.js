const Purchase = require('../models/purchase');

const purchaseCtrl = {};

purchaseCtrl.getPurchases = async(req, res) => {
    const purchases = await Purchase.find();
    res.json(purchases);
    
}



purchaseCtrl.createPurchase = async (req,res)=>{
    const purchase = new Purchase({
        name: req.body.name,
        supplier: req.body.supplier,
        product: req.body.product,
        amount: req.body.amount
    });
    await purchase.save();
    res.json({
        'status': 'Purchase saved'
    })
};

purchaseCtrl.getPurchase = async(req, res) => {
    const purchase = await Purchase.findById(req.params.id);
    res.json(purchase);
};

purchaseCtrl.editPurchase = async(req,res) => {
    const{ id } = req.params;
    const purchase = {
        name: req.body.name,
        supplier: req.body.supplier,
        product: req.body.product,
        amount: req.body.amount
    };
    await Purchase.findByIdAndUpdate(id, {$set: purchase}, {new: true});
    res.json({status: 'Updated'});
};

purchaseCtrl.deletePurchase = async (req, res) => {
    await Purchase.findByIdAndRemove(req.params.id);
    res.json({status: 'Purchase Delete'});
};


module.exports = purchaseCtrl;