const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/authorsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("established a connection to the database"))
  .catch((err) =>
    console.log("something went wrong when connecting to the database", err)
  );
