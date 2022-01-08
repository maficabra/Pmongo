import app from "./apps";
import { PORT_URI } from "./config";
import './database';
app.listen(PORT_URI);
console.log("Server is port", PORT_URI);