import * as express from 'express';

import HouseRouter from './routes/house.route';

const app = express();

// parses the body of the request and makes it available in the req.body object
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/houses", HouseRouter);

// todo error handling

export default app;
