import 'dotenv/config' // put values from the `.env` file to `process.env`
import app from './app';

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});