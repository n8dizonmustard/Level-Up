const Quest = require('../models/quest');
const User = require('../models/user'); 

module.exports = {
    questsIndex,
    newQuest,
    createQuest,
    deleteQuest,
    showQuest,
    addComment,
};


function addComment(req, res) {
    Quest.findById(req.params.id, function(err, quest) {
        
        quest.comments.push(req.body);
        console.log(req.body, 'this is req.body')
        console.log(quest, 'this is the quest')
        console.log(quest.comments, 'this is the comment')
        quest.save(function(err) {
            res.redirect(`/quests/${quest._id}`)
        });
    });
}

function showQuest(req, res){
    Quest.findById(req.params.id, function(err, questDocs){
        res.render('quests/show', {
            quest: questDocs
        });
    });
}

function deleteQuest(req, res){
    Quest.findByIdAndDelete(req.params.id, function(){
        res.redirect('/quests');
    });
}

function createQuest(req, res){
    const quest = new Quest(req.body);
    console.log(req.body, 'this is req.body')
    console.log(req.user, 'this is req.user')
    // quest.user = req.user._id;
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