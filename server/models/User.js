/**
 * Created by tdoson on 07.11.14.
 */
var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchemma = mongoose.Schema({
    firstName: {type:String, required:'{PATH} is required'},
    lastName:  {type:String, required:'{PATH} is required'},
    userName: {
        type:String,
        required:'{PATH} is required',
        unique:true
    },
    salt: {type:String, required:'{PATH} is required'},
    hashed_pwd:  {type:String, required:'{PATH} is required'},
    roles: [String]
});
userSchemma.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
};
var User = mongoose.model('User', userSchemma);

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'abc1');
            User.create({firstName: 'abc1', lastName: 'def1', userName: 'abc1', salt: salt, hashed_pwd: hash, roles: ['admin']});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'abc2');
            User.create({firstName: 'abc2', lastName: 'def2', userName: 'abc2', salt: salt, hashed_pwd: hash, roles: []});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'abc3');
            User.create({firstName: 'abc3', lastName: 'def3', userName: 'abc4', salt: salt, hashed_pwd: hash});
        }
    })
}

exports.createDefaultUsers = createDefaultUsers;