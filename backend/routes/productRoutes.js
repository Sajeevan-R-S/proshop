import express from 'express';
import {
  getProductById,
  getProducts,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getProducts);
router.get('/top', getTopProducts);
router.route('/:id').get(checkObjectId, getProductById);
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);

export default router;
