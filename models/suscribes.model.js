import mongoose from "mongoose";

const suscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
});

const Suscribe = mongoose.model("Subscribe", suscribeSchema);
export default Suscribe;