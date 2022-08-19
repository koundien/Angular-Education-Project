const mongoose = require("mongoose");
const reservationSchema = mongoose.Schema({

    idUser: String,
    idCourEvent: { type: String, ref: "Cour" },
    type: String,


})

const Reservation = mongoose.model("reservation", reservationSchema)
module.exports = Reservation;