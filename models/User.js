const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true,                 
        trim: true,                    
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [30, 'Username cannot exceed 30 characters']
    },
    email: { 
        type: String, 
        required: true, 
    },
    number: { 
        type: String, 
        required: true, 
        unique: true,                  
        trim: true 
    }
});

// ✅ Integrate `passport-local-mongoose` for easy authentication
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
