const express = require('express');

const { getEnrichment } = require('../controllers/enrichment');

const router = express.Router();

router.route('/:search').get(getEnrichment);

module.exports = router;
