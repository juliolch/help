import Router from "express";
import * as appoimentControllers from "../controllers/appoiment.controllers"

const router = Router();

router.post('/',appoimentControllers.createAppoiment)

router.get('/',appoimentControllers.getAppoimnet)

router.get('/:appoiment',appoimentControllers.getAppoimentsById)

router.put('/:appoiment',appoimentControllers.updateAppoimentsById)

router.delete('/:appoimnet',appoimentControllers.DeleteAppoiment)

export default router;