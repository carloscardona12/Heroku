const Team = require('../models/team');
const teamCtrl = {};

teamCtrl.getTeams = async (req, res) => {
    const teams =  await Team.find();
    res.json(teams);
};

teamCtrl.createTeam = async (req, res) => {
    const team = new Team({
        teamn: req.body.teamn,
        number: req.body.number,
        model: req.body.model,
        size: req.body.size
    });
    await team.save();
    res.json({
        'status': 'Team Saved'
    });
};

teamCtrl.getTeam = async (req, res) => {
    const team = await Team.findById( );
    res.json(team);
};

teamCtrl.editTeam = async (req, res) => {
    const { id } = req.params;
    const team = {
        teamn: req.body.teamn,
        number: req.body.number,
        model: req.body.model,
        size: req.body.size
    };
    await Team.findByIdAndUpdate(id, {$set: team}, {new: true});
    res.json({status: 'Team Updated'});
};

teamCtrl.deleteTeam = async (req, res) => {
    await Team.findByIdAndRemove(req.params.id);
    res.json({status: 'Team Deleted'});
}

module.exports = teamCtrl;