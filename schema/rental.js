const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
  rentalDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
  },
  // Add more fields as needed
});

const Rental = mongoose.model("Rental", rentalSchema);

module.exports = Rental;
