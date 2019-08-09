const Client = require('../models/client');
const clientCtrl = {};

clientCtrl.getClients = async (req, res) => {
    const clients =  await Client.find();
    res.json(clients);
};

clientCtrl.createClient = async (req, res) => {
    const client = new Client({
        nameC: req.body.nameC,
        credit: req.body.credit
    });
    await client.save();
    res.json({
        'status': 'Client Saved'
    });
};

clientCtrl.getClient = async (req, res) => {
    const client = await Client.findById( );
    res.json(client);
};

clientCtrl.editClient = async (req, res) => {
    const { id } = req.params;
    const client = {
        nameC: req.body.nameC,
        credit: req.body.credit
    };
    await Client.findByIdAndUpdate(id, {$set: client}, {new: true});
    res.json({status: 'Client Updated'});
};

clientCtrl.deleteClient = async (req, res) => {
    await Client.findByIdAndRemove(req.params.id);
    res.json({status: 'Client Deleted'});
}

module.exports = clientCtrl;