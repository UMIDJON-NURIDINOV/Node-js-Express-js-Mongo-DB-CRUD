const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shaxa:webshala5798@cluster0.5lswt.mongodb.net/myFirstDatabase?retryWrites=true",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("Mongo DB connected");
    } else {
      console.log("Error yes: " + err);
    }
  }
);

require("./employee.modul");
