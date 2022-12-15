import express from 'express';
import Pat from '../Api/PatientApi'

const router = express.Router();
router.get('/pat', Pat.getpatients);
router.get('/pat/:RPPS',  Pat.getpatRPPS);
router.get('/doc/:security_number',  Pat.getdocsecu);
router.post('/pat/:RPPS', Pat.createpat);
router.delete('/doc/:RPPS/:security_number',  Pat.deletepatient);

export = router;