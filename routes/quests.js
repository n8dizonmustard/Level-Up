var router = require('express').Router();
var questsCtrl = require('../controllers/quests');

// GET /quests
router.get('/', questsCtrl.questsIndex);
router.get('/new', questsCtrl.newQuest);
router.get('/:id', questsCtrl.showQuest);
router.post('/', questsCtrl.createQuest);
router.delete('/:id', questsCtrl.deleteQuest);


module.exports = router;