var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ZonalEngineerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ID: {
        type: Number,
        required: true,
        unique:true
    },
    Name: {
        type: String,
        required:true
    },
    DoB: {
        type: Date,
        required:true
    },
    Gender: {
        type: String,
        required:true
    },
    Email: {
        type: String,
        required: true,
        match: / [a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    MobileNo: {
        type: Number,
        required:true
    },
    AlternateMobile: {
        type: String
    },
   PermanentAddress: {
        type: String,
        required:true
    },
    CurrentAddress: {
        type: String,
        required:true
    },
    City: {
        type: String,
        required:true
    },
    State: {
        type: String,
        required:true
    },
    Pincode: {
        type: String,
        required:true
    },
    LinkedinAccount: {
        type:String
    },
    Qualification: {
        type: String,
        required: true
    },
    WorkingAs: {
        type: String,
        required:true
    },
    
    AccountID: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Account',
            require:true
        }
    ],
    Experience: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Experience',
            require:true
        }
    ]


}
 

 );
module.exports = mongoose.model('ZonalEngineer', ZonalEnginnerSchema);