import mongodb from 'mongodb';
export default class db {
	constructor(){
		let mongoClient = mongodb.MongoClient;
		let url = 'mongodb://admin:harry123@localhost:27017/ai?authSource=admin';
		mongoClient.connect(url, function(err, db) {
			if(err){
				console.log(err);
				return;
			}
		  console.log("Connected correctly to server.");
		  db.close();
		});
	}
}