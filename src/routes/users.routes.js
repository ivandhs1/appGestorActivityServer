const {Router} = require('express');
const router = Router();

const userCtrl = require('../controllers/user.controller')

router.get('/', userCtrl.getAllUser);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.getUser);
router.put('/:id', userCtrl.updateUser);
router.get('/verificate/:id', userCtrl.getUserVerificate);

module.exports = router;