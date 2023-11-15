import Suscribe from "../models/suscribes.model.js"

const getSuscribes = async (req, res) => {
    try {
        const subcribes = await Suscribe.find({});
        res.json(subcribes);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}
const postSuscribe = (req, res) => {
    res.json("Post Method")
}
const getOneSuscribe = (req, res) => {
    res.json("GetOne Method")
}
const updateSuscribe = (req, res) => {
    res.json("Update Method")
}
const deleteSuscribe = (req, res) => {
    res.json("Delete Method")
}

export {
    getSuscribes,
    getOneSuscribe,
    postSuscribe,
    updateSuscribe,
    deleteSuscribe,
}