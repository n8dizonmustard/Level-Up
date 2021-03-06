const Quest = require('../models/quest');
const User = require('../models/user'); 

module.exports = {
    questsIndex,
    newQuest,
    createQuest,
    deleteQuest,
    showQuest
};

function showQuest(req, res){
    Quest.findById(req.params.id, function(err, questDocs){
        res.render('quests/show', {
            quest: questDocs
        });
    });
}

// function deleteQuest(req, res){
//     Quest.findByIdAndDelete(req.params.id, function(){
//         res.redirect('/quests');
//     });
// }

function deleteQuest(req, res) {
    Quest.findById(req.params.id, function(err, quest) {
        if (!quest.user.equals(req.user._id)){
            console.log('ERROR')
            return res.redirect('/quests');
        } else {
            quest.remove();
            quest.save(function(err){
                res.redirect('/quests');
            })
        }
    });
}


function createQuest(req, res){
    const quest = new Quest(req.body);
    console.log(quest.user, 'this is quest.user')
    quest.user = req.user._id;
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