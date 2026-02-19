const express = require('express');
const router = express.Router();
const {getUsers, createUser, getUsersPosts} = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:userId/posts', getUsersPosts);    

module.exports = router;