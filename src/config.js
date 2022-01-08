import { config } from "dotenv";
config();
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/test";
export const PORT_URI = process.env.PORT_URI || 3000
