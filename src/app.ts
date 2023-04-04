import express, { Application } from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import defaultRouter from './routes/defaultRouter';
import { catchNonApiRoutes } from './routes/catchNonApiRoutes';
import { AppErrorHandler } from './utils/app-error-handler';

const app: Application = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1.5MB' }));

app.use(catchNonApiRoutes);
app.use(defaultRouter);
app.use(AppErrorHandler);

export default app;
