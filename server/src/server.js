const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL = "mongodb+srv://Admin:XmjPj15hPuYqEblw@nasacluster.zth9zql.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
	console.log("MongoDB: Connection made!");
});

mongoose.connection.on("error", (error) => {
	console.error(error);
});

// Get data before server is listening
async function startServer() {
	await mongoose.connect(MONGO_URL);
	await loadPlanetsData();

	server.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
}

startServer();
