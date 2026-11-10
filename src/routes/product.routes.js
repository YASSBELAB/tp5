
import { Router } from 'express';
import { productController } from '../controllers/product.controller.js';
import { validateProduct } from '../middlewares/validator.middleware.js';

const router = Router();

router.get('/', productController.getAll);
router.get('/:id', productController.getById);

router.post('/', validateProduct, productController.create);
router.put('/:id', validateProduct, productController.update);

// PATCH: Update only product stock
router.patch('/:id/stock', productController.updateStock);

// PATCH: Partial product update
router.patch('/:id', productController.patch);

router.delete('/:id', productController.remove);

export default router;
