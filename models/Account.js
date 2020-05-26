var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AccountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
        
    },
    RoleID: {
        type: Number,
        required: true
    },
    IsActive: {
        type: String,
        required: true
    }


});
module.exports = mongoose.model('Account', AccountSchema);