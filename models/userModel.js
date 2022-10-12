const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcrypt');
const crypto = require("crypto")



const userShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: [true, "User must have name"]
    },
    age:{
        type: Number,
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
      },
      password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
      },
      passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
          // This only works on CREATE and SAVE!!!
          validator: function(el) {
            return el === this.password;
          },
          message: 'Passwords are not the same!'
        }
      },
      passwordChangedAt: Date,
      passwordResetToken: String,
      passwordResetExpires: Date,

});

// password hashing 
userShema.pre('save', async function(next) {

    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12)

    this.passwordConfirm = undefined;
    next()
  });

// setting passwordChangeAt property when userchange password
userShema.pre('save', function(next) {
    if (!this.isModified('password') || this.isNew) return next();
  
    this.passwordChangedAt = Date.now() - 1000;
    next();
  });

// checking is user change password after issue password
userShema.methods.changedPasswordAfter = function(JWTTimestamp) {
    if (this.passwordChangedAt) {
      const changedTimestamp = parseInt(
        this.passwordChangedAt.getTime() / 1000,
        10
      );
  
      return JWTTimestamp < changedTimestamp;
    }
  
    // False means NOT changed
    return false;
  };

userShema.methods.correctPassword = async function(candidatePassword, userPassword){
 return await bcrypt.compare(candidatePassword, userPassword)
} 

userShema.methods.createPasswordResetToken=  function (){
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
  .createHash('sha256')
  .update(resetToken)
  .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;



}



const User = mongoose.model("User", userShema)

module.exports = User