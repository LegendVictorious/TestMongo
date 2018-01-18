//Delete data entry from database

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryEntry = {game: "Doki Doki Literature Club"};
	
	dbObj.collection("games").deleteOne(queryEntry, function(err, res){
		if(err) throw err;
		console.log("One document deleted");		
		db.close();
	});
});