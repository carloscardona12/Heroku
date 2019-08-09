/* crear rutas del servidor*/
const express = require('express');
const router = express.Router();

const discount = require('../controller/discount.controller');

router.get('/', discount.getDiscounts);
router.post('/', discount.createDiscount);
router.get('/:id', discount.getDiscount);
router.put('/:id', discount.editDiscount);
router.delete('/:id', discount.deleteDiscount);


module.exports = router;