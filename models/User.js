const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    cardio: [
        {
            type: Schema.Types.ObjectId,
            ref: "Cardio"
        }
    ],
    resistence: [
        {
            type: Schema.Types.ObjectId,
            ref: "resistance"
        }
    ]
})

const User = mongoose.model("User", UserSchema);

module.exports = User;