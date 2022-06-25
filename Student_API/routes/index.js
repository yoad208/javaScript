const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/',  (req, res, next) => {
    res.json({
        status: 200,
        students: `/students`,
        id: `/students/id`,
        className: `/class/class_name`
    })
});


module.exports = router;
