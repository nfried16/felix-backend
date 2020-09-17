const express = require("express");
const Count = require("../models/count");
const router = new express.Router();

router.get("/", async(req, res) => {
    const ret = await Count.findOne();
    if(!ret) {
        return res.send("0");
    }
    res.send(ret.count.toString());
})

router.post("/", async (req, res) => {
    // Put userId from auth to put into body
    let count = await Count.findOne();
    if(count == null) {
        count = new Count({count: 0});
    }

    count.count = count.count + 1;

    try {
        await count.save();
        res.status(200).send(count.count.toString());
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;
