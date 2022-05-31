const app = require("../app");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const { DB_HOST, PORT = 3333 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(('mongoose DB connection successful'));
    app.listen(PORT, () => {
      console.log('Server running. Use our API on port: ' + PORT);
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });