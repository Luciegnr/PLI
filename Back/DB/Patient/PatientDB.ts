import * as mongoose from "mongoose";
import IUPat from "./PatientDBInterface";
const PatSchema: mongoose.Schema = new mongoose.Schema({
  RPPS: {
    type: String,
  },
  firstname_doc: {
    type: String,
  },
  lastname_doc: {
    type: String,
  },
  profession: {
    type: String,
  },
  city_doc: {
    type: String,
  },
  postal_code_doc: {
    type: String,
  },
  address_doc: {
    type: String,
  },
  phone_doc: {
    type: String,
    unique: true,
  },
  firstname_pat: {
    type: String,
  },
  lastname_pat: {
    type: String,
  },
  address_pat: {
    type: String,
  },
  postal_code_pat: {
    type: String,
  },
  city_pat: {
    type: String,
  },
  phone_pat: {
    type: String,
  },
  first_consultation: {
    type: String,
  },
  allergy_pat: {
    type: String,
  },
  birthday_pat: {
    type: String,
  },
  security_number: {
    type: String,
  },
});
export default mongoose.model<IUPat>("Pat", PatSchema);
