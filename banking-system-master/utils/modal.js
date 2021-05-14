const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/bankingSystem', { useNewUrlParser: true, useUnifiedTopology: true });

//getting connection of database as db variable
const db = mongoose.connection;

// logging error if occurs
db.on('error', console.error.bind(console, 'connection error:'));

// checking for once are we connected or not
db.once('open', function () {
    // we're connected!
    console.log("We are connected!");
});

const customer = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    balance: Number
});

const customers = mongoose.model("customers",customer);

module.exports = customers;