import mongoose from "mongoose";

const suscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
}, {timestamps: true});

export const Suscribe = mongoose.models.Suscribes || mongoose.model("Subscribe", suscribeSchema);
