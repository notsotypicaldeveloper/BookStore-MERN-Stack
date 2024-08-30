import dotenv  from 'dotenv';
dotenv.config({path:'./env'});

console.log(`BACKEND_PORT= `, process.env.BACKEND_PORT);

import express from "express";
import {PORT, mongoDBUrl}  from "./config.js";
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import booksRoute from './routes/booksRoutes.js';
import cors from 'cors';

const app = express();


// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// middleware for handling CORS POLICY
// Option 1:
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000', // Basically frontend url
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));




app.get('/', (request, response)=>{
    console.log(`request=============::::`);
    console.log(request);
    return response.status(234).send(`Welcome to BookStore`);
})

app.use('/books', booksRoute);



mongoose
.connect(mongoDBUrl)
.then(()=>{
    console.log(`App connected to database`);
    app.listen(PORT, ()=> {
        console.log(`App is listening to port: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
})