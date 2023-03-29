import express, { Application } from 'express';
import bodyParser from 'body-parser';
import defaultRouter from './routes/default';

const app: Application = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1.5MB' }));

app.use(defaultRouter);

const port = 3000;
app.listen(port);

export default app;