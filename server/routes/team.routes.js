const express =  require('express');
const router = express.Router();

const team = require('../controller/team.controller');

router.get('/', team.getTeams);
router.post('/', team.createTeam);
router.get('/:id', team.getTeam);
router.put('/:id', team.editTeam);
router.delete('/:id', team.deleteTeam);

module.exports = router;
