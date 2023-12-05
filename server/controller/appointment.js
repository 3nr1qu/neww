const appointmentModel = require('../models/appointment');
const fs = require('fs');
const path = require('path');
const { isAdmin } = require('./../middleware/auth');
const userModel = require('../models/users');
class Appointment {
  async addAppointment(req, res) {
    let {
      firstName,
      lastName,
      contactNumber,
      email,
      streetAddress,
      barangayAddress,
      provinceAddress,
      postalAddress,
      message,
      dateTime,
      user_id
    } = req.body;

    try {
      let newApppointment = new appointmentModel({
        firstName,
        lastName,
        contactNumber,
        email,
        streetAddress,
        barangayAddress,
        provinceAddress,
        postalAddress,
        message,
        dateTime,
        creator_id: user_id
      });
      let save = await newApppointment.save();
      if (save) {
        return res.json({ success: 'created successfully' });
      }
    } catch (err) {
      console.log(err);
    }
  }
  async getAll(req, res) {
    try {
      const isAdmin = req.body.isAdmin;
      const userId = req.body.userId;
      let Categories;

      if (isAdmin) {
        Categories = await appointmentModel.find({}).sort({ _id: -1 });
      } else {
        Categories = await appointmentModel
          .find({
            creator_id: userId
          })
          .sort({ _id: -1 });
      }
      if (Categories) {
        return res.json({ Categories });
      }
    } catch (err) {
      console.log(err);
    }
  }
  async postEditAppointment(req, res) {
    let { appointmentId, status } = req.body;

    if (status === true) {
      status = 'APPROVED';
    } else {
      status = 'REJECTED';
    }
    try {
      let editCategory = appointmentModel.findByIdAndUpdate(appointmentId, {
        status,
        updatedAt: Date.now()
      });
      let edit = await editCategory.exec();

      console.log({ edit });
      if (edit) {
        return res.json({ success: 'Category edit successfully' });
      }
    } catch (err) {
      console.log(err);
    }
  }
  async deleteAppointment(req, res) {
    let { appointmentId } = req.body;
    if (!appointmentId) {
      return res.json({ error: 'All filled must be required' });
    } else {
      try {
        let deleteAppointment = await appointmentModel.findByIdAndDelete(
          appointmentId
        );
        return res.json({ success: 'Deleted successfully' });
      } catch (err) {
        console.log(err);
      }
    }
  }
}

const AppointmentController = new Appointment();
module.exports = AppointmentController;
