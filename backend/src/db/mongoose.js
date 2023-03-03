const mongoose = require("mongoose"); // new

mongoose.set("strictQuery", false);
mongoose.connect(process.env.BASE_DB, {
  useNewUrlParser: true,
});
