const express = require('express');
const { Router } = express;
const routs = Router();



routs.get('/login', async function(req, res){
    res.render('index');
});

routs.get('/contador', (req, res) => {
    if(req.session.contador) {
        req.session.contador++;
        res.send(`Usted ha ingresado al sitio ${req.session.contador} veces.`)
    } else {
        req.session.contador = 1;
        res.send(`Bienvenido`)
    }
});

routs.get('/logIn', (req, res) => {
    res.cookie(`${datosLogIn.usuario}`,
     `${datosLogIn.contrasenia}`, 
     { maxAge: 30000 }).send(`Bienvenido ${datosLogIn.usuario}`)
} );

module.exports = routs;