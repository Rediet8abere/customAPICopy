//Import the mongoose module
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BookSchema = new Schema({
  title: { type: String, required: true }, // String is shorthand for {type: String}
  author: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Book", BookSchema);

//  { type: 'ObjectId', ref: 'Author' },
// const PostSchema = new Schema({
//   title: { type: String, required: true },
//   posts : [{ type: Schema.Types.ObjectId, ref: "Post" }],
//   url: { type: String, required: true },
//   summary: { type: String, required: true },
//   subreddit: { type: String, required: true },
//   comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
// });
//
// module.exports = mongoose.model("Post", PostSchema);
