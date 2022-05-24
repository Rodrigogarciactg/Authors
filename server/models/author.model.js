const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [3, "All author names are at least three characters long."],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Author", AuthorSchema);
