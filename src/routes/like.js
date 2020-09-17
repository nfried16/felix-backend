const express = require("express");
const Like = require("../models/like");
const router = new express.Router();

router.get("/", async(req, res) => {
    const ret = await Like.find();
    if(!ret) {
        return res.send("0");
    }
    res.send(ret);
})

router.post("/", async (req, res) => {
    let time = Date.now();
    const ret = new Like({name: req.body.name, time: time});
    await ret.save();
    res.status(200).send(ret.time);
});

module.exports = router;
