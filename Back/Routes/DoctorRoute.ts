import express from 'express';
import Doctor from '../Api/DoctorApi'
import Regex from '../Config/regex'
import { check, validationResult } from 'express-validator';
const router = express.Router();

router.get('/doctors', Doctor.getdoctors);
router.get('/doctors/:RPPS', Doctor.getdoctorRPPS);

router.post('/doctors',[
    check('email').isString().matches(Regex.regex.email, 'g').withMessage('Email incorrect'),
    check('phone').isString().matches(Regex.regex.phone, 'g').withMessage('Numéro de téléphone incorrect'),
    check('postal_code').isString().matches(Regex.regex.postal_code, 'g').withMessage('Code Postal incorrect'),
    check('RPPS').isString().matches(Regex.regex.rpps, 'g').withMessage('RPPS incorrect'),

], Doctor.createdoctor);
router.post('/doctors/login', Doctor.doctorlogin);

router.delete('/doctors/:RPPS', Doctor.deletedoctor);
router.put('/doctors/:RPPS',[
    check('email').isString().matches(Regex.regex_c.email_c, 'g').withMessage('email incorrect'),
    check('phone').isString().matches(Regex.regex_c.phone_c, 'g').withMessage('phone incorrect'),
    check('postal_code').isString().matches(Regex.regex_c.postal_code_c, 'g').withMessage('postal code incorrect')
], Doctor.updatedoctor);

export = router;