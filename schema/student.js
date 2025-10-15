const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  grade: {
    type: String,
    required: true,
  },
  booksRented: [
    {_id : {
      type : String,
      required : true,
    },
    quantity : {
      type : Number,
      required : true,
    }
  }
  ],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
