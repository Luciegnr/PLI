const URL_base = process.env.URL_HOST || `http://127.0.0.1:4000/api`;
const URL_LOGIN = process.env.URL_NAME || `/users/login`;
const User = process.env.URL_NAME_TEST || "/users/";

const Urgence = process.env.URL_NAME_TEST || "/urgence/";
const ModifyUrgence = process.env.URL_NAME_TEST || "/urgence/modify/";

const RDV = process.env.URL_RDVREAD || "/rdv/";
const GetPdf = process.env.URL_RDVREAD || "/ordonnance/meta?filename=";
const InfoPdf = process.env.URL_RDVREAD || "/ordonnance/download?_id="
const URL = {
  url_login: URL_base + URL_LOGIN,
  url_user: URL_base + User,
  url_urgence: URL_base + Urgence,
  url_Put_Urgence: URL_base + ModifyUrgence,
  url_Rdv: URL_base + RDV,
  url_GetPdf: URL_base + GetPdf,
  url_InfoPdf: URL_base + InfoPdf,
  url_pdf: ".pdf"
};

const config = {
  url: URL,
};

export default config;
