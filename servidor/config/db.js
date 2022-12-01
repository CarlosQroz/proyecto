const moongose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectardb = async () => {
    try {
        
        await moongose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            retryWrites: true,
            w: "majority",
        });
        console.log('Base de datos conectada');

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports = conectardb;