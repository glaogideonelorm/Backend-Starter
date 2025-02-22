import express from "express";
import birdRoutes from "./routes/bird";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api/birds", birdRoutes);

export default app;
