import { config } from "./src/config/config.js";
import mongooseConnectionInstance from "./src/databases/mongo.cnx.js";
import server from "./src/server.js";

const runServer = async () => {
	try {
		await mongooseConnectionInstance.connect();
		server.listen(
			config.SERVER_PORT,
			config.SERVER_HOST,
			console.log(
				`✅ Server listening at http://${config.SERVER_HOST}:${config.SERVER_PORT}`,
			),
		);
	} catch (error) {
		console.error("❌ Error starting server:", error);
	}
};

runServer();
