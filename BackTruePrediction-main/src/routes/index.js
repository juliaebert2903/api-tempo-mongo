const express = require("express");
const ResearchController = require("../controllers/ResearchController");
const routes = express.Router();

routes.get("/cities", ResearchController.get);
routes.post("/cities", ResearchController.post);

// NOT FOUND
routes.use(function (req, res, next) {
    res.status(404);
    return res.json({ error: { message: "The webpage you're trying to reach can't be found." } });
});

module.exports = routes;