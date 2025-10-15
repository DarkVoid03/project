const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const studentRoutes = require("./routes/studentRoutes");
const rentalRoutes = require("./routes/rentalRoutes");
// const {verifyToken} = require("./controllers/verifyToken");
const { registerUser, loginUser,verifyToken } = require('./controllers/authController');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin:"http://localhost:3000",
}))

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://hinduja:hindujaproject@cluster0.mlzuz6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes;
// app.use("/login", authRoutes);
app.use("/books", bookRoutes);
app.use("/students", studentRoutes);
app.use("/rentals", rentalRoutes);

// Mount authentication routes
app.post('/api/verify', verifyToken)
app.post('/api/register', registerUser);
app.post('/api/login', loginUser);


// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
