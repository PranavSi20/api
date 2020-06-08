var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  wemail: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  wpassword: {
    type: String,
    required: true,
    ValidatePassword() {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
    
      // Validate numbers
      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
    
      // Validate length
      if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    }
  },
  wname: {
    type: String,
    required: true,
    ValidateName(){
      var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
      var name = document.getElementById('name').value;
      if(!regName.test(name)){
          alert('Please enter your full name (first & last name).');
          document.getElementById('name').focus();
          return false;
      }else{
          alert('Valid name given.');
          return true;
      }
  },
  wdob: {
    type: Date,
    required: true, 
checkForm() 
{
  var errMessage = "";
    validateName();
    validateSurname();
    carSelect();
    validateDOB();

    if (errMessage == "") {
    } else {
        alert(errMessage);
    }
  },
validateDOB(){
    var dob = document.forms["ProcessInfo"]["txtDOB"].value;
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (dob == null || dob == "" || !pattern.test(dob)) {
        errMessage += "Invalid date of birth\n";
        return false;
    }
    else {
        return true
    }
}
  },
  wage: {
    type: Number,
    required: true,
    match : /^[1-9]?[0-9]{1}$|^100$/
  },
  waddress: {
    type: String,
    required: true,
    validateAddress: function (val) {
      console.log('val: ' + val);
      var streetregex = /^[a-zA-Z0-9-\/] ?([a-zA-Z0-9-\/]|[a-zA-Z0-9-\/] )*[a-zA-Z0-9-\/]$/;
      if ( streetregex.test(val) ) {
          console.log('true');
      } else {
          console.log('false');
      }
   }
  },
  wnearcity: {
    type: String,
    required: true,
    match:/^([a-zA-Z\u0080-\u024F]+(?:(\. )|-| |'))*[a-zA-Z\u0080-\u024F]*$/
   },
  wstate: {
    type: String,
    required: true
  },
  wpincode: {
    type: Number,
    required: true,
    match:/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/
  },
  wmobile: {
    type: Number,
    required: true,
    match:/^([9]{1})([234789]{1})([0-9]{8})$/
  },
  woccupation: {
    type: String,
    required: true
  },
  wexperience: {
    type: Number,
    required: true
  },
  wskill: {
    type: String,
    required: true
  },
  wSecQue: {
    type: String,
    required: true
  },
  wSecAns: {
    type: String,
    required: true
  },
  wadhaar: {
    type: Number,
    required: true,
    match:"^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$"
  }
}
});

module.exports = mongoose.model('user', UserSchema);
module.exports = function(user) {
  user.isValid(function (valid) {
    if (valid) res.render({user: user});
    else res.flash('error', 'User is not valid'), console.log(user.errors), res.redirect('/users');
});
  user.validatesPresenceOf('name', 'email');
  user.validatesLengthOf('password', {min: 10, message: {min: 'Password is too short'}});
  user.validatesInclusionOf('gender', {in: ['male', 'female']});
  user.validatesNumericalityOf('age', {int: true});
  user.validatesUniquenessOf('email', {message: 'email is not unique'});
  user.validatesNumericalityOf('mobile', {int: true});
  user.validatesNumericalityOf('aadhar', {int: true});
  user.validatespresenceof('SecAns');
  user.validatesPresenceOf('SecQue');
  user.validatesPresenceOf('skill');
  user.validatesNumericalityOf('experience',{int:true});
  user.validatesPresenceOf('occupation');
  user.validatesNumericalityOf('pincode',{int:true});
  user.validatesPresenceOf('state');
  user.validatesPresenceOf('nearcity');
  user.validatesPresenceOf('address'); 
};
