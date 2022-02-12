const mongoose = require("mongoose");

const connectDB = async () => {
    const username = process.env.dbusername;
    const dbname = process.env.dbname;
    const cluster = process.env.dbcluster;
    const password = process.env.dbpassword
    console.log(dbname,username,cluster,password);
    mongoose.connect(
        `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true
        }
    );

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Database Connected Successfully");
    });
}

module.exports = connectDB;