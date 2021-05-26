const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  creator: { type: String, required: true },
  questions: { type: Array, required: true },
  version: { type: String, required: true },
  takenBy: { type: Array }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
