import express from 'express';
import Rdv from '../Api/RdvApi'

const router = express.Router();

router.post('/rdv/:security_number', Rdv.createRdv);
router.post('/rdv/doc/:RPPS', Rdv.createRdvDoc);
router.get('/all/rdv/', Rdv.getRdv);
router.get('/rdv/:security_number', Rdv.getRdvSécu);
router.get('/rdv/doc/:RPPS', Rdv.getRdvDoc);

export = router;