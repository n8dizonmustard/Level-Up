const Quest = require('../models/quest');

module.exports = {
    questsIndex,
    newQuest
};

function newQuest(req, res){
    res.render('quests/new');
}

function questsIndex(req, res){
    res.render('quests');
}