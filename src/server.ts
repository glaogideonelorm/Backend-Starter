import config from "./config";
import app from "./app";
import mongoose from "mongoose";

const port = config.server.port();
const mongoDBURI = config.mongoDb.uri();

const server = {
  start: async () => {
    try {
      await mongoose.connect(mongoDBURI);
      console.log("Successfully connected to MongoDB");

      app.listen(port, () => {
        console.log(`Server Running on Port ${port}`);
      });
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  },
};

export default server;
