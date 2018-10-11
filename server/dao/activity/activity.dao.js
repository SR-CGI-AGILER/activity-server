const db = require('../../db-connection/mongo');
const project = require('../../model/project');

function findProject(id) {
    return new Promise(function (resolve, reject) {
        project.findOne({
            "projectId": id.projectId
        }, function (err, data) {
            console.log(err,data)
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

function createProject() {
    const x = new project({
        "projectId": "23421",
        "projectName": "agiler2",
        "createdAt": new Date(),
    })
    x.save(function (err) {
        if (err)
            console.log(err)
    })
    return {
        data: "abcd"
    }
}

function createTask(id) {
    console.log(id.projectId, "this is the dao")
    // console.log(project)
    project.findOne({
        "projectId": "123456"
    }, function (err, data) {


        // data.task
        //   console.log(err, data[0]["task"].push({
        //       text: "sdfsdfsdf",
        //       taskId: "adsasdas"
        //   }))
        console.log(data)
        data.task.push({
            taskId: "5678",
            text: "some random text1"
        })
        data.save()
    })


    return {
        data: "asfv"
    }
}

function updateProject(id) {
    project.findOneAndUpdate({
        projectId: "123456"
    }, {
        $set: {
            projectName: 'large123'
        }
    }, function (err, data) {
        console.log(data)
    })
    return project;
}



module.exports = {
    findProject,
    createProject,
    createTask,
    updateProject
}