const router = require('express').Router();
const activityController = require('./activity.controller')
router.get('/project', activityController.findProjectResponse)
router.get('/project/:projectName', activityController.findSpecificProjectResponse)
router.post('/project', activityController.createProjectResponse) 
router.put('/project/:_id/tasks', activityController.createTaskResponse) 
// router.put('/project/:projectName', activityController.updateProjectResponse)
// router.put('/project/:projectName', activityController.archiveProjectResponse)

module.exports = router