const express = require('express');

const { getToolsData } = require('../controllers/tools');

const router = express.Router();

router.route('/:search').get(getToolsData);

module.exports = router;
