import express from 'express';
import Urgence from '../Api/UrgenceApi'

const router = express.Router();
router.get('/urgence', Urgence.getUrgenceName);
router.get('/urgence/:security_number',  Urgence.geturgenceRPPS);
router.post('/urgence/:security_number', Urgence.createUrgence);
router.put('/urgence/modify/:security_number', Urgence.updateuser);

export = router;