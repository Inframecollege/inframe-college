import {Router} from 'express';
import { createLogo, deleteLogoById, getLogo, updateLogoById } from '../controllers/logoController.js';

const LogoRouter = Router();

LogoRouter.post('/addlogo', createLogo)

LogoRouter.get('/getlogo', getLogo)

LogoRouter.put('/updatelogo/:id', updateLogoById)

LogoRouter.delete('/deletelogo/:id', deleteLogoById)

export default LogoRouter;