const express = require('express');
const app = express();
const path = require('path');
const swig = require('swig');

//Configuración de la aplicación
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routes/index'));

//Static content without templates
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
