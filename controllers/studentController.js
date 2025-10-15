const Student = require("../schema/student");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getStudentById = async (req, res) => {
  const { isbn } = req.params;
  try {
    const student = await Student.findOne({isbn });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createStudent = async (req, res) => {
  const { name, grade, isbn} = req.body;
  try {
    const student = new Student({
      name,
      grade,
      isbn
    });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateStudent = async (req, res) => {
  const { isbn } = req.params;
  const { name, grade } = req.body;
  try {
    const student = await Student.findOneAndUpdate(
      {isbn},
      { name, grade },
      { new: true }
    );
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteStudent = async (req, res) => {
  const { isbn } = req.params;
  try {
    const student = await Student.findByIdAndDelete(isbn);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};

