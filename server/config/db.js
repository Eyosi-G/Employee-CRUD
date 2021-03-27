const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/employee";
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false },
  (err) => {
    console.log("database connected");
  }
);
