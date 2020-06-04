const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;