var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ExperienceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    CompanyName: {
        type: String,
        required: true
    },
    StartDate: {
        type: Date,
        required: true

    },
    EndDate: {
        type: Date,
        required: true
    },
    Position: {
        type: String,
        required: true
    },
    RoleIDNo: {
        type: Number,
        required: true
    },
    UserIDNo: {
        type: Number,
        required:true

    }


});
module.exports = mongoose.model('Experience', ExperienceSchema);
