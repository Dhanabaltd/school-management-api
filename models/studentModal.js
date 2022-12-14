const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

  studentName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  motherName: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  staffName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  studentImage: {
    type: String
  },
  imageName: {
    type: String
  }
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
