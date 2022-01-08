// https://www.youtube.com/watch?v=I-MhmB5B6Zk

import express from "express";
import { engine } from "express-handlebars";
import routers from "./routes/index";
import path from "path";
import morgan from "morgan";
const app = express();
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", engine({
    layoutsDir: path.join(app.get('views'), "layouts"),
    partialsDir: path.join(app.get('views'), "otherp"),
    defaultLayout: 'main',
    extname: ".hbs",
}));
app.set("view engine", ".hbs");

// Midleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routers
app.use(routers);

// Static files
app.use(express.static(path.join(__dirname, "public")));
export default app;