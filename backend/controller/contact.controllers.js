const Contact = require("../models/contact.model");

const createContact = async (req, res) => {
  try {
    console.log("1. BODY:", req.body);

    const { name, email, mobile } = req.body;

    console.log("2. Creating contact...");

    const contact = await Contact.create({
      name,
      email,
      mobile,
    });

    console.log("3. Contact created:", contact);

    res.status(201).json({
      message: "Contact saved successfully",
      contact,
    });
  } catch (error) {
    console.log("CONTACT ERROR:", error);

    res.status(500).json({
      message: "Failed to save contact",
      error: error.message,
    });
  }
};

module.exports = createContact;