var router = require('express').Router();
var questsCtrl = require('../controllers/quests');

// GET /quests
router.get('/', questsCtrl.questsIndex);
router.get('/new', questsCtrl.newQuest);
router.post('/', questsCtrl.createQuest);


module.exports = router;