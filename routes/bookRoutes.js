const express = require("express");
const bookController = require("../controllers/bookController");
const authMiddleware = require("../controllers/authMiddleware");
// const bodyParser = require("body-parser");

const router = express.Router();
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", bookController.getAllBooks);
router.get("/:isbn", bookController.getBookById);
router.post("/",authMiddleware, bookController.createBook);
router.put("/:isbn",authMiddleware, bookController.updateBook);
router.delete("/:isbn",authMiddleware, bookController.deleteBook);

module.exports = router;
