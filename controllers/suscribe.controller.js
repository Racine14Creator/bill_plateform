import Joi from "joi"
import { Suscribe } from "../models/suscribes.model.js"

const getSuscribes = async (req, res) => {
    try {
        const subcribes = await Suscribe.find({});
        res.json(subcribes);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
}

const postSuscribe = async (req, res) => {
    const { email } = req.body
    console.log(req.body)
    if (email === '') {
        res.json({ data: 'Empty Email :(' })
    } else {
        await Suscribe.findOne({ email: email })
            .then(subscriber => {
                if (subscriber) {
                    res.json({ data: 'This is email is already Taken :(' })
                } else {
                    const newSuscriber = new Suscribe({ email })
                    const subscriber = newSuscriber.save()
                    if (subscriber) {
                        res.json(
                            { data: 'success' }
                        )
                    } else { res.json({ data: 'Something went wrong...' }) }
                }
            })
            .catch(error => console.error(error))
    }

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