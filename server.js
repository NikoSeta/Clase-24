const express = require('express');
const app = express();
const {Router} = express;
const router = Router();
const PORT = 8080
const cookieParser = require('cookie-parser')
const session = require ('express-session');
const MongoStore = require('connect-mongo');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/productos', router);
app.use('/', express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.get( '/', function ( req, res ) { res.sendFile(__dirname + "/views/index.html" ) } );


app.get('/productos', async function(req, res){
    res.render('index');
});

app.use(cookieParser());
app.use({
    store: MongoStore.create({mongoUrl: "mongodb://localhost:27017/test"}),
    secret: 'productosAdm',
    resave: false,
    saveUninitialized: false
})

app.get('/login', (req, res) => {
    const { username, password } = req.query

    // Validacion de login (deberia hacerse comparando con informacion de base de datos)
    if(username == 'productosAdm' && password == 'altf4') {
        req.session.user = username;
        req.session.admin = true;
        req.session.logged = true;
    } else if(username == 'Nico' && password == 'programando') {
        req.session.user = username;
        req.session.logged = true;
    } else {
        return res.send('Usuario o contraseña incorrecto')
    }
    return res.send('Login success')
})


const server = app.listen(`${PORT}`, ()=>{
    console.log(`Para ver los productos usar este link http://localhost:${PORT}/productos `)
});
server.on('error', error => console.log(`Error en el servidor ${error}`))
