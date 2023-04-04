import express, { Express } from 'express';
import Container from 'typedi'; 
import { HomeController } from '../controllers/homeController';
const route: Express = express();

const homeController =  Container.get(HomeController);

route.get('/', (req, res, next) => homeController.get(req, res, next));

export = route;
