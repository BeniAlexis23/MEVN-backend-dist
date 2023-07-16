import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notaSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre Obligatorio'] },
    descripcion: { type: String },
    usuarioId: { type: String },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

//Convertir a Modelo
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;