//File Name: appointment-routes.js - API endpoints for scheduling scheduling
//appointments are defined here

//Imports
let express = require('express'),
    app = express();
let router = require('express').Router();
var appointmentController = require('./controllers/appointment-controller');
var studentviewController = require('./controllers/main-student-controller');
var tutorviewController = require('./controllers/main-tutor-controller');

//Default API response
router.get('/', function (req, res) {
    res.render('index');
});

//apppointment routes
router.route('/appointment/new')
    .get(appointmentController.newappointment)
    .post(appointmentController.addappointment)

//student view routes
router.route('student/view')
	.get(studentviewController.newstudentview)
	.post(studentviewController.addstudentview)

//tutor view routes
router.route('tutor/view')
	.get(tutorviewController.newtutorview)
	.post(tutorviewController.addtutorview)

//appointment API routes
router.route('/api/appointment')
    .get(appointmentController.index)
    .post(appointmentController.new);

router.route('/api/appointment/:appointment_id')
    .get(appointmentController.view)
    .put(appointmentController.update)
    .delete(appointmentController.delete);

//student view API routes
router.route('/api/studentview')
	.get(studentviewController.index)
	.post(studentviewController.new);

router.route('/api/studentview/:studentView_id')
	.get(studentviewController.view)
    .put(studentview.update)
    .delete(studentview.delete);

//tutor view API routes
router.route('/api/tutorview')
	.get(tutorviewController.index)
	.post(tutorviewController.new);

router.route('/api/tutorview/:tutorView_id')
	.get(tutorviewController.view)
    .put(tutorview.update)
    .delete(tutorview.delete);

//Export module
module.exports = router;
