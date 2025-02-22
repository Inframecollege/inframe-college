import {Router} from 'express';
import { createCategory, deleteCategoryById, getCategory, updateCategoryById } from '../controllers/categoriesController.js';

const CategoryRouter = Router();

CategoryRouter.post('/addcategory', createCategory)

CategoryRouter.get('/getcategory', getCategory)

CategoryRouter.put('/updatecategory/:id', updateCategoryById)


CategoryRouter.delete('/deletecategory/:id', deleteCategoryById)


export default CategoryRouter;


