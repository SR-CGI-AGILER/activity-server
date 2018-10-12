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
    console.log(req.body)
    activityDao.createProject(req.body).then(data => {
      
        res.status('201').send({
            data: req.body
        })

    })
}

function createTaskResponse(req, res) {
   let data = {
       projectName: req.params.projectName,
       task: req.body.task
   }
    activityDao.createTask(data).then(data => {
        console.log(req.params.projectName)
        res.status('201').send({
            data: req.body
    })
    
    })
}

function updateProjectResponse(req, res) {
    activityDao.updateProject({
        projectId: req.params.projectId
    }).then(data =>{
        res.status('200').send({
            data: data
    })
   
    })
}

function archiveProjectResponse(req, res) {
    let data = {
        projectName: req.params.projectName,
        
    }
    activityDao.archiveProject(data).then(data => {
        res.status('200').send({
            data: data
        })
    })
}

module.exports = {
    findSpecificProjectResponse,
    findProjectResponse,
    createProjectResponse,
    createTaskResponse,
    updateProjectResponse,
    archiveProjectResponse
}