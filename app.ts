import 'reflect-metadata';
import express, { Request, Response, Express, NextFunction } from 'express';
import bodyParser from 'body-parser';
import router from './routings/mainRout';
import { StatusCodes } from './enums/status-codes';
const app: Express = express();
const PORT: string = process.env.PORT || '5000';

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

///global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (!err) {
        next();
    }
    console.log('Globally, Error :: ', JSON.stringify(err));
    res.status(StatusCodes.Status500InternalServerError).send({ success: false, msg: 'Some error occurs' });
});

app.use('/', router);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});