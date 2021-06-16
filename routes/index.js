import express from "express";

const router=express.Router();

import {loginController} from '../controllers';
import {fizzbuzzController} from '../controllers';



router.post('/login',loginController.login);
router.get('/fizzbuzz/:number',fizzbuzzController.game);

export default router;