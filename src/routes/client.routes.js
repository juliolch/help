import Router from "express";
import * as clientControllers from "../controllers/client.controllers"
import {verifyToken,isAdmin} from "../middlewares/authjwt"

const router = Router();

router.post('/',[verifyToken,isAdmin],clientControllers.createClient);

router.get('/',clientControllers.getClients);

router.get('/:clientId',clientControllers.getClientById);

router.put('/:clientId',clientControllers.updateClientById);

router.delete('/:clientId',clientControllers.DeleteClient);

export default router;