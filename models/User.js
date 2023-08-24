//  User.js
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const UserSchema = new Schema({    
    username:{        
        type: String,      
        require: true   
    },  
    password: {      
        type: String,      
        require: true   
    }, 
    data: {        
        type: Date,        
        default: Date.now()   
    }
});
module.exports = User = mongoose.model('user', UserSchema);
