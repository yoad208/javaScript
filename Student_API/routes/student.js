const express = require('express');
const {studentModel, validateStudent} = require('../db/Models/studentsModel')
const router = express.Router();

/* GET all student. */
router.get('/', async (req, res, next) =>{

  // get student info from mongoDB
  let data = await studentModel.find({});
  res.json(data)
});

/* POST new student. */
router.post('/',  async (req, res, next) =>{

  // use package JOI to validate POST request
  let validStudent = validateStudent(req.body);
  if (validStudent.error) {
    return res.status(400).json(validStudent.error.details)
  }

  // get the req.body and push to mongoDB
  let student = new studentModel(req.body);
  await student.save();
  res.json(student)
});

/* PUT specific student. */
router.put('/:studentId',  async (req, res, next) =>{

  let validStudent = validateStudent(req.body);
  if (validStudent.error) {
    return res.status(400).json(validStudent.error.details)
  }

  let student =  await studentModel.updateOne({id: req.params.studentId} ,req.body);
  res.json(student)
});

/* DELETE specific student. */
router.delete('/:studentId',  async (req, res, next) =>{

  try {
    let data = await studentModel.deleteOne({id: req.params.studentId})
    res.json(data)
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
});


module.exports = router;
