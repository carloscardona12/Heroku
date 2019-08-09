/* crear rutas del servidor*/
const express = require('express');
const router = express.Router();

const purchase = require('../controller/purchase.controller');

router.get('/', purchase.getPurchases);
router.post('/', purchase.createPurchase);
router.get('/:id', purchase.getPurchase);
router.put('/:id', purchase.editPurchase);
router.delete('/:id', purchase.deletePurchase);


module.exports = router;