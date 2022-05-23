import { Router } from "express";
import  multer  from "multer";

import * as ApiController from "../controller/apiController";

/* const storageConfig = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./tmp');
    },
    filename: (req,file, cb)=>{
        let randomName = Math.floor(Math.random() * 999999);
        cb(null, file.fieldname +`${randomName+ Date.now()}.jpg`);
    }
}) */

const upload = multer({
 //  storage: multer.memoryStorage() // salva na memoria em buffer
      dest: './tmp',
      fileFilter: (req, file, cb)=>{
         const allowed  : string[] = ['image/jpg, image/jpeg, image/png'];
         cb(null, allowed.includes(file.mimetype))
     }
            
         
      }
);

const router = Router();


router.get('/ping', ApiController.ping);
router.get('/random',ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.get('/frases',ApiController.listPhrases);
router.get('/frases/aleatoria', ApiController.randomPhrase);
router.get('/frases/:id',ApiController.getPhrase);
router.post('/frases', ApiController.createPhrase);
router.put('/frases/:id', ApiController.updatePhrase);
router.delete('/frases/:id', ApiController.deletePhrase);

router.post('/upload',upload.single('avatar'), ApiController.uploadFile);

export default router;