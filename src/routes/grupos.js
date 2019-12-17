const express = require('express');
const router = express.Router();

const controller = require("../controllers/gruposController")

router.get('', controller.getAll)
router.post('', controller.addGrupos)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router