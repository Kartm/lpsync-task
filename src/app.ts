import express from 'express';
import HouseRouter from './routes/house.route';
import cors from "cors";

const app = express();

// parses the body of the request and makes it available in the req.body object
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// temporarily enable all CORS requests
app.use(cors())

app.use("/api", HouseRouter);

// todo error handling

export default app;
