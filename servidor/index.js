const express = require('express');
const conectardb = require('./config/db');
const cors = require('cors');   

console.log('desde index.js');

const app = express();

conectardb();
//ruta principal
app.use(cors());

app.use(express.json());
app.use('/api/tareas', require('./routes/tarea'));

app.listen(4000, () => {
    console.log('El servidor está corriendo en el puerto 4000');
})