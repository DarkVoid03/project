const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://hinduja:hindujaproject@cluster0.mlzuz6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes;
// app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
app.use("/students", studentRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
