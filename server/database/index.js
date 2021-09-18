import mongoose from 'mongoose';
// const mongoose = require("mongoose");
// let DB_URL =
// "mongodb+srv://nimi_blog:nimi6464@blog.rkijc.mongodb.net/BLOG_PROJECT?retryWrites=true&w=majority";
mongoose.connect(
  // "mongodb+srv://nimi_blog:nimi6464@blog.rkijc.mongodb.net/BLOG_PROJECT?retryWrites=true&w=majority",
  "mongodb://127.0.0.1:27017/blog",
  {
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
console.log("data gone successfully")

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("DB CONNECTED SUCCESSFUL");
});
export default db;
