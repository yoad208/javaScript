const indexR = require('../index');
const studentR = require('../student');
const idR = require('../id');
const classR = require('../classes');


exports.routesInit = (app) => {
    app.use('/', indexR);
    app.use('/students', studentR);
    app.use('/students/id', idR);
    app.use('/class/class_name', classR);
}