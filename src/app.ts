import express, { Application, RequestHandler } from 'express';
import 'reflect-metadata';
import bodyParser from 'body-parser';
import defaultRouter from './routes/defaultRouter';

const app: Application = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1.5MB' }));

const catchNonApiRoutes: RequestHandler = (req, res, next) => {
  const { path } = req;
  if (!path.startsWith('/api/v1/')) {
    next(new Error(`Unknown route: ${path}`));
  } else {
    next();
  }
};

app.use(catchNonApiRoutes);
app.use(defaultRouter);

export default app;
