const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://Admin:XmjPj15hPuYqEblw@nasacluster.zth9zql.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
	console.log("MongoDB: Connection made!");
});

mongoose.connection.on("error", (error) => {
	console.error(error);
});

async function mongoConnect() {
	await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
	await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect };
