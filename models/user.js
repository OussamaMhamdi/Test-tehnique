'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema= new Schema({
  
    Firstname: {
        type : String,
        require: true   
    },
    Lastname :{
        type : String,
        require: true,
    },
    email :{
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }

})
module.exports = mongoose.model('User', UserSchema);