import express from 'express';
import { config } from 'dotenv';

// -------------------------------------

export const useExpress = () => {
    const app = express();
    app.use(express.json());
    const route = express.Router();
    return { app, route };
};
// -------------------------------------

export const useDotenv = () => {
    config();
    const env =
        Object.freeze({
            port: process.env.PORT,
            url: process.env.API_URL,
            razkey: process.env.SECRET_KEY,
        });
    return env;


}

// -------------------------------------




// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
