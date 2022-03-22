const Busy = require("../models/Busy.model");

module.exports.busyController = {
  addBusy: async (req, res) => {
    try {
      const { id, num } = req.body;
      const busyAdded = await Busy.create({
        user: req.user.id,
        seans: num,
        place: num,
      });
      res.json(busy);
    } catch (error) {
      res.json(error);
    }
  },
  getBusy: async (req, res) => {
    try {
      const busy = await Busy.find();
      res.json(busy);
    } catch (error) {
      res.json(error);
    }
  },
};