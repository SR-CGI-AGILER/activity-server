const db = require('../../db-connection/mongo');
const project = require('../../model/project');

function findSpecificProject(name) {
    return new Promise(function (resolve, reject) {
        project.find({
            "projectName": name.projectName
        }, function (err, data) {
            console.log(err, data)
            resolve(data)
        })
    })

}
function findProject() {
    return new Promise(function (resolve, reject) {
        project.find({
           
        }, function (err, data) {
            console.log(err, data)
            resolve(data)
        })
    })

    //    var x = new project({
    //        "projectId": "123456",
    //        "projectName": "agiler-1222dasd2",
    //        "createdAt": new Date(),
    //        "task": [{
    //            taskId: "1234",
    //            text: "fdsfsfsfdsdf"
    //        }]
    //    })
    //    x.save(function(err) {
    //        if(err) console.log(err)
    //    })

}

function createProject(details) {
    return new Promise(function (resolve, reject) {
        const x = new project({
            "projectId": details.projectId,
            "projectName": details.projectName,
            "createdAt": new Date(),
            "archiveProject": "false"
          
        })
        x.save(function (err, data) {
            if (err)
                console.log(err, data)
            resolve(data)
        })
    })
}

function createTask(name) {
    return new Promise(function (resolve, reject) {
        // console.log(name.projectName, "this is the dao")
        // console.log(project)
        project.findOne({
            "projectName": name.projectName
        }, function (err, data) {


            // data.task
            //   console.log(err, data[0]["task"].push({
            //       text: "sdfsdfsdf",
            //       taskId: "adsasdas"
            //   }))
            console.log(name.task)
            data.task.push({
                taskId: name.task.taskId,
                text: name.task.text
            })
            console.log(data.task)
            data.save()
            resolve(data)
        })

    })

}

function updateProject(id) {
    return new Promise(function (resolve, reject) {

        project.findOneAndUpdate({
            "projectName": id.projectName
        }, {
            $set: {
                "projectId": id.projectId
            }
        }, function (err, data) {
            console.log(data)
            resolve(data)
        })

    })
}

function archiveProject(name) {
    return new Promise(function (resolve, reject) {
        project.findOneAndUpdate({
            projectName: name.projectName
        }, {
            $set: {
                "archiveProject": true
            }
        }, function (err, data) {
            console.log(data)
            resolve(data)
        })
    })
}



module.exports = {
    findSpecificProject,
    findProject,
    createProject,
    createTask,
    updateProject,
    archiveProject
}