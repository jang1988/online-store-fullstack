import Router from 'express'
import typeController from '../controllers/typeController.js';
import checkRole from '../middleweare/checkMiddleweare.js';

const router = new Router



router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)









export default router