const express = require("express");
const app = express();
const routing = require("./routes.js");
app.use("/", routing);
app.listen(3000, () => {
  console.log("the server running on port 3000");
});

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/CRMdb", {
  useNewUrlParser: true,
});
