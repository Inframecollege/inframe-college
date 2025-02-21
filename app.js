import express from 'express';
import { PORT } from './config/env.js';
import connectToDatabase from './database/mongodb.js';
import CardRouter from './routes/Card.routes.js';
import cookieParser from 'cookie-parser';
import LogoRouter from './routes/logo.routes.js';
import ProgramsRouter from './routes/progams.routes.js';
import TestimonialsRouter from './routes/testimonals.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/card', CardRouter);
app.use('/api/v1/logo', LogoRouter);
app.use('/api/v1/programs', ProgramsRouter);
app.use('/api/v1/testimonials', TestimonialsRouter);
 


app.listen(PORT, async()=> {
    console.log(`server running on ${PORT}⚙️`)
    await connectToDatabase();
});

export default app;


