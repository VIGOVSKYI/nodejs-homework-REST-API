const mongoose = require("mongoose");

const app = require("./app");

const process = require("process");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(3000, () => {
      console.log("Database connection successful. Use our API on port: 3000");
    })
  )
  .catch((error) => {
    console.log(error.mesage);
    process.exit(1);
  });
