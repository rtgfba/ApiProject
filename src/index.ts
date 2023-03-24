import express from 'express';
import http from 'http';  
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

app.use(cors({
    credentials:true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server running on http:://localhost:3000/');
});

const MONGO_URL = process.env.MONGO_URL;

//initiate mongoose 
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

//create error catch in the event an error occurs
mongoose.connection.on('error', (error:Error) => console.log(error));