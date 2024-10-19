import mongoose from "mongoose";

// Define the schema for the URL
const URLSchema = new mongoose.Schema({
  Long_URL: {
    type: String,
    required: true,
  },
  ShortCode: {
    type: String,
    required: true,
  },
});

// Create the model using the schema
export const API_Data = mongoose.model("API_Data", URLSchema);
