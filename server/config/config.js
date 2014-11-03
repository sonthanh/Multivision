/**
 * Created by tdoson on 29.10.14.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
        rootPath:rootPath,
        db: 'mongodb://localhost/multivision',
        port: process.env.PORT ||3030
    },
    production:{
        rootPath:rootPath,
        db: 'mongodb://tdoson:adm123@ds049170.mongolab.com:49170/multivision',
        port: process.env.PORT ||80
    }
}