import Router from 'express'
import deviceController from '../controllers/deviceController.js';
import checkRole from '../middleweare/checkMiddleweare.js';

const router = new Router



router.post('/',checkRole('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)









export default router