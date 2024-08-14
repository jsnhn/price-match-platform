const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6 // caps represents look up data.

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true, // take away white space
        lowercase: true,
        required: true,
    },
    password: {
        type: String, 
        required: true,
        trim: true,
        minLength: 3,
    }
}, { // options object are written below
    timestamps: true,
    toJSON: { // it is an option that is used to define any of the docs. defining a behavior to a occur that anytime this model turns to JSON
        transform: function (doc, ret) { // when it becomse serialized we want to do something to it. ret means return
            delete ret.password; // anytime JSON data is sent, the passowrd would be delted. this is for every user object, becuase you are in user.js
            return ret;
        }
    }
});
// ^fact models skinny controllers, a lot of the data rules are baked into the model, so thre will be a lot less data in controllers
// ^ this will be hased beofre it gets to the data base. 

userSchema.pre('save', async function(next) { //.pre runs before something, before we save. //this middleware fires
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS); // time it takes to has 
    return next();
}) 

module.exports = mongoose.model('User', userSchema)

// Classes are blueprints and used to create objects. 
// what rules should be in the user Schema