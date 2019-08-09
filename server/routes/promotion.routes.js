
const express =  require('express');
const router = express.Router();

const promotion = require('../controller/promotion.controller');

router.get('/', promotion.getPromotions);
router.post('/', promotion.createPromotion);
router.get('/:id', promotion.getPromotion);
router.put('/:id', promotion.editPromotion);
router.delete('/:id', promotion.deletePromotion);

module.exports = router;



