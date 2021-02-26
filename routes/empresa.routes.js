'use strict'

var express = require('express');
var empresaController = require('../controllers/empresa.controller');

var api = express.Router();

api.post('/loginEmpresa', empresaController.loginEmpresa);

// Funciones propias de cada empresa
api.put('/:id/createEmpleado', empresaController.createEmpleado);
api.put('/:id/updateEmpleado/:idEm', empresaController.updateEmpleado);
api.put('/:id/deleteEmpleado/:idEm', empresaController.deleteContact);

// LISTA DE EMPLEADOS POR MEDIO DE PARAMETROS
api.get('/:id/controlPersonal', empresaController.controlPersonal);
api.get('/:id/listEmpleadoId/:idEm', empresaController.findEmpleadoId);
api.post('/:id/findNombreEmpleado', empresaController.findNombreEmpleado);
api.post('/:id/findPuestoEmpleado', empresaController.findPuestoEmpleado);
api.post('/:id/findDepartamentoEmpleado', empresaController.findDepartamentoEmpleado);

//CREACION DE PDF
api.get('/:id/createPDF', empresaController.creatPDFEmpleado);

module.exports = api;