const express = require('express')
const ctrl = require("../controls");
const router = express.Router()

router.get('/', ctrl.getAllBanks);

router.get('/:bankId', ctrl.getBank);

router.post('/', ctrl.addBank);

router.post('/:bankId/delete', ctrl.deleteBank);

router.put('/:bankId', ctrl.editBank);

module.exports = router