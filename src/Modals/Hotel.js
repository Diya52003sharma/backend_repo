const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minlength: [2, "minimum length should be 2"]
    },

    cuisine: {
      type: String,
      required: true,
      enum: ["Indian", "Chinese", "Italian", "Mexican"]
    },

    location: {
      city: { type: String, required: true },
      pincode: { type: String, required: true }
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },

    isOpen: {
      type: Boolean,
      default: true
    },

    phoneNumber: {
      type: String,
      required: true,
      match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"]
    }
  },
  {
    timestamps: true
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
