const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


require("dotenv").config();

app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/uploads", express.static("uploads"));


app.use("/api/users", require("./routes/users"));

// define custom error message on not found routes
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Error when doing stuff into the database (when route exists)
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});




const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`[backend] Server Listening on ${port}`);
});
