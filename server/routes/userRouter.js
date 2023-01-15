import Router from 'express'
import userController from '../controllers/userController.js';
import authMiddleweare from '../middleweare/authMiddleweare.js';

const router = new Router

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleweare, userController.check)









export default router