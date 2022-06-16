const express = require('express');
const app = express();
const {Router} = express;
const router = Router();
const PORT = 8080

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/productos', router);
app.use('/', express.static(__dirname + '/views'));
app.get( '/', function ( req, res ) { res.sendFile(__dirname + "/views/index.html" ) } );
app.set('view engine', 'ejs');

app.get('/productos', async function(req, res){
    res.render('index');
});

const server = app.listen(`${PORT}`, ()=>{
    console.log(`Para ver los productos usar este link http://localhost:${PORT}/productos `);
});