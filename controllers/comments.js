const Quest = require('../models/quest');
const User = require('../models/user'); 

module.exports = {
    addComment,
    deleteComment
};

function deleteComment(req, res) {
 // Note the cool "dot" syntax to query on the property of a subdoc
    Quest.findOne({'comments._id': req.params.id}, function(err, quest) {
        // Find the comment subdoc using the id method on Mongoose arrays
        // https://mongoosejs.com/docs/subdocs.html
        const commentSubdoc = quest.comments.id(req.params.id);
        // Ensure that the comment was created by the logged in user
        if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/quests/${quest._id}`);
        // Remove the comment using the remove method of the subdoc
        commentSubdoc.remove();
        // Save the updated book
        quest.save(function(err) {
        // Redirect back to the book's show view
        res.redirect(`/quests/${quest._id}`);
        });
    });
}

function addComment(req, res) {
    Quest.findById(req.params.id, function(err, quest) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        quest.comments.push(req.body);
        quest.save(function(err) {
            res.redirect(`/quests/${quest._id}`)
        });
    });
}