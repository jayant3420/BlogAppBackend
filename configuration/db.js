const mongoose = require("mongoose");
const url =
  "mongodb+srv://admin:admin@clustertest.w5ksk.mongodb.net/BlogAppDB?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGO_URI || url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((response) => {
    console.log("BlogAppDB Connection created successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
