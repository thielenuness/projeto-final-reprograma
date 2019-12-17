const express = require("express");
const router = express.Router();
const controller = require('../controllers/hospitaisController');

router.get('/', controller.getAll);
router.post('/criar', controller.addHospital);
router.post('/ZonaSegura', controller.addZonaSegura);


module.exports = router;

