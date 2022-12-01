const Tarea = require("../models/Tarea");
const { param } = require("../routes/tarea");


exports.crearTarea = async (req, res) => {
    try {

        let tarea;

        //Creamos nuestro producto
        tarea = new Tarea(req.body);

        await tarea.save();
        res.send(tarea);


    }catch (error){
        console.log(error);
        res.status(500),send('Hubo un error')
    }
}

exports.obtenerTareas = async(req, res) => {
    try {

        const tareas = await Tarea.find();

        res.json(tareas);

    }catch (error){
        console.log(error);
        res.status(500),send('Hubo un error')
    }
}
exports.actualizarTarea = async(req, res) => {
    try {

        const { tareareco, urgencia, hora } = req.body;
        let tarea = await Tarea.findById(req.params.id);

        if(!tarea){
            res.status(404).json({msg: 'No existe la tarea'});
        }

        tarea.tareareco = tareareco;
        tarea.urgencia = urgencia;
        tarea.hora = hora;

        tarea = await Tarea.findOneAndUpdate({ _id: req.params.id },tarea, { new: true} );
        res.json(tarea);

    }catch (error){
        console.log(error);
        res.status(500),send('Hubo un error')
    }
}

exports.obtenerTarea = async(req, res) => {
    try {

        let tarea = await Tarea.findById(req.params.id);

        if(!tarea){
            res.status(404).json({msg: 'No existe la tarea'});
        }
        res.json(tarea);

    }catch (error){
        console.log(error);
        res.status(500),send('Hubo un error')
    }
}

exports.eliminarTarea = async(req, res) => {
    try {

        let tarea = await Tarea.findById(req.params.id);

        if(!tarea){
            res.status(404).json({msg: 'No existe el tarea'});
        }
        await Tarea.findByIdAndRemove({ _id: req.params.id});
        res.json({ msg: 'Tarea eliminada con éxito'});

    }catch (error){
        console.log(error);
        res.status(500),send('Hubo un error')
    }
}