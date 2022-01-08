import { MONGODB_URI} from "./config"
import { connect, Mongoose } from "mongoose";

(async() => {
    try {
        const db = await connect(MONGODB_URI);
        console.log("Db connected as: ", db.connection.name);
            
    } catch (error) {
        console.error(error);            
    }
})();