const exp = require("express"),
    route = exp.Router()

route.get("/", (req, res) => {
    res.json({ message: "Hello" })
})

module.export = route