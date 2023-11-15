import express from "express"
import {
    getSuscribes,
    getOneSuscribe,
    postSuscribe,
    updateSuscribe,
    deleteSuscribe
} from "../controllers/suscribe.controller.js"

const router = express.Router()

router.route('/').get(getSuscribes).post(postSuscribe)

router.route('/:id').get(getOneSuscribe).put(updateSuscribe).delete(deleteSuscribe)


export default router