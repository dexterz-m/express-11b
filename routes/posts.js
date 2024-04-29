const express = require('express');
const router = express.Router();
const numbersController = require('../controllers/postsFormController')

router.route('/').get(postFormController.getPosts);
router.route('/').post(postFormController.postPosts);
router.route('/:id').get(postFormController.postsId)

module.exports = router;