const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const Schema = new mongoose.Schema(
  {
    creator_id: {
      type: String
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    contactNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    streetAddress: {
      type: String,
      required: true
    },
    barangayAddress: {
      type: String,
      required: true
    },
    provinceAddress: {
      type: String,
      required: true
    },
    postalAddress: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    dateTime: {
      type: Date,
      required: true
    },
    status: { type: String, required: false },
    updatedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model('appointment', Schema);
module.exports = appointmentModel;
