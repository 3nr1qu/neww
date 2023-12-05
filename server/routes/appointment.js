const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointment');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/products');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/add', upload.any(), appointmentController.addAppointment);
router.post('/all', appointmentController.getAll);
router.post('/edit-appointment', appointmentController.postEditAppointment);
router.post('/delete-appointment', appointmentController.deleteAppointment);
module.exports = router;
