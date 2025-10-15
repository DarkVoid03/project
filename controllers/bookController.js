const Book = require("../schema/book");


const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getBookById = async (req, res) => {
  const { isbn } = req.params;
  try {
    const book = await Book.find({isbn});
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
    return book;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createBook = async (req, res) => {
  const { title, author, quantity, date, price, isbn } = req.body;
  try {
    const book = new Book({
      title,
      author,
      quantity,
      date,
      price,
      isbn,
    });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateBook = async (req, res) => {
  const { isbn } = req.params;
  const { title, author, quantity, price } = req.body;
  try {
    const book = await Book.find({isbn})
    const update = await Book.findByIdAndUpdate(
      book[0].id,
      { title, author, quantity, price },
      { new: true }
    );
    if (!update) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteBook = async (req, res) => {
  const { isbn } = req.params;
  try {
    const book = await Book.findByIdAndDelete(isbn);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
