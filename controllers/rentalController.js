const Rental = require("../schema/rental");

const getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.find().populate("book").populate("student");
    res.status(200).json(rentals);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const rentBook = async (req, res) => {
  const { bookId, studentId } = req.body;
  try {
    const rental = new Rental({
      book: bookId,
      student: studentId,
    });
    await rental.save();
    res.status(201).json(rental);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const returnBook = async (req, res) => {
  const { rentalId } = req.params;
  try {
    const rental = await Rental.findById(rentalId);
    if (!rental) {
      return res.status(404).json({ message: "Rental not found" });
    }
    rental.returnDate = new Date();
    await rental.save();
    res.status(200).json(rental);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllRentals,
  rentBook,
  returnBook,
};
