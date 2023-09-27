const express = require("express");
const app = express();
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const Article = require("./models/article");

mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const articles = await Article.find();
  res.render("articles/index", { articles });
});
app.use("/articles", articleRouter);

app.listen(5000, () => {
  console.log("server started");
});
