import Router from "express";
import * as userControllers from '../controllers/user.controllers'

const router = Router();

router.post('/singin', userControllers.singIn);

router.post('/singup', userControllers.singUp);

export default router;