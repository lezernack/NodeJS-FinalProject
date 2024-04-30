const mongoose = require("mongoose");
const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const mainFunction = async (req, res) => {
  res.send(
    "Hello, this is the default message! To get the secret path put /secret at the end of the link"
  );
};

const secretFunction = async (req, res) => {
  res.send("Hello you've found the secret path!");
};

const getColleges = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().colleges("colleges").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET single college
const getACollege = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("colleges")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Create a college
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

// update a college
const updateCollege = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const college = {
      college: req.body.college,
      state: req.body.state,
      ranking: req.body.ranking,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("colleges")
      .replaceOne({ _id: userId }, college);
    if (response.ackknowledged) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while updating the ranking"
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete one student
const deleteCollege = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("colleges")
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.ackknowledged) {
      res.status(200).send(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while deleting the college."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  mainFunction,
  secretFunction,
  createCollege,
  updateCollege,
  deleteCollege,
  getColleges,
  getACollege,
};
