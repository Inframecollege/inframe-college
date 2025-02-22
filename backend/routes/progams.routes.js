import {Router} from 'express';
import { createPrograms, deleteProgramsById, getPrograms, updateProgramsById } from '../controllers/programsController.js';

const ProgramsRouter = Router();

ProgramsRouter.post('/addprogram', createPrograms)

ProgramsRouter.get('/getprogram', getPrograms)

ProgramsRouter.put('/updateprogram/:id', updateProgramsById)

ProgramsRouter.delete('/deleteprogram/:id', deleteProgramsById)

export default ProgramsRouter;