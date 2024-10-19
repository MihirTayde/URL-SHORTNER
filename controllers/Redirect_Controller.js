import { API_Data } from "../model/API_Data.js";

// Function to handle redirection when a short URL is visited
export const redirectToLongURL = async (req, res) => {
  const { shortCode } = req.params;  // Extract shortCode from URL

  try {
    // Find the original long URL based on the shortCode
    const urlData = await API_Data.findOne({ ShortCode: shortCode });

    if (urlData) {
      // Redirect to the original long URL
      res.redirect(urlData.Long_URL);
    } else {
      // If no URL is found, respond with an error or a 404 page
      res.status(404).send("URL not found");
    }
  } catch (error) {
    console.error("Error finding URL:", error);
    res.status(500).send("Server error");
  }
};
