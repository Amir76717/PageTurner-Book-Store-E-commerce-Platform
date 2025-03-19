import express from 'express';
import authRouter from './auth.router.js';
import userRouter from './user.router.js';
import bookRouter from './book.router.js';
import reviewRouter from './review.router.js';
import cartRouter from './cart.router.js';
import orderRouter from './order.router'
const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/books', bookRouter);
router.use('/reviews', reviewRouter);
router.use('/cart', cartRouter);
router.use('/orders', orderRouter);

export default router;
