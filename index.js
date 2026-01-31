import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { page: "Home" });
});

app.get("/blogs", (req, res) => {
  res.render("blogs.ejs", { page: "Blogs" });
});

app.get("/create", (req, res) => {
  res.render("create.ejs", { page: "Create" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
