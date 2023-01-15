import Router from 'express';
import brandController from '../controllers/brandController.js';
import checkRole from '../middleweare/checkMiddleweare.js';

const router = new Router();

router.post('/', checkRole('ADMIN'), brandController.create);
router.get('/', brandController.getAll);

export default router;
