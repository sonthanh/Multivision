var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required'},
    featured: {type: Boolean, required: '{PATH} is required'},
    published: {type: Date, required: '{PATH} is required'},
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);
function createDefaultCourses(){
    Course.find({}).exec(function(err,collection){
        if(collection.length === 0){
            Course.create({title: 'agfgf', featured: true, published: new Date('1/5/2013'), tags: ['#C']});
            Course.create({title: 'bdasd', featured: false, published: new Date('10/7/2013'), tags: ['Misc']});
            Course.create({title: 'vbgdf', featured: true, published: new Date('10/5/2014'), tags: ['Coding']});
            Course.create({title: 'ddfzuiasdas', featured: false, published: new Date('2/3/2013'), tags: ['JS']});
        }
    })
}

exports.createDefaultUsers = createDefaultCourses;