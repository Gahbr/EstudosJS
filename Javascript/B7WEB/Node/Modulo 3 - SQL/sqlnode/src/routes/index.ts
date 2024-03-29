import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';
import { User } from '../models/User';

const router = Router();

router.get('/', HomeController.home);
router.post('/novousuario',UserController.novoUsuario);
router.patch('/usuario/:id/mais',UserController.aumentarIdade);
router.get('/usuario/:id/menos',UserController.diminuirIdade);
router.get('/usuario/:id/excluir',UserController.excluirUsuario);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);



export default router;