const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Articles",
      createdAt: Date.now(),
      description: "Test description",
    },
  ];
  res.render("home", { articles });
});

app.listen(5000, () => {
  console.log("server started");
});
