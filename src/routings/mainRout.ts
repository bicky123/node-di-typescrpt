import express, { Express, NextFunction, Request, Response } from 'express';
import Container from 'typedi'; 
import { HomeController } from '../controllers/homeController';
import { UserController } from '../controllers/userController';
const route: Express = express();

const homeController =  Container.get(HomeController);
const userController = Container.get(UserController);

route.get('/', (req: Request, res: Response, next: NextFunction) => homeController.get(req, res, next));

route.get('/users', (req: Request, res: Response, next: NextFunction) => userController.getUserById(req, res, next));

export = route;
