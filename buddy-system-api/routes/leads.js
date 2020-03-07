const express = require('express');

const { getLeads } = require('../controllers/leads');

const router = express.Router();

router.route('/:search').get(getLeads);

module.exports = router;
