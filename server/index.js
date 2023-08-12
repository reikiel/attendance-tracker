/*
Todos:
1. utils file for logic
2. insert PH dates just as a date, no need time (prob: timezone stored in mysql is local but app reads as -8)
*/
const express = require("express");
const app = express();
const port = 8080;
const trackerRouter = require("./routes/trackerRouter");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/ph", trackerRouter);

//* Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
