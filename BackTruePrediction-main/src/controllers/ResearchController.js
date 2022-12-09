const mongoose = require("mongoose");
const ResearchModel = require("../models/ResearchModel");

class ResearchController {
    get = async (req, res, next) => {
        let id = req.params.id;
        try {
            const cities = id ? await ResearchModel.findById({ _id: new mongoose.Types.ObjectId(id) }) || {} : await ResearchModel.find().sort({ _id: -1 });

            res.status(200);
            return res.json(cities);
        } catch (error) {
            const err = new Error(error);
            return next(err);
        }
    }

    post = async (req, res, next) => {
        try {
            const city = await new ResearchModel(req.body).save();

            res.status(201);
            return res.json(city);
        } catch (error) {
            const err = new Error(error);
            return next(err);
        }
    }
}

module.exports = new ResearchController;