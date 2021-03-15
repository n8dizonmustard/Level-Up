var router = require('express').Router();
var questsCtrl = require('../controllers/quests');

// GET /quests
router.get('/', questsCtrl.questsIndex);
router.get('/new', questsCtrl.newQuest);
router.post('/', questsCtrl.createQuest);
router.delete('/:id', questsCtrl.deleteQuest);
router.get('/:id', questsCtrl.showQuest);

module.exports = router;