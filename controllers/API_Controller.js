import shortid from "shortid";
import { API_Data } from "../model/API_Data.js"; // Import your model

// Controller to handle URL registration
export const URLRegister = async (req, res) => {
  const { Long_URL } = req.body;  // Capture form data

  try {
    const ShortCode = shortid.generate();
    const ShortURL = `http://localhost:${process.env.PORT || 5000}/${ShortCode}`;

    // Create a new URL document in MongoDB
    const newURL = new API_Data({ ShortCode, Long_URL });
    await newURL.save();

    // Render the page with the generated short URL
    res.render("index", { shortURL: ShortURL });
  } catch (error) {
    console.error("Error creating short URL:", error);
    res.status(500).send("Server error");
  }
};
