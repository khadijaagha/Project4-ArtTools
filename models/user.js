const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;
//good to keep user schema as minimal as possible 

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        //trim --> removes any widespace 
        trim: true,
        //lowercase --> fixes casing issues, always make sure emai is in lowercase
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 3
    }   

}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function (next) {
    //'this' is the user document
    if(!this.isModified('password')) return next();
    //replace the password with the computed hash instead 
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});


module.exports = mongoose.model('User', userSchema)