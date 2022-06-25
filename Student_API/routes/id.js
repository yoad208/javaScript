const express = require('express');
const {studentModel} = require("../db/Models/studentsModel");
const router = express.Router();


/* GET users listing. */
router.get('/', async (req, res, next) => {
    let data = await studentModel.find({});
    let Id = []

    for (let id in data) {
        Id[id] = {
            name: data[id].first_name,
            Id: data[id].id
        };
    }
    res.json({Id})
});


module.exports = router;
