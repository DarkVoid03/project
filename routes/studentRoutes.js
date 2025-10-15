const express = require("express");
const studentController = require("../controllers/studentController");
const authMiddleware = require("../controllers/authMiddleware");

const router = express.Router();

router.get("/", studentController.getAllStudents);
router.get("/:isbn", studentController.getStudentById);
router.post("/",authMiddleware, studentController.createStudent);
router.put("/:isbn", authMiddleware,studentController.updateStudent);
router.delete("/:isbn",authMiddleware, studentController.deleteStudent);

module.exports = router;

