import express, { Request, Response } from 'express';
import { createBootcamp, deleteBootcamp, getBootcamp, getBootcamps, updateBootcamp } from '../controllers/bootcamps';
const router = express.Router();

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

export default router;