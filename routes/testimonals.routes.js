import {Router} from 'express';
import { createTestimonials, deleteTestimonialsById, getTestimonials, updateTestimonialsById } from '../controllers/testimonialController.js';

const TestimonialsRouter = Router();

TestimonialsRouter.post('/addtestimonials', createTestimonials)

TestimonialsRouter.get('/gettestimonials', getTestimonials)

TestimonialsRouter.put('/updatetestimonials/:id', updateTestimonialsById)

TestimonialsRouter.delete('/deletetestimonials/:id', deleteTestimonialsById)

export default TestimonialsRouter;