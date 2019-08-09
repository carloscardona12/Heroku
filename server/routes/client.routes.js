const express = require('express');
const router = express.Router();

const client = require('../controller/client.controller');

router.get('/', client.getClients);

router.post('/', client.createClient);

router.get('/:id', client.getClient);

router.put('/:id', client.editClient);

router.delete('/:id', client.deleteClient);

module.exports = router;