const activityDao = require('../../dao/activity/activity.dao')

function findProjectResponse(req, res) {
    activityDao.findProject({
      
    }).then(data => {
        res.status('200').send({
            data: data
        })
    })
}
function findSpecificProjectResponse(req, res) {
    activityDao.findSpecificProject({
        projectName: req.params.projectName
    }).then(data => {
        res.status('200').send({
            data: data
        })
    })
}

function createProjectResponse(req, res) {
    let newProjectDetails = {
        projectName: req.body.projectName
    }
    activityDao.createProject(newProjectDetails).then(data => {
      
        res.status('201').send({
            data: req.body
        })

    })
}

function createTaskResponse(req, res) {
    console.log("here")
   let data = {
       id: req.params.projectId,
       task: req.body
   }
    activityDao.createTask(data).then(data => {
        // console.log(req.params._id)
        res.status('200').send({
            data: req.body
    })
    
    })
}

function updateProjectResponse(req, res) {
    activityDao.updateProject({
        projectName: req.params.projectName
    }).then(data =>{
        res.status('200').send({
            data: data
    })
   
    })
}

// function archiveProjectResponse(req, res) {
//     let data = {
//         projectName: req.params.projectName
//     }
//     activityDao.archiveProject(data).then(data => {
//         res.status('200').send({
//             data: data
//         })
//     })
// }

module.exports = {
    findSpecificProjectResponse,
    findProjectResponse,
    createProjectResponse,
    createTaskResponse,
    updateProjectResponse
    // archiveProjectResponse
}