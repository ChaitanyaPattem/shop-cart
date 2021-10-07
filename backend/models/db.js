var mongoClient = require('mongodb');
var url = "mongodb://localhost:27017/mydb";

mongoClient.connect(url, function (err, db) {
    if(err) throw err
    console.log("database created");
    db.close();
})