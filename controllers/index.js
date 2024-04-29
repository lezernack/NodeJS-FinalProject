const mongoose = require("mongoose");

const mainFunction = async (req, res) => {
  res.send(
    "Hello, this is the default message! To get the secret path put /secret at the end of the link"
  );
};

const secretFunction = async (req, res) => {
  res.send("Hello you've found the secret path!");
};

// Create college
const createCollege = async (req, res) => {
  try {
    const college = {
      college: req.body.college,
      state: req.body.state,
      ranking: req.body.ranking,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("colleges")
      .insertOne(college);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(response.error || "Some error occurred while creating a college");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { mainFunction, secretFunction };
