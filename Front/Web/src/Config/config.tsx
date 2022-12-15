import dotenv from 'dotenv';

dotenv.config();

// Configuration des URL en local dans une variable
const URL_HOST = process.env.URL_HOST || `http://127.0.0.1:4000`;
const URL_LOGIN = process.env.URL_NAME || `/api/doctors/login`;
const URL_BASE = process.env.URL_NAME_BASE || '/api/doctors/';
const URL_ORDER = process.env.URL_NAME_ORDER || '/api/ordonnance/';
const URL_RDV = process.env.URL_NAME_RDV || '/api/rdv/doc/';
const URL_PAT = process.env.URL_NAME_PAT || '/api/pat/';

//  Chemin des routes sur le front
const PATH_HOME = process.env.PATH_HOME || `/`;
const PATH_SIGNIN = process.env.PATH_HOME || `/signin`;
const PATH_SIGNUP = process.env.PATH_HOME || `/signup`;
const PATH_SUIVI = process.env.PATH_HOME || `/suivi`;
const PATH_PATIENT = process.env.PATH_HOME || `/patient`;
const PATH_MYRDV = process.env.PATH_HOME || `/myrdv`;
const PATH_PROFIL = process.env.PATH_HOME || `/profil`;

const URL = { 
    url_login: URL_HOST + URL_LOGIN,
    url_base: URL_HOST + URL_BASE,
    url_order: URL_HOST + URL_ORDER,
    url_rdv: URL_HOST + URL_RDV,
    url_pat: URL_HOST + URL_PAT,
} 

const PATH = {
    path_home: PATH_HOME,
    path_signin: PATH_SIGNIN,
    path_signup: PATH_SIGNUP,
    path_suivi: PATH_SUIVI,
    path_patient: PATH_PATIENT,
    path_myrdv: PATH_MYRDV,
    path_profil: PATH_PROFIL,

}

const config = {
    url: URL,
    path: PATH
}

export default config;