const mongoose = require('mongoose');
const Joi = require("joi");

const studentsSchema = {
    first_name: String,
    last_name: String,
    id: String,
    class: String,
    trend: String
}

const studentModel = mongoose.model('students', studentsSchema);
exports.studentModel = studentModel;

exports.validateStudent = (_data) => {
    let joiSchema = Joi.object({
        first_name: Joi.string().min(2).max(50).required(),
        last_name: Joi.string().min(2).max(50).required(),
        id: Joi.string().min(9).max(9).required(),
        class: Joi.string().min(2).required(),
        trend: Joi.string().min(4).max(99).required()
    })

    return joiSchema.validate(_data);
}

