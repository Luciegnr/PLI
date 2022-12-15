import dotenv from 'dotenv';

dotenv.config();
// Mise en place de regex pour la vérification des champs
const R_EMAIL = process.env.R_EMAIL || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const R_PHONE = process.env.R_PHONE || /^0[1-9]([-. ]?[0-9]{2}){4}$/;
const R_POSTAL_CODE = process.env.R_POSTAL_CODE || /^\d{2}[ ]?\d{3}$/;
const R_SECURITY_CODE = process.env.R_SECURITY_CODE || /^[12][0-9]{2}[0-1][0-9](2[AB]|[0-9]{2})[0-9]{3}[0-9]{3}[0-9]{2}$/;
const R_RPPS = process.env.R_RPPS || /^[0-9]{11}$/;

const R_EMAIL_C = process.env.R_EMAIL_C || /^((([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))?$/;
const R_PHONE_C = process.env.R_PHONE_C || /^(0[1-9]([-. ]?[0-9]{2}){4})?$/;
const R_POSTAL_CODE_C = process.env.R_POSTAL_CODE_C || /^(\d{2}[ ]?\d{3})?$/;
const R_SECURITY_CODE_C = process.env.R_SECURITY_CODE_C || /^([12][0-9]{2}[0-1][0-9](2[AB]|[0-9]{2})[0-9]{3}[0-9]{3}[0-9]{2})?$/;


const Regex = { 
    email: R_EMAIL,
    phone: R_PHONE,
    postal_code: R_POSTAL_CODE,
    security_code: R_SECURITY_CODE,
    rpps: R_RPPS
} 

const Regex_C = {
    email_c: R_EMAIL_C,
    phone_c: R_PHONE_C,
    postal_code_c: R_POSTAL_CODE_C,
    security_code_c: R_SECURITY_CODE_C
}


const config = {
    regex: Regex,
    regex_c: Regex_C
}

export default config;