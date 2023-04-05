import express, { Express, NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import { HomeController } from '../controllers/homeController';
import { UserController } from '../controllers/userController';
const route: Express = express();

const homeController = Container.get(HomeController);
const userController = Container.get(UserController);

route.get('/', (req: Request, res: Response, next: NextFunction) => homeController.get(req, res, next));

route.get('/user/:id', (req: Request, res: Response, next: NextFunction) => userController.getUserById(req, res, next))
    .get('/users', (req: Request, res: Response, next: NextFunction) => userController.getAllUsers(req, res, next))
    .post('/add-user', (req: Request, res: Response, next: NextFunction) => userController.addUser(req, res, next))
    .post('/update-user/:id', (req: Request, res: Response, next: NextFunction) => userController.updateUser(req, res, next));

export = route;
