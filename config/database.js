const mongoose = require("mongoose");

const connectionString = "mongodb+srv://admin:abc1234@cluster0.6l4i9.mongodb.net/Treasure-Chest?retryWrites=true&w=majority";

mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});