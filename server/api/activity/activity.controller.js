const activityDao = require('../../dao/activity/activity.dao')

function findProjectResponse(req, res) {
    activityDao.findProject({
        projectId: req.params.projectId
    }).then(data => {
        res.status('200').send({
            data: data
        })


    })
}

function createProjectResponse(req, res) {
    activityDao.createProject()
    res.status('201').send({
        data: "sfdfs"
    })
}

function createTaskResponse(req, res) {
    activityDao.createTask({
        projectId: req.params.projectId
    })
    console.log(req.params.projectId)
    res.status('201').send({
        data: "wert"
    })
}

function createUpdateResponse(req, res) {
    activityDao.updateProject({
        projectId: req.params.projectId
    })
    res.status('200').send({
        data: a
    })
}

module.exports = {
    findProjectResponse,
    createProjectResponse,
    createTaskResponse,
    createUpdateResponse
}