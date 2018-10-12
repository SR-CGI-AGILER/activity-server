// var mongoose = require('mongoose');
var mongoose = require('../db-connection/mongo');
var Schema = mongoose.Schema;

// console.log(mongoose)
var projectSchema = new Schema({
    projectId : String,
    projectName : String,
    assignTo : String,
    createdAt : Date,
    status : String,
    dueDate : Date,
    task : [{taskId : String, text : String, createdAt : Date, dueDate : Date, status : String, assignTo : String, archiveTask: Boolean}],
    archiveProject : Boolean
});

var project = mongoose.model('project', projectSchema);

module.exports = project;