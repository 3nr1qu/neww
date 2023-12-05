const contactModel = require("../models/contact");
const fs = require("fs");
const path = require("path");
class Contact {
  async postAddContact(req, res) {
    let { cFullname, cEmail, cMessage } =
      req.body;
    if (
      !cFullname |
      !cEmail |
      !cMessage 
      
    ) {
      return res.json({ error: "All filled must be required" });
    }else {
      try {
        let newContact = new contactModel({
            cFullname,
            cEmail,
            cMessage 
        });
        let save = await newContact.save();
        if (save) {
          return res.json({ success: "Your Inquiries is successfully Sending" });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}
const contactController = new Contact();
module.exports = contactController;
