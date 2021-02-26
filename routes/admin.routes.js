'use strict'

var express = require('express');
var adminController = require('../controllers/admin.controller');

var api = express.Router();

api.post('/:id/setEmpresa', adminController.setEmpresas);
api.put('/:id/updateEmpresas/:idA', adminController.updateEmpresas);
api.post('/:idA/listEmpresas', adminController.listEmpresas);
api.delete('/:id/removeEmpresas/:idA', adminController.removeEmpresas);

module.exports = api;