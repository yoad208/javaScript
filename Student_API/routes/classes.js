const express = require('express');
const {studentModel} = require("../db/Models/studentsModel");
const router = express.Router();


/* GET users listing. */
router.get('/', async (req, res, next) => {
    let Class = await studentModel.find({});

    let className = []

    for (let name in Class) {
        className[name] = Class[name].class;
    }
    res.json({className})
});


module.exports = router;