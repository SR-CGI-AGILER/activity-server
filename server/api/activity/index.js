const router = require('express').Router();
const activityController = require('./activity.controller')

router.get('/project/:projectId', activityController.findProjectResponse)
router.post('/project', activityController.createProjectResponse) 
router.post('/project/:projectId/tasks', activityController.createTaskResponse) 
router.put('/project/:projectId', activityController.createUpdateResponse)

module.exports = router