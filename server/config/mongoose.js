/**
 * Created by tdoson on 29.10.14.
 */
var mongoose = require('mongoose'),
    crypto = require('crypto');

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
        userName:String,
        salt:String,
        hashed_pwd:String,
        roles: [String]
    });
    userSchemma.methods = {
        authenticate: function(passwordToMatch){
            return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    }
    var User = mongoose.model('User', userSchemma);

    User.find({}).exec(function(err,collection){
        if(collection.length === 0){
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt, 'abc1');
            User.create({firstName:'abc1', lastName:'def1', userName:'abc1', salt:salt, hashed_pwd:hash, roles:['admin']});
            salt = createSalt();
            hash = hashPwd(salt, 'abc2');
            User.create({firstName:'abc2', lastName:'def2', userName:'abc2', salt:salt, hashed_pwd:hash, roles:[]});
            salt = createSalt();
            hash = hashPwd(salt, 'abc3');
            User.create({firstName:'abc3', lastName:'def3', userName:'abc4',salt:salt, hashed_pwd:hash});
        }
    })
}

function createSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt,pwd){
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}