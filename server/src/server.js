const http = require("http");

require("dotenv").config();

const app = require("./app");

const { mongoConnect } = require("./services/mongo");
const { loadPlanetsData } = require("./models/planets.model");
const { loadLaunchesData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// Get data before server is listening
async function startServer() {
	await mongoConnect();
	await loadPlanetsData();
	await loadLaunchesData();

	server.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
}

startServer();
