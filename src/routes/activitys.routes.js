const {Router} = require('express');
const router = Router();

const activityCtrl = require('../controllers/activity.controller')

router.get('/', activityCtrl.getActivitys);
router.post('/', activityCtrl.createActivity);
router.get('/:id', activityCtrl.getActivity);
router.put('/:id', activityCtrl.updateActivity);
router.delete('/:id', activityCtrl.deleteActivity);
router.put('/state/:id', activityCtrl.updateState);
router.put('/asignate/:id', activityCtrl.asignateUser)

module.exports = router;