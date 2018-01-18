//Delete many data entries from database

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryEntry = {game: /^R/ };		//regular expression
	
	dbObj.collection("games").deleteMany(queryEntry, function(err, res){
		if(err) throw err;
		console.log(res.result.n + " documents deleted");		
		db.close();
	});
});