// index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

const corsOptions = {
  origin: process.env.CLIENT_URI, // frontend URI (ReactJS)
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
const employeeRoutes = require("./routes/employeeRoutes");
const companyRoutes = require("./routes/companyRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

app.use("/employees", employeeRoutes);
app.use("/companies", companyRoutes);
app.use("/applications", applicationRoutes);

// Connect to MongoDB
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
