/**
 * Created by tdoson on 29.10.14.
 */
var mongoose = require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('multivision db opened');
    });

    var userSchemma = mongoose.Schema({
        firstName: String,
        lastName:String,
        userName:String
    });

    var User = mongoose.model('User', userSchemma);

    User.find({}).exec(function(err,collection){
        if(collection.length === 0){
            User.create({firstName:'abc1', lastName:'def1', userName:'abc1'});
            User.create({firstName:'abc2', lastName:'def2', userName:'abc2'});
            User.create({firstName:'abc3', lastName:'def3', userName:'abc4'});
        }
    })
}