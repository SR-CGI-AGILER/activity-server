const router = require('express').Router();
const activityController = require('./activity.controller')
router.get('/project', activityController.findProjectResponse)
router.get('/project/:projectName', activityController.findSpecificProjectResponse)
router.post('/project', activityController.createProjectResponse) 
router.post('/project/:projectName/tasks', activityController.createTaskResponse) 
router.put('/project', activityController.createUpdateResponse)
router.put('/project/:projectName', activityController.archiveProjectResponse)

module.exports = router