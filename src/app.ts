import express, { Application } from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import defaultRouter from './routes/defaultRouter';
import { catchNonApiRoutesMiddleware } from './middlewares/catchNonApiRoutesMiddleware';
import { AppErrorHandler } from './middlewares/errorHandlerMiddleware';
import { checkJwtSecretMiddleware } from './middlewares/checkJwtSecretMiddleware';

const app: Application = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1.5MB' }));

app.use(checkJwtSecretMiddleware);
app.use(defaultRouter);
app.use(catchNonApiRoutesMiddleware);
app.use(AppErrorHandler);

export default app;
