import dotEnv from 'dotenv';
dotEnv.config({path: '../.env'});

const port = process.env.PORT || 8000;
const apiKey = process.env.API_KEY

export {port, apiKey};
