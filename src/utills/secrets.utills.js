import dotenv from 'dotenv';
dotenv.config({});

export const expressPort = process.env.PORT
export const dbHost = process.env.DB_HOST
export const dbPassword = process.env.DB_PASSWORD
export const dbName = process.env.DB_NAME
export const dbUser = process.env.DB_USER
export const jwtSecret = process.env.JWT_SECRET

