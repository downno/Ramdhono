import express from "express";
import cors from "cors";
import TopicRoute from "./routes/TopicRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(TopicRoute);

app.listen(5000, ()=> console.log('Server up and running...'));
