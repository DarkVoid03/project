const express = require("express");
const rentalController = require("../controllers/rentalController");
const authMiddleware = require("../controllers/authMiddleware");
const router = express.Router();


router.get("/" ,rentalController.getAllRentals);
router.get("/:isbn" ,rentalController.getRentalsByStudentIsbn);
router.post("/", rentalController.rentBook);
router.delete("/:isbn", rentalController.returnBook);

module.exports = router;
