const express = require('express');
const router = express.Router();
const searchCtrl = require('../../controllers/api/search')

router.post('/', searchCtrl.index)

module.exports = router;