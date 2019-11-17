const path = require('path'); //La usamos para evitar problemas de rutas en diferentes entornos
const express = require('express');
const app = express();

const indexRoutes = require('./routes/routes.js');

//morgan -> para ver la peticiones que llegan al servidor, como un middleware
//Siguiendo una convencion lo renombramos a logger
const logger = require('morgan');

//body-parser -> proporciona la manera de poder entender las peticiones post
//Permite que los datos que lleguen por post puedan ser tratados como objetos JavaScript
const bodyParser = require('body-parser');

//middleware
//Morgan recibe como parametro string que indica la configuracion a usar con el
app.use(logger('dev'));

//Al utilizar body-parser necesita una configuracion
//lo configuramos para utilizarlo atraves de url
app.use(bodyParser.urlencoded({extended:false}));

//Settings
//Si hay una variable de entorno que la utlice sino que se conecte por el puerto 3000
app.set('port', process.env.PORT || 3000 );
const PORT = app.get('port');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views') );

//routes
app.use('/',indexRoutes);


app.listen(PORT,()=>{
    console.log(`Server run in port ${PORT}`);
    
});