// Import necessary modules
import express from "express";
import mongoose from "mongoose";
import { URLRegister } from "./controllers/API_Controller.js";
import { redirectToLongURL } from "./controllers/Redirect_Controller.js";

// Initialize express app
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Define port
const PORT = process.env.PORT || 5000;

// Root route to serve form
app.get("/", (req, res) => {
  res.render("index", { shortURL: null });
});

// Handle form submission (POST request to /shorten)
app.post("/shorten", URLRegister);

// Route for handling short URLs (ShortCode)
app.get("/:shortCode", redirectToLongURL);

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://mihirtayde138:SIhDQtd1NMb5IPUv@cluster0.ss5gb.mongodb.net/", { dbName: "API_Data" })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("Connection error: ", error));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
