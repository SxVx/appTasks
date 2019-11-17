const mongoose = require('mongoose');

var db;

module.exports = function(){
    if(!db){
        db = mongoose.createConnection('mongodb+srv://<user>:<password>@cluster0-zrsf9.mongodb.net/test?retryWrites=true&w=majority',{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

    }

    return db;
}