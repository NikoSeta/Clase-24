const express = require('express');
const app = express();
const routs = require ('./src/routs/routs')
const { PORT } = require ('./src/config/globals');
const session = require('express-session')
const MongoStore = require('connect-mongo')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', routs);
app.use('/', express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.get( '/', function ( req, res ) { res.sendFile(__dirname + "/views/index.html" ) } );
app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/test'}),
    secret: 'usuarios',
    resave: false,
    saveUninitialized: false
}));

const server = app.listen(`${PORT}`, ()=>{
    console.log(`Para ver los productos usar este link http://localhost:${PORT}/login `)
});

server.on('error', error => console.log(`Error en el servidor ${error}`));