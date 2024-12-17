const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    class: { type: String, required: true },
    section: { type: String, required: true },
    rollNumber: { type: Number, required: true, unique: true },
    photo: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', StudentSchema);
