'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var empresaSchema = Schema({
        nombre_Empresa: String,
        nombre: String,
        puesto: String,
        departamento: String
});

module.exports = mongoose.model('empleado', empresaSchema);