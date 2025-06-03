// src/routes/blog.ts
import { Router } from 'express';
import blogRouter from './blog';



const router = Router();

router.use(blogRouter)


export default router;