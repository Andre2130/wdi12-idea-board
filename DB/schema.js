
const mongoose = require('mongoose');

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
    title: {
        type: String,
        default: 'New Title'
      },
      description: {type: String, default: 'New Idea Description'},
      createdAt: {type: Date, default: Date.now}
    })

const UserSchema = new Schema({
    userName: {
        type: String,
       
    },
    password: {
        type: String,
    },
    ideas: [IdeaSchema]
});

// Create models for each schema
const UserModel = mongoose.model('User', UserSchema)
const IdeaModel = mongoose.model('Idea', IdeaSchema)

// Export each model so they can be required elsewhere
module.exports = {
    UserModel: UserModel,
    IdeaModel: IdeaModel
}