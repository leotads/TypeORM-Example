import 'reflect-metadata';
import 'dotenv/config';

import express, {Request, Response, NextFunction} from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import userRoutes from './routes/user.route'
import createConnection from './config/database';



class App {
  public app: express.Application;

  constructor() {
    createConnection()
    this.app = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(cors())
    this.app.use(morgan("dev"))
  }

  private routes(): void {
    this.app.use(userRoutes)
  }
}

export default new App().app;