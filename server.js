const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000");
    })
  )
  .catch((error) => console.log(error.mesage));

// UTDglRm59UPLPNvp

// cO8e7gzINBUvHnbA
