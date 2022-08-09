import express from "express";
import path from "path";
import {engine} from "express-handlebars";
import MethodOverride from "method-override";
import "./database"

import { createRoles, createStates } from './libs/inicialSetup'

import homeRoutes from "./routes/home.routes" 
import clinetRoutes from "./routes/client.routes" 
import userRoutes from "./routes/user.routes"
import appoimentRoutes from "./routes/appoiment.routes"

const app = express();

app.listen(4000);
//initiliazations
createRoles();
createStates();

//settings
app.use(express.json());
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//Middlewares
app.use(express.urlencoded({extended:false}));
app.use(MethodOverride('_method'));

//Global Variables

//Routes
app.use('/home',homeRoutes);
app.use('/client',clinetRoutes);
app.use('/appoiment',appoimentRoutes);
app.use('/user',userRoutes);

//Statics Files
app.use(express.static(path.join(__dirname, 'public')))

//Server in listenning
console.log('sever listen on port', 4000);
