const mongoose = require("mongoose");
const { MONGO_URL, MONGO_DB_NAME } = require('../config/db.config')


// MongoClient Connection Method
exports.connect = (done) => {
  // MongoDB configuration
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, res) {
    if (err) {
      console.log('error connecting to MongoDB Database. ' + err);
    } else {
      console.log('Connected to Database');
    }
  });
}


