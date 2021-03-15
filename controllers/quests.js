const Quest = require('../models/quest');
const User = require('../models/user');

module.exports = {
    questsIndex,
    newQuest,
    createQuest
};

function createQuest(req, res){
    let quest = new Quest(req.body);
    console.log(quest)
    // Assign the logged in user's id
    quest.user = req.user._id;
    console.log(req.user.user_id)
    quest.save(function(err){
        if(err) return res.render('quests/new');
        res.redirect('/quests');
    });
}

function newQuest(req, res){
    res.render('quests/new');
}

function questsIndex(req, res){
    Quest.find({}, function(err, questDocs){
        res.render('quests', {
            quests: questDocs
        });
    });
}