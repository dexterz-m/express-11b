const express = require('express');
const router = express.Router();
const klasesController = require('../controllers/klasesController')

router.route('/').get(klasesController.getClases);
router.route('/:id').get(klasesController.getClassId);
router.route('/').post(klasesController.postClass);

module.exports = router;