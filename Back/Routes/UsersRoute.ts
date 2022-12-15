import express from 'express';
import User from '../Api/UsersApi'
import Regex from '../Config/regex'
import { check, validationResult } from 'express-validator';
const router = express.Router();

router.get('/users', User.getusers);
router.get('/users/:security_number', User.getuserRPPS);
router.post('/users/login', User.userlogin);
router.post('/users',[
    check('email').isString().matches(Regex.regex.email, 'g').withMessage('Email incorrect'),
    check('phone').isString().matches(Regex.regex.phone, 'g').withMessage('Numéro de téléphone incorrect'),
    check('postal_code').isString().matches(Regex.regex.postal_code, 'g').withMessage('Code Postal incorrect'),
    check('security_number').isString().matches(Regex.regex.security_code, 'g').withMessage('Numéro de sécurité incorrect')
], User.createusers);
router.delete('/users/:security_number', User.deleteuser);
router.put('/users/:security_number',[
    check('email').isString().matches(Regex.regex_c.email_c, 'g').withMessage('email incorrect'),
    check('phone').isString().matches(Regex.regex_c.phone_c, 'g').withMessage('phone incorrect'),
    check('postal_code').isString().matches(Regex.regex_c.postal_code_c, 'g').withMessage('postal code incorrect'),
    check('security_number').isString().matches(Regex.regex_c.security_code_c, 'g').withMessage('security number code incorrect')
], User.updateuser);

export = router;