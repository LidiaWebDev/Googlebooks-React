const express = require("express");
const routes = require("./controllers");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Middleware
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}

// Add routes, both API and view
app.use(routes);

//MongoDB
const mongoose = require("mongoose");

// const dbName = "reactGoogleBooks";
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/googlebooks`, {
  useNewUrlParser: true
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/components"));
});

// start the application in server
app.listen(PORT, () => {
  console.log(`🌎=== > Lidia's Port ${PORT}!`);
});

// const sampleBook = {
//   title: "The Hunger Games",
//   authors: ["Suzanne Collins"],
//   description:
//     "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
//   image:
//     "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//   link:
//     "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
// };
