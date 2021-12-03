const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");
const hb = expressHandlebars.create({ defaultLayout: "main" });
const path = require("path");
const router = require("./routes/routes.js");

app.engine("handlebars", hb.engine);
app.set("view cache", true);
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.listen(3000, () => {
  console.log("App escuchando por puerto 3000...");
});
