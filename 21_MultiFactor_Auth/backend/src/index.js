import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import session from 'express-session';
import passport from "passport"
import dbConnect from './config/dbConnect.js';
import "./config/passwort.config.js"
dotenv.config()
dbConnect();


const app = express();
const PORT = process.env.PORT || 7000;

const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
}

app.use(cors(corsOptions));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 60000 * 60  }
}))
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({ limit: '10mb',extended: true }));
app.use(passport.initialize());
app.use(passport.session());
import authRoute from './routes/auth.route.js';
app.use("/api/auth",authRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})