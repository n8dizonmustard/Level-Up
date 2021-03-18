var router = require('express').Router();
var commentsCtrl = require('../controllers/comments');

// Comments
router.post('/:id', commentsCtrl.addComment);
router.delete('/:id', commentsCtrl.deleteComment);

module.exports = router;